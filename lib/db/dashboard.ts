import prisma from '@/lib/prisma'
import type { expense_category, order_status } from '@/app/generated/prisma/client'

// ============================================
// TYPES
// ============================================

export interface DashboardSummary {
    totalSales: number
    totalExpenses: number
    netCashFlow: number
    salesCount: number
    expensesCount: number
}

export interface RecentSale {
    id: number
    order_number: string
    total: number
    order_date: Date
    status: order_status
    created_by_name: string | null
    items_count: number
}

export interface RecentExpense {
    id: number
    description: string
    category: expense_category
    total: number
    expense_date: Date
    is_paid: boolean
    supplier_name: string | null
}

export interface ExpenseByCategory {
    category: expense_category
    amount: number
    percentage: number
}

// ============================================
// QUERY FUNCTIONS
// ============================================

/**
 * Get recent sales/orders from database
 * @param limit Number of sales to retrieve (default: 10)
 */
export async function getRecentSales(limit: number = 10): Promise<RecentSale[]> {
    try {
        const sales = await prisma.orders.findMany({
            take: limit,
            orderBy: {
                order_date: 'desc'
            },
            include: {
                user: {
                    select: {
                        full_name: true
                    }
                },
                order_lines: {
                    select: {
                        quantity: true
                    }
                }
            }
        })

        return sales.map(sale => ({
            id: sale.id,
            order_number: sale.order_number,
            total: Number(sale.total),
            order_date: sale.order_date,
            status: sale.status,
            created_by_name: sale.user.full_name,
            items_count: sale.order_lines.reduce((sum, line) => sum + line.quantity, 0)
        }))
    } catch (error) {
        console.error('Error fetching recent sales:', error)
        return []
    }
}

/**
 * Get recent expenses from database
 * @param limit Number of expenses to retrieve (default: 10)
 */
export async function getRecentExpenses(limit: number = 10): Promise<RecentExpense[]> {
    try {
        const expenses = await prisma.expenses.findMany({
            take: limit,
            orderBy: {
                expense_date: 'desc'
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
            supplier_name: expense.supplier?.name || null
        }))
    } catch (error) {
        console.error('Error fetching recent expenses:', error)
        return []
    }
}

/**
 * Get dashboard summary with totals
 * @param dateFrom Optional start date for filtering
 * @param dateTo Optional end date for filtering
 */
export async function getDashboardSummary(
    dateFrom?: Date,
    dateTo?: Date
): Promise<DashboardSummary> {
    try {
        // Build date filter
        const dateFilter = dateFrom && dateTo
            ? {
                gte: dateFrom,
                lte: dateTo
            }
            : undefined

        // Get total sales (completed orders only)
        const salesAggregation = await prisma.orders.aggregate({
            _sum: {
                total: true
            },
            _count: true,
            where: {
                status: 'completed',
                ...(dateFilter && { order_date: dateFilter })
            }
        })

        // Get total expenses (paid expenses only)
        const expensesAggregation = await prisma.expenses.aggregate({
            _sum: {
                total: true
            },
            _count: true,
            where: {
                is_paid: true,
                ...(dateFilter && { expense_date: dateFilter })
            }
        })

        const totalSales = Number(salesAggregation._sum.total || 0)
        const totalExpenses = Number(expensesAggregation._sum.total || 0)

        return {
            totalSales,
            totalExpenses,
            netCashFlow: totalSales - totalExpenses,
            salesCount: salesAggregation._count,
            expensesCount: expensesAggregation._count
        }
    } catch (error) {
        console.error('Error fetching dashboard summary:', error)
        return {
            totalSales: 0,
            totalExpenses: 0,
            netCashFlow: 0,
            salesCount: 0,
            expensesCount: 0
        }
    }
}

/**
 * Get expenses breakdown by category
 * @param dateFrom Optional start date for filtering
 * @param dateTo Optional end date for filtering
 */
export async function getExpensesByCategory(
    dateFrom?: Date,
    dateTo?: Date
): Promise<ExpenseByCategory[]> {
    try {
        const dateFilter = dateFrom && dateTo
            ? {
                gte: dateFrom,
                lte: dateTo
            }
            : undefined

        const expenses = await prisma.expenses.findMany({
            where: {
                is_paid: true,
                ...(dateFilter && { expense_date: dateFilter })
            },
            select: {
                category: true,
                total: true
            }
        })

        // Group by category
        const categoryMap = new Map<expense_category, number>()
        let totalAmount = 0

        expenses.forEach(expense => {
            const amount = Number(expense.total)
            totalAmount += amount
            const currentAmount = categoryMap.get(expense.category) || 0
            categoryMap.set(expense.category, currentAmount + amount)
        })

        // Convert to array with percentages
        const result: ExpenseByCategory[] = Array.from(categoryMap.entries()).map(
            ([category, amount]) => ({
                category,
                amount,
                percentage: totalAmount > 0 ? (amount / totalAmount) * 100 : 0
            })
        )

        // Sort by amount descending
        return result.sort((a, b) => b.amount - a.amount)
    } catch (error) {
        console.error('Error fetching expenses by category:', error)
        return []
    }
}
