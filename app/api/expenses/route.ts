import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { expense_category } from '@/app/generated/prisma/client'

export async function POST(req: Request) {
    try {
        const body = await req.json()
        const {
            category,
            supplier_id,
            amount,
            tax,
            total,
            description,
            receipt_reference,
            expense_date,
            is_paid
        } = body

        // Basic validation
        if (!category || !amount || !total || !description) {
            return NextResponse.json(
                { error: 'Faltan campos obligatorios (categoría, monto, total, descripción)' },
                { status: 400 }
            )
        }

        // Validate category is a valid enum value
        if (!Object.values(expense_category).includes(category)) {
            return NextResponse.json(
                { error: 'Categoría inválida' },
                { status: 400 }
            )
        }

        // Create expense
        // Using ID 1 for created_by as default admin user based on seed data
        const newExpense = await prisma.expenses.create({
            data: {
                category: category as expense_category,
                supplier_id: supplier_id ? Number(supplier_id) : null,
                amount: Number(amount),
                tax: Number(tax || 0),
                total: Number(total),
                description,
                receipt_reference: receipt_reference || null,
                is_paid: Boolean(is_paid),
                expense_date: expense_date ? new Date(expense_date) : new Date(),
                created_by: 1 // Default admin user
            }
        })

        return NextResponse.json(newExpense, { status: 201 })
    } catch (error) {
        console.error('Error creating expense:', error)
        return NextResponse.json(
            { error: 'Error al registrar el gasto' },
            { status: 500 }
        )
    }
}
