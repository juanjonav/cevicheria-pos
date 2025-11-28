import prisma from '@/lib/prisma'

// ============================================
// TYPES
// ============================================

export interface IncomeStatement {
    revenue: number              // Ingresos por ventas
    costOfSales: number         // Costo de ventas (basado en recetas)
    grossProfit: number         // Utilidad bruta
    operatingExpenses: {        // Gastos operativos por categoría
        supplies: number
        staff: number
        services: number
        maintenance: number
        transport: number
        marketing: number
        taxes: number
        other: number
        total: number
    }
    netProfit: number           // Utilidad neta
}

export interface BalanceSheet {
    assets: {
        cash: number            // Efectivo (flujo de caja)
        inventory: number       // Inventario valorizado
        total: number
    }
    liabilities: {
        accountsPayable: number // Gastos pendientes de pago
        total: number
    }
    equity: {
        capital: number         // Capital inicial (asumido)
        retainedEarnings: number // Utilidades retenidas
        total: number
    }
}

export interface CashFlow {
    inflows: {
        sales: number           // Ventas cobradas
        total: number
    }
    outflows: {
        expenses: number        // Gastos pagados
        total: number
    }
    netCashFlow: number
}

export interface ProfitabilityIndicators {
    grossMargin: number         // Margen bruto %
    netMargin: number           // Margen neto %
    roi: number                 // Return on Investment %
    breakEvenPoint: number      // Punto de equilibrio en ventas
}

export interface FinancialReports {
    incomeStatement: IncomeStatement
    balanceSheet: BalanceSheet
    cashFlow: CashFlow
    profitabilityIndicators: ProfitabilityIndicators
}

// ============================================
// QUERY FUNCTIONS
// ============================================

/**
 * Get comprehensive financial reports
 */
export async function getFinancialReports(): Promise<FinancialReports> {
    try {
        // Fetch all necessary data
        const [orders, expenses, stockItems, stockMovements] = await Promise.all([
            prisma.orders.findMany({
                where: {
                    status: {
                        in: ['completed']
                    }
                },
                include: {
                    order_lines: {
                        include: {
                            menu_item: {
                                include: {
                                    recipe_items: {
                                        include: {
                                            stock_item: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }),
            prisma.expenses.findMany(),
            prisma.stock_items.findMany({
                where: {
                    is_active: true
                }
            }),
            prisma.stock_movements.findMany({
                where: {
                    movement_type: 'out'
                }
            })
        ])

        // ===== INCOME STATEMENT =====

        // Calculate revenue from completed orders
        const revenue = orders.reduce((sum, order) => sum + Number(order.total), 0)

        // Calculate cost of sales from recipe items
        let costOfSales = 0
        for (const order of orders) {
            for (const line of order.order_lines) {
                const recipeItems = line.menu_item.recipe_items
                for (const recipeItem of recipeItems) {
                    const itemCost = Number(recipeItem.quantity) * Number(recipeItem.stock_item.unit_cost)
                    costOfSales += itemCost * line.quantity
                }
            }
        }

        const grossProfit = revenue - costOfSales

        // Calculate operating expenses by category
        const operatingExpenses = {
            supplies: 0,
            staff: 0,
            services: 0,
            maintenance: 0,
            transport: 0,
            marketing: 0,
            taxes: 0,
            other: 0,
            total: 0
        }

        for (const expense of expenses) {
            const amount = Number(expense.total)
            operatingExpenses[expense.category] = (operatingExpenses[expense.category] || 0) + amount
            operatingExpenses.total += amount
        }

        const netProfit = grossProfit - operatingExpenses.total

        // ===== BALANCE SHEET =====

        // Assets
        const paidExpenses = expenses.filter(e => e.is_paid).reduce((sum, e) => sum + Number(e.total), 0)
        const cash = revenue - paidExpenses // Simplified cash calculation

        const inventory = stockItems.reduce((sum, item) => {
            return sum + (Number(item.quantity) * Number(item.unit_cost))
        }, 0)

        const totalAssets = cash + inventory

        // Liabilities
        const accountsPayable = expenses.filter(e => !e.is_paid).reduce((sum, e) => sum + Number(e.total), 0)
        const totalLiabilities = accountsPayable

        // Equity
        const assumedCapital = 10000 // Capital inicial asumido
        const retainedEarnings = netProfit
        const totalEquity = assumedCapital + retainedEarnings

        // ===== CASH FLOW =====

        const salesInflows = revenue
        const expensesOutflows = expenses.filter(e => e.is_paid).reduce((sum, e) => sum + Number(e.total), 0)
        const netCashFlow = salesInflows - expensesOutflows

        // ===== PROFITABILITY INDICATORS =====

        const grossMargin = revenue > 0 ? (grossProfit / revenue) * 100 : 0
        const netMargin = revenue > 0 ? (netProfit / revenue) * 100 : 0
        const roi = assumedCapital > 0 ? (netProfit / assumedCapital) * 100 : 0

        // Break-even point: Fixed costs / (1 - Variable cost ratio)
        const fixedCosts = expenses.filter(e => e.is_fixed).reduce((sum, e) => sum + Number(e.total), 0)
        const variableCostRatio = revenue > 0 ? costOfSales / revenue : 0
        const breakEvenPoint = variableCostRatio < 1 ? fixedCosts / (1 - variableCostRatio) : 0

        return {
            incomeStatement: {
                revenue,
                costOfSales,
                grossProfit,
                operatingExpenses,
                netProfit
            },
            balanceSheet: {
                assets: {
                    cash,
                    inventory,
                    total: totalAssets
                },
                liabilities: {
                    accountsPayable,
                    total: totalLiabilities
                },
                equity: {
                    capital: assumedCapital,
                    retainedEarnings,
                    total: totalEquity
                }
            },
            cashFlow: {
                inflows: {
                    sales: salesInflows,
                    total: salesInflows
                },
                outflows: {
                    expenses: expensesOutflows,
                    total: expensesOutflows
                },
                netCashFlow
            },
            profitabilityIndicators: {
                grossMargin,
                netMargin,
                roi,
                breakEvenPoint
            }
        }
    } catch (error) {
        console.error('Error fetching financial reports:', error)
        // Return empty reports on error
        return {
            incomeStatement: {
                revenue: 0,
                costOfSales: 0,
                grossProfit: 0,
                operatingExpenses: {
                    supplies: 0,
                    staff: 0,
                    services: 0,
                    maintenance: 0,
                    transport: 0,
                    marketing: 0,
                    taxes: 0,
                    other: 0,
                    total: 0
                },
                netProfit: 0
            },
            balanceSheet: {
                assets: { cash: 0, inventory: 0, total: 0 },
                liabilities: { accountsPayable: 0, total: 0 },
                equity: { capital: 0, retainedEarnings: 0, total: 0 }
            },
            cashFlow: {
                inflows: { sales: 0, total: 0 },
                outflows: { expenses: 0, total: 0 },
                netCashFlow: 0
            },
            profitabilityIndicators: {
                grossMargin: 0,
                netMargin: 0,
                roi: 0,
                breakEvenPoint: 0
            }
        }
    }
}
