import { getFinancialReports } from "@/lib/db/reports"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { TrendingUp, TrendingDown, DollarSign, Percent } from "lucide-react"

export const dynamic = 'force-dynamic'

export default async function ReportsPage() {
    const reports = await getFinancialReports()

    const categoryLabels: Record<string, string> = {
        supplies: "Insumos",
        staff: "Personal",
        services: "Servicios",
        maintenance: "Mantenimiento",
        transport: "Transporte",
        marketing: "Marketing",
        taxes: "Impuestos",
        other: "Otros"
    }

    return (
        <div className="flex h-screen bg-slate-50/50">
            <SidebarNav />
            <div className="flex-1 ml-20 md:ml-24 flex flex-col h-full overflow-hidden">
                <header className="flex items-center justify-between px-8 py-6 bg-white border-b shrink-0">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Reportes Financieros</h1>
                        <p className="text-sm text-gray-500">Estados financieros e indicadores de rentabilidad</p>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-8">
                    {/* Profitability Indicators */}
                    <div className="grid gap-6 md:grid-cols-4 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Margen Bruto</CardTitle>
                                <Percent className="h-4 w-4 text-emerald-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-emerald-600">
                                    {reports.profitabilityIndicators.grossMargin.toFixed(1)}%
                                </div>
                                <p className="text-xs text-muted-foreground">Rentabilidad sobre ventas</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Margen Neto</CardTitle>
                                <Percent className="h-4 w-4 text-blue-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-blue-600">
                                    {reports.profitabilityIndicators.netMargin.toFixed(1)}%
                                </div>
                                <p className="text-xs text-muted-foreground">Utilidad neta</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">ROI</CardTitle>
                                <TrendingUp className="h-4 w-4 text-purple-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-purple-600">
                                    {reports.profitabilityIndicators.roi.toFixed(1)}%
                                </div>
                                <p className="text-xs text-muted-foreground">Retorno sobre inversión</p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Punto Equilibrio</CardTitle>
                                <DollarSign className="h-4 w-4 text-amber-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-amber-600">
                                    S/ {reports.profitabilityIndicators.breakEvenPoint.toFixed(0)}
                                </div>
                                <p className="text-xs text-muted-foreground">Ventas mínimas</p>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 mb-8">
                        {/* Income Statement */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Estado de Resultados</CardTitle>
                                <CardDescription>Ingresos, costos y utilidades</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-2 border-b">
                                        <span className="font-semibold text-emerald-700">Ingresos por Ventas</span>
                                        <span className="font-bold text-emerald-700">
                                            S/ {reports.incomeStatement.revenue.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="flex justify-between items-center text-rose-600">
                                        <span>(-) Costo de Ventas</span>
                                        <span>S/ {reports.incomeStatement.costOfSales.toFixed(2)}</span>
                                    </div>

                                    <div className="flex justify-between items-center font-semibold pb-2 border-b">
                                        <span>Utilidad Bruta</span>
                                        <span>S/ {reports.incomeStatement.grossProfit.toFixed(2)}</span>
                                    </div>

                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-slate-600">Gastos Operativos:</p>
                                        {Object.entries(reports.incomeStatement.operatingExpenses).map(([key, value]) => {
                                            if (key === 'total') return null
                                            return (
                                                <div key={key} className="flex justify-between items-center text-sm pl-4">
                                                    <span className="text-slate-600">{categoryLabels[key] || key}</span>
                                                    <span className="text-rose-600">S/ {value.toFixed(2)}</span>
                                                </div>
                                            )
                                        })}
                                        <div className="flex justify-between items-center font-medium pt-2 border-t">
                                            <span>Total Gastos Operativos</span>
                                            <span className="text-rose-600">
                                                S/ {reports.incomeStatement.operatingExpenses.total.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center font-bold text-lg pt-2 border-t-2">
                                        <span className={reports.incomeStatement.netProfit >= 0 ? "text-emerald-700" : "text-rose-700"}>
                                            Utilidad Neta
                                        </span>
                                        <span className={reports.incomeStatement.netProfit >= 0 ? "text-emerald-700" : "text-rose-700"}>
                                            S/ {reports.incomeStatement.netProfit.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Balance Sheet */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Balance General</CardTitle>
                                <CardDescription>Activos, pasivos y patrimonio</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-semibold text-blue-700 mb-2">ACTIVOS</p>
                                        <div className="space-y-1 pl-4">
                                            <div className="flex justify-between text-sm">
                                                <span>Efectivo</span>
                                                <span>S/ {reports.balanceSheet.assets.cash.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Inventario</span>
                                                <span>S/ {reports.balanceSheet.assets.inventory.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between font-semibold pt-2 border-t">
                                                <span>Total Activos</span>
                                                <span>S/ {reports.balanceSheet.assets.total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-rose-700 mb-2">PASIVOS</p>
                                        <div className="space-y-1 pl-4">
                                            <div className="flex justify-between text-sm">
                                                <span>Cuentas por Pagar</span>
                                                <span>S/ {reports.balanceSheet.liabilities.accountsPayable.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between font-semibold pt-2 border-t">
                                                <span>Total Pasivos</span>
                                                <span>S/ {reports.balanceSheet.liabilities.total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-emerald-700 mb-2">PATRIMONIO</p>
                                        <div className="space-y-1 pl-4">
                                            <div className="flex justify-between text-sm">
                                                <span>Capital</span>
                                                <span>S/ {reports.balanceSheet.equity.capital.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span>Utilidades Retenidas</span>
                                                <span>S/ {reports.balanceSheet.equity.retainedEarnings.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between font-semibold pt-2 border-t">
                                                <span>Total Patrimonio</span>
                                                <span>S/ {reports.balanceSheet.equity.total.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between font-bold text-lg pt-2 border-t-2">
                                        <span>Pasivo + Patrimonio</span>
                                        <span>
                                            S/ {(reports.balanceSheet.liabilities.total + reports.balanceSheet.equity.total).toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Cash Flow */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Flujo de Caja</CardTitle>
                            <CardDescription>Entradas y salidas de efectivo</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="grid md:grid-cols-3 gap-6">
                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-emerald-700">ENTRADAS</p>
                                    <div className="flex justify-between text-sm">
                                        <span>Ventas Cobradas</span>
                                        <span className="font-semibold">S/ {reports.cashFlow.inflows.sales.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-bold pt-2 border-t">
                                        <span>Total Entradas</span>
                                        <span className="text-emerald-600">S/ {reports.cashFlow.inflows.total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-rose-700">SALIDAS</p>
                                    <div className="flex justify-between text-sm">
                                        <span>Gastos Pagados</span>
                                        <span className="font-semibold">S/ {reports.cashFlow.outflows.expenses.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between font-bold pt-2 border-t">
                                        <span>Total Salidas</span>
                                        <span className="text-rose-600">S/ {reports.cashFlow.outflows.total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <p className="text-sm font-semibold text-blue-700">FLUJO NETO</p>
                                    <div className="flex flex-col items-center justify-center h-full">
                                        <div className={`text-3xl font-bold ${reports.cashFlow.netCashFlow >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                                            S/ {reports.cashFlow.netCashFlow.toFixed(2)}
                                        </div>
                                        <p className="text-xs text-muted-foreground mt-1">
                                            {reports.cashFlow.netCashFlow >= 0 ? 'Positivo' : 'Negativo'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    )
}
