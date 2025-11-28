import prisma from '@/lib/prisma'
import type { expense_category } from '@/app/generated/prisma/client'

// ============================================
// TYPES
// ============================================

export interface SupplierOption {
    id: number
    name: string
    ruc: string | null
}

export interface RecentExpense {
    id: number
    description: string
    category: expense_category
    total: number
    expense_date: Date
    is_paid: boolean
    is_fixed: boolean
    supplier_name: string | null
    receipt_reference: string | null
}

// ============================================
// QUERY FUNCTIONS
// ============================================

/**
 * Get active suppliers for dropdown
 */
export async function getActiveSuppliers(): Promise<SupplierOption[]> {
    try {
        const suppliers = await prisma.suppliers.findMany({
            where: {
                is_active: true
            },
            select: {
                id: true,
                name: true,
                ruc: true
            },
            orderBy: {
                name: 'asc'
            }
        })
        return suppliers
    } catch (error) {
        console.error('Error fetching suppliers:', error)
        return []
    }
}

/**
 * Get recent expenses
 * @param limit Number of expenses to retrieve (default: 10)
 */
export async function getRecentExpenses(limit: number = 10): Promise<RecentExpense[]> {
    try {
        const expenses = await prisma.expenses.findMany({
            take: limit,
            orderBy: {
                created_at: 'desc'
            },
            include: {
                supplier: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return expenses.map(expense => ({
            id: expense.id,
            description: expense.description,
            category: expense.category,
            total: Number(expense.total),
            expense_date: expense.expense_date,
            is_paid: expense.is_paid,
            is_fixed: expense.is_fixed,
            supplier_name: expense.supplier?.name || null,
            receipt_reference: expense.receipt_reference
        }))
    } catch (error) {
        console.error('Error fetching recent expenses:', error)
        return []
    }
}

/**
 * Get all expenses (limited to last 30 from current month)
 */
export async function getAllExpenses(): Promise<RecentExpense[]> {
    try {
        // Get current month date range
        const now = new Date()
        const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1)
        const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59, 999)

        const expenses = await prisma.expenses.findMany({
            take: 30,
            where: {
                expense_date: {
                    gte: startOfMonth,
                    lte: endOfMonth
                }
            },
            orderBy: {
                created_at: 'desc'
            },
            include: {
                supplier: {
                    select: {
                        name: true
                    }
                }
            }
        })

        return expenses.map(expense => ({
            id: expense.id,
            description: expense.description,
            category: expense.category,
            total: Number(expense.total),
            expense_date: expense.expense_date,
            is_paid: expense.is_paid,
            is_fixed: expense.is_fixed,
            supplier_name: expense.supplier?.name || null,
            receipt_reference: expense.receipt_reference
        }))
    } catch (error) {
        console.error('Error fetching all expenses:', error)
        return []
    }
}
