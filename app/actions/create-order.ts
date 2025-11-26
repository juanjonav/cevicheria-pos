"use server"

import { prisma } from "@/lib/prisma"
import { z } from "zod"
import { revalidatePath } from "next/cache"

// Input validation schema
const OrderItemSchema = z.object({
    id: z.number(),
    quantity: z.number().positive(),
    price: z.number().positive(),
})

const CreateOrderSchema = z.object({
    items: z.array(OrderItemSchema).min(1),
    paymentMethod: z.enum(["cash", "card", "yape", "plin", "transfer"]),
    total: z.number().positive(),
    userId: z.number().default(1), // TODO: Get from session
})

type CreateOrderInput = z.infer<typeof CreateOrderSchema>

export async function createOrder(input: CreateOrderInput) {
    try {
        // Validate input
        const validatedInput = CreateOrderSchema.parse(input)

        // Execute transaction
        const result = await prisma.$transaction(async (tx) => {
            // 1. Create order
            const order = await tx.orders.create({
                data: {
                    created_by: validatedInput.userId,
                    status: "completed",
                    order_type: "salon",
                    subtotal: validatedInput.total / 1.18, // Remove IGV
                    tax: validatedInput.total - validatedInput.total / 1.18,
                    total: validatedInput.total,
                    order_date: new Date(),
                },
            })

            // 2. Create order lines
            const orderLines = await Promise.all(
                validatedInput.items.map((item) =>
                    tx.order_lines.create({
                        data: {
                            order_id: order.id,
                            menu_item_id: item.id,
                            quantity: item.quantity,
                            price_at_sale: item.price,
                            line_total: item.price * item.quantity,
                        },
                    })
                )
            )

            // 3. Create payment
            const payment = await tx.payments.create({
                data: {
                    order_id: order.id,
                    method: validatedInput.paymentMethod,
                    amount: validatedInput.total,
                    payment_date: new Date(),
                    created_by: validatedInput.userId,
                },
            })

            // 4. Stock deduction
            for (const item of validatedInput.items) {
                // Get recipe items for this menu item
                const recipeItems = await tx.recipe_items.findMany({
                    where: { menu_item_id: item.id },
                    include: { stock_item: true },
                })

                // Process each recipe component
                for (const recipeItem of recipeItems) {
                    const quantityToDeduct = Number(recipeItem.quantity) * item.quantity

                    // Create stock movement
                    await tx.stock_movements.create({
                        data: {
                            stock_item_id: recipeItem.stock_item_id,
                            movement_type: "out",
                            quantity: quantityToDeduct,
                            related_order_id: order.id,
                            notes: `Venta: ${item.quantity}x item #${item.id}`,
                            movement_date: new Date(),
                            created_by: validatedInput.userId,
                        },
                    })

                    // Update stock quantity
                    await tx.stock_items.update({
                        where: { id: recipeItem.stock_item_id },
                        data: {
                            quantity: {
                                decrement: quantityToDeduct,
                            },
                        },
                    })
                }
            }

            return {
                order,
                orderLines,
                payment,
            }
        })

        // Revalidate relevant paths
        revalidatePath("/dashboard")
        revalidatePath("/history")

        return {
            success: true,
            data: result,
        }
    } catch (error) {
        console.error("Error creating order:", error)

        if (error instanceof z.ZodError) {
            return {
                success: false,
                error: "Datos de orden inválidos",
            }
        }

        return {
            success: false,
            error: "Error al crear la orden. Por favor intenta de nuevo.",
        }
    }
}
