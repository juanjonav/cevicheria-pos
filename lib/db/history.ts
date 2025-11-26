import prisma from '@/lib/prisma'
import type { order_status, voucher_type } from '@/app/generated/prisma/client'

export interface HistorySale {
    id: number
    order_number: string
    order_date: Date
    items_count: number
    voucher_type: voucher_type | null
    status: order_status
    total: number
}

/**
 * Get sales history from orders table
 * @param limit Number of orders to retrieve (default: 50)
 */
export async function getSalesHistory(limit: number = 50): Promise<HistorySale[]> {
    try {
        const orders = await prisma.orders.findMany({
            take: limit,
            orderBy: {
                order_date: 'desc'
            },
            include: {
                order_lines: {
                    select: {
                        quantity: true
                    }
                }
            }
        })

        return orders.map(order => ({
            id: order.id,
            order_number: order.order_number,
            order_date: order.order_date,
            items_count: order.order_lines.reduce((sum, line) => sum + line.quantity, 0),
            voucher_type: order.voucher_type,
            status: order.status,
            total: Number(order.total)
        }))
    } catch (error) {
        console.error('Error fetching sales history:', error)
        return []
    }
}

/**
 * Get sales statistics for today
 */
export async function getTodayStats() {
    try {
        const today = new Date()
        today.setHours(0, 0, 0, 0)

        const tomorrow = new Date(today)
        tomorrow.setDate(tomorrow.getDate() + 1)

        // Get today's completed orders
        const todayOrders = await prisma.orders.findMany({
            where: {
                order_date: {
                    gte: today,
                    lt: tomorrow
                }
            },
            include: {
                order_lines: {
                    select: {
                        quantity: true
                    }
                }
            }
        })

        const completedOrders = todayOrders.filter(o => o.status === 'completed')
        const totalSales = completedOrders.reduce((sum, order) => sum + Number(order.total), 0)
        const totalOrders = todayOrders.length
        const completedCount = completedOrders.length
        const averageTicket = completedOrders.length > 0 ? totalSales / completedOrders.length : 0

        return {
            totalSales,
            totalOrders,
            completedCount,
            averageTicket
        }
    } catch (error) {
        console.error('Error fetching today stats:', error)
        return {
            totalSales: 0,
            totalOrders: 0,
            completedCount: 0,
            averageTicket: 0
        }
    }
}
