import prisma from '@/lib/prisma'

// ============================================
// TYPES
// ============================================

export interface DishCostAnalysis {
    id: number
    name: string
    category: string
    price: number
    // Cost breakdown
    material_cost: number      // Costo de materia prima (receta)
    labor_cost: number         // Mano de obra (15% del precio)
    indirect_cost: number      // Costos indirectos (8% del precio)
    total_cost: number         // Suma de todos los costos
    // Margins
    gross_margin: number       // Precio - Costo total
    margin_percentage: number  // (Margen / Precio) × 100
}

// ============================================
// QUERY FUNCTIONS
// ============================================

/**
 * Get cost analysis for all menu items
 */
export async function getDishCostAnalysis(): Promise<DishCostAnalysis[]> {
    try {
        // Get all menu items with their recipes and categories
        const menuItems = await prisma.menu_items.findMany({
            include: {
                category: {
                    select: {
                        name: true
                    }
                },
                recipe_items: {
                    include: {
                        stock_item: {
                            select: {
                                unit_cost: true
                            }
                        }
                    }
                }
            },
            orderBy: [
                { category_id: 'asc' },
                { name: 'asc' }
            ]
        })

        // Calculate costs for each dish
        return menuItems.map(item => {
            const price = Number(item.price)

            // Calculate material cost from recipe
            const materialCost = item.recipe_items.reduce((sum, recipeItem) => {
                const quantity = Number(recipeItem.quantity)
                const unitCost = Number(recipeItem.stock_item.unit_cost)
                return sum + (quantity * unitCost)
            }, 0)

            // Calculate labor cost (15% of price)
            const laborCost = price * 0.15

            // Calculate indirect costs (8% of price)
            const indirectCost = price * 0.08

            // Calculate total cost
            const totalCost = materialCost + laborCost + indirectCost

            // Calculate margins
            const grossMargin = price - totalCost
            const marginPercentage = price > 0 ? (grossMargin / price) * 100 : 0

            return {
                id: item.id,
                name: item.name,
                category: item.category.name,
                price,
                material_cost: materialCost,
                labor_cost: laborCost,
                indirect_cost: indirectCost,
                total_cost: totalCost,
                gross_margin: grossMargin,
                margin_percentage: marginPercentage
            }
        })
    } catch (error) {
        console.error('Error fetching dish cost analysis:', error)
        return []
    }
}
