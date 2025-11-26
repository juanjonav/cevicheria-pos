import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id: idParam } = await params
        const id = parseInt(idParam)

        if (isNaN(id)) {
            return NextResponse.json(
                { error: 'Invalid order ID' },
                { status: 400 }
            )
        }

        const order = await prisma.orders.findUnique({
            where: { id },
            include: {
                client: {
                    select: {
                        name: true,
                        document_type: true,
                        document_number: true,
                        address: true
                    }
                },
                order_lines: {
                    include: {
                        menu_item: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                payments: {
                    select: {
                        method: true,
                        amount: true,
                        reference: true,
                        payment_date: true
                    }
                },
                user: {
                    select: {
                        full_name: true
                    }
                }
            }
        })

        if (!order) {
            return NextResponse.json(
                { error: 'Order not found' },
                { status: 404 }
            )
        }

        // Estructurar la respuesta similar al JSON sugerido
        const response = {
            id: order.id,
            order_number: order.order_number,
            voucher_type: order.voucher_type,
            voucher_number: order.voucher_number,
            order_date: order.order_date,
            status: order.status,
            totals: {
                subtotal: order.subtotal,
                tax: order.tax,
                discount: order.discount,
                total: order.total
            },
            client: order.client,
            items: order.order_lines.map(line => ({
                id: line.id,
                product_name: line.menu_item.name,
                quantity: line.quantity,
                price: line.price_at_sale,
                total: line.line_total,
                notes: line.notes
            })),
            payments: order.payments,
            cashier: order.user.full_name,
            notes: order.notes
        }

        return NextResponse.json(response)

    } catch (error) {
        console.error('Error fetching order details:', error)
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        )
    }
}
