import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {
            supplier_id,
            stock_item_id,
            quantity,
            unit_cost,
            purchase_date,
            notes
        } = body

        // Basic validation
        if (!stock_item_id || !quantity || !unit_cost) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios (insumo, cantidad, costo unitario)' },
                { status: 400 }
            )
        }

        // Validate positive numbers
        if (Number(quantity) <= 0 || Number(unit_cost) < 0) {
            return NextResponse.json(
                { error: 'La cantidad debe ser mayor a 0 y el costo no puede ser negativo' },
                { status: 400 }
            )
        }

        const quantityNum = Number(quantity)
        const unitCostNum = Number(unit_cost)
        const totalCost = quantityNum * unitCostNum

        // Use transaction to ensure atomicity
        const result = await prisma.$transaction(async (tx) => {
            // 1. Create stock movement record
            const movement = await tx.stock_movements.create({
                data: {
                    stock_item_id: Number(stock_item_id),
                    movement_type: 'in', // Purchase/incoming stock
                    quantity: quantityNum,
                    unit_cost: unitCostNum,
                    total_cost: totalCost,
                    supplier_id: supplier_id ? Number(supplier_id) : null,
                    notes: notes || null,
                    movement_date: purchase_date ? new Date(purchase_date) : new Date(),
                    created_by: 1 // Default admin user
                }
            })

            // 2. Update stock item quantity
            const stockItem = await tx.stock_items.findUnique({
                where: { id: Number(stock_item_id) }
            })

            if (!stockItem) {
                throw new Error('Insumo no encontrado')
            }

            const newQuantity = Number(stockItem.quantity) + quantityNum

            await tx.stock_items.update({
                where: { id: Number(stock_item_id) },
                data: {
                    quantity: newQuantity,
                    unit_cost: unitCostNum // Update unit cost with latest purchase price
                }
            })

            return movement
        })

        return NextResponse.json(result, { status: 201 })
    } catch (error: any) {
        console.error('Error creating purchase:', error)
        return NextResponse.json(
            { error: error.message || 'Error al registrar la compra' },
            { status: 500 }
        )
    }
}
