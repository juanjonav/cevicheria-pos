import { getInventoryItems } from "@/lib/db/inventory"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { Package, AlertTriangle, CheckCircle2 } from "lucide-react"

export const dynamic = 'force-dynamic'

export default async function InventoryPage() {
    const items = await getInventoryItems()

    // Calculate summary statistics
    const totalItems = items.length
    const criticalItems = items.filter(item => item.status === 'critical').length
    const lowStockItems = items.filter(item => item.status === 'low').length
    const totalInventoryValue = items.reduce((sum, item) => sum + item.total_value, 0)

    return (
        <div className="flex h-screen bg-slate-50/50">
            <SidebarNav />
            <div className="flex-1 ml-20 md:ml-24 flex flex-col h-full overflow-hidden">
                <header className="flex items-center justify-between px-8 py-6 bg-white border-b shrink-0">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Inventario de Insumos</h1>
                        <p className="text-sm text-gray-500">Control de stock y valorización</p>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-8">
                    {/* Summary Cards */}
                    <div className="grid gap-6 md:grid-cols-4 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Items</CardTitle>
                                <Package className="h-4 w-4 text-gray-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-gray-900">{totalItems}</div>
                                <p className="text-xs text-muted-foreground">Insumos activos</p>
                            </CardContent>
                        </Card>

                        <Card className="border-rose-200 bg-rose-50/30">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Stock Crítico</CardTitle>
                                <AlertTriangle className="h-4 w-4 text-rose-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-rose-600">{criticalItems}</div>
                                <p className="text-xs text-muted-foreground">Requieren atención</p>
                            </CardContent>
                        </Card>

                        <Card className="border-amber-200 bg-amber-50/30">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Stock Bajo</CardTitle>
                                <AlertTriangle className="h-4 w-4 text-amber-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-amber-600">{lowStockItems}</div>
                                <p className="text-xs text-muted-foreground">Próximos a agotar</p>
                            </CardContent>
                        </Card>

                        <Card className="border-emerald-200 bg-emerald-50/30">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Valor Total</CardTitle>
                                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-emerald-600">
                                    S/ {totalInventoryValue.toFixed(2)}
                                </div>
                                <p className="text-xs text-muted-foreground">Inventario valorizado</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Inventory Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Lista de Insumos</CardTitle>
                            <CardDescription>Detalle completo del inventario actual</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[500px]">
                                <div className="space-y-3">
                                    {items.length > 0 ? (
                                        items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="flex items-center justify-between p-4 border rounded-lg bg-white hover:bg-slate-50 transition-colors"
                                            >
                                                <div className="flex-1 grid grid-cols-6 gap-4 items-center">
                                                    {/* Name & Status */}
                                                    <div className="col-span-2">
                                                        <div className="flex items-center gap-2">
                                                            <span className="font-medium text-slate-900">
                                                                {item.name}
                                                            </span>
                                                            <Badge
                                                                variant={
                                                                    item.status === 'critical'
                                                                        ? 'destructive'
                                                                        : item.status === 'low'
                                                                            ? 'outline'
                                                                            : 'default'
                                                                }
                                                                className={
                                                                    item.status === 'critical'
                                                                        ? 'bg-rose-500 hover:bg-rose-600'
                                                                        : item.status === 'low'
                                                                            ? 'text-amber-600 border-amber-200 bg-amber-50'
                                                                            : 'bg-emerald-500 hover:bg-emerald-600'
                                                                }
                                                            >
                                                                {item.status === 'critical'
                                                                    ? 'Crítico'
                                                                    : item.status === 'low'
                                                                        ? 'Bajo'
                                                                        : 'Normal'}
                                                            </Badge>
                                                        </div>
                                                    </div>

                                                    {/* Quantity & Unit */}
                                                    <div className="text-center">
                                                        <p className="text-sm font-semibold text-slate-900">
                                                            {item.quantity.toFixed(2)}
                                                        </p>
                                                        <p className="text-xs text-slate-500">{item.unit}</p>
                                                    </div>

                                                    {/* Min Stock */}
                                                    <div className="text-center">
                                                        <p className="text-sm text-slate-600">
                                                            {item.min_alert_level.toFixed(2)}
                                                        </p>
                                                        <p className="text-xs text-slate-400">Stock mín.</p>
                                                    </div>

                                                    {/* Unit Cost */}
                                                    <div className="text-center">
                                                        <p className="text-sm text-slate-600">
                                                            S/ {item.unit_cost.toFixed(2)}
                                                        </p>
                                                        <p className="text-xs text-slate-400">Costo unit.</p>
                                                    </div>

                                                    {/* Total Value */}
                                                    <div className="text-right">
                                                        <p className="text-sm font-bold text-slate-900">
                                                            S/ {item.total_value.toFixed(2)}
                                                        </p>
                                                        <p className="text-xs text-slate-400">Valor total</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center py-12 text-slate-500">
                                            No hay insumos registrados en el inventario.
                                        </div>
                                    )}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>
                </main>
            </div>
        </div>
    )
}
