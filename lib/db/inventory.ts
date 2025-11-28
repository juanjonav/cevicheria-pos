import prisma from '@/lib/prisma'

// ============================================
// TYPES
// ============================================

export interface InventoryItem {
    id: number
    name: string
    unit: string
    quantity: number
    min_alert_level: number
    unit_cost: number
    total_value: number
    status: 'normal' | 'low' | 'critical'
}

// ============================================
// QUERY FUNCTIONS
// ============================================

/**
 * Get all active inventory items with calculated values and status
 */
export async function getInventoryItems(): Promise<InventoryItem[]> {
    try {
        const items = await prisma.stock_items.findMany({
            where: {
                is_active: true
            },
            orderBy: {
                name: 'asc'
            }
        })

        return items.map(item => {
            const quantity = Number(item.quantity)
            const minAlertLevel = Number(item.min_alert_level)
            const unitCost = Number(item.unit_cost)
            const totalValue = quantity * unitCost

            // Calculate status based on quantity vs min_alert_level
            let status: 'normal' | 'low' | 'critical'
            if (quantity < minAlertLevel) {
                status = 'critical'
            } else if (quantity < minAlertLevel * 1.5) {
                status = 'low'
            } else {
                status = 'normal'
            }

            return {
                id: item.id,
                name: item.name,
                unit: item.unit,
                quantity,
                min_alert_level: minAlertLevel,
                unit_cost: unitCost,
                total_value: totalValue,
                status
            }
        })
    } catch (error) {
        console.error('Error fetching inventory items:', error)
        return []
    }
}
