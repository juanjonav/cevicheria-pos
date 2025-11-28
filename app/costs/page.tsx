import { getDishCostAnalysis } from "@/lib/db/costs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { TrendingUp, TrendingDown, DollarSign, ChefHat } from "lucide-react"

export const dynamic = 'force-dynamic'

export default async function CostsPage() {
    const dishes = await getDishCostAnalysis()

    // Calculate summary statistics
    const totalDishes = dishes.length
    const averageMargin = dishes.length > 0
        ? dishes.reduce((sum, dish) => sum + dish.margin_percentage, 0) / dishes.length
        : 0

    // Find most and least profitable dishes
    const sortedByMargin = [...dishes].sort((a, b) => b.margin_percentage - a.margin_percentage)
    const mostProfitable = sortedByMargin[0]
    const leastProfitable = sortedByMargin[sortedByMargin.length - 1]

    // Helper function to get margin status
    const getMarginStatus = (marginPercentage: number): { label: string; color: string } => {
        if (marginPercentage >= 30) {
            return { label: 'Excelente', color: 'bg-emerald-500 hover:bg-emerald-600' }
        } else if (marginPercentage >= 15) {
            return { label: 'Aceptable', color: 'text-amber-600 border-amber-200 bg-amber-50' }
        } else {
            return { label: 'Bajo', color: 'bg-rose-500 hover:bg-rose-600' }
        }
    }

    return (
        <div className="flex h-screen bg-slate-50/50">
            <SidebarNav />
            <div className="flex-1 ml-20 md:ml-24 flex flex-col h-full overflow-hidden">
                <header className="flex items-center justify-between px-8 py-6 bg-white border-b shrink-0">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Análisis de Costos</h1>
                        <p className="text-sm text-gray-500">Costos reales y márgenes por plato</p>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-8">
                    {/* Summary Cards */}
                    <div className="grid gap-6 md:grid-cols-4 mb-8">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Platos</CardTitle>
                                <ChefHat className="h-4 w-4 text-gray-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-gray-900">{totalDishes}</div>
                                <p className="text-xs text-muted-foreground">En el menú</p>
                            </CardContent>
                        </Card>

                        <Card className="border-blue-200 bg-blue-50/30">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Margen Promedio</CardTitle>
                                <DollarSign className="h-4 w-4 text-blue-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-blue-600">
                                    {averageMargin.toFixed(1)}%
                                </div>
                                <p className="text-xs text-muted-foreground">Del menú</p>
                            </CardContent>
                        </Card>

                        <Card className="border-emerald-200 bg-emerald-50/30">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Más Rentable</CardTitle>
                                <TrendingUp className="h-4 w-4 text-emerald-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm font-bold text-emerald-600 truncate">
                                    {mostProfitable?.name || 'N/A'}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {mostProfitable ? `${mostProfitable.margin_percentage.toFixed(1)}% margen` : ''}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-rose-200 bg-rose-50/30">
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Menos Rentable</CardTitle>
                                <TrendingDown className="h-4 w-4 text-rose-500" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-sm font-bold text-rose-600 truncate">
                                    {leastProfitable?.name || 'N/A'}
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    {leastProfitable ? `${leastProfitable.margin_percentage.toFixed(1)}% margen` : ''}
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Cost Analysis Table */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Desglose de Costos por Plato</CardTitle>
                            <CardDescription>
                                Análisis detallado: materia prima, mano de obra (15%), costos indirectos (8%)
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ScrollArea className="h-[500px]">
                                <div className="space-y-3">
                                    {dishes.length > 0 ? (
                                        dishes.map((dish) => {
                                            const marginStatus = getMarginStatus(dish.margin_percentage)
                                            return (
                                                <div
                                                    key={dish.id}
                                                    className="p-4 border rounded-lg bg-white hover:bg-slate-50 transition-colors"
                                                >
                                                    <div className="grid grid-cols-12 gap-4 items-center">
                                                        {/* Name & Category */}
                                                        <div className="col-span-3">
                                                            <div className="flex flex-col gap-1">
                                                                <span className="font-medium text-slate-900">
                                                                    {dish.name}
                                                                </span>
                                                                <span className="text-xs text-slate-500">
                                                                    {dish.category}
                                                                </span>
                                                            </div>
                                                        </div>

                                                        {/* Material Cost */}
                                                        <div className="col-span-1 text-center">
                                                            <p className="text-sm text-slate-900">
                                                                S/ {dish.material_cost.toFixed(2)}
                                                            </p>
                                                            <p className="text-xs text-slate-400">Materia P.</p>
                                                        </div>

                                                        {/* Labor Cost */}
                                                        <div className="col-span-1 text-center">
                                                            <p className="text-sm text-slate-900">
                                                                S/ {dish.labor_cost.toFixed(2)}
                                                            </p>
                                                            <p className="text-xs text-slate-400">M. Obra</p>
                                                        </div>

                                                        {/* Indirect Cost */}
                                                        <div className="col-span-1 text-center">
                                                            <p className="text-sm text-slate-900">
                                                                S/ {dish.indirect_cost.toFixed(2)}
                                                            </p>
                                                            <p className="text-xs text-slate-400">Indirectos</p>
                                                        </div>

                                                        {/* Total Cost */}
                                                        <div className="col-span-2 text-center">
                                                            <p className="text-sm font-semibold text-slate-900">
                                                                S/ {dish.total_cost.toFixed(2)}
                                                            </p>
                                                            <p className="text-xs text-slate-400">Costo Total</p>
                                                        </div>

                                                        {/* Sale Price */}
                                                        <div className="col-span-1 text-center">
                                                            <p className="text-sm font-semibold text-blue-600">
                                                                S/ {dish.price.toFixed(2)}
                                                            </p>
                                                            <p className="text-xs text-slate-400">Precio</p>
                                                        </div>

                                                        {/* Gross Margin */}
                                                        <div className="col-span-1 text-center">
                                                            <p className="text-sm font-semibold text-emerald-600">
                                                                S/ {dish.gross_margin.toFixed(2)}
                                                            </p>
                                                            <p className="text-xs text-slate-400">Margen</p>
                                                        </div>

                                                        {/* Margin % with Badge */}
                                                        <div className="col-span-2 text-right">
                                                            <div className="flex items-center justify-end gap-2">
                                                                <span className="text-lg font-bold text-slate-900">
                                                                    {dish.margin_percentage.toFixed(1)}%
                                                                </span>
                                                                <Badge
                                                                    variant={marginStatus.label === 'Aceptable' ? 'outline' : 'default'}
                                                                    className={marginStatus.color}
                                                                >
                                                                    {marginStatus.label}
                                                                </Badge>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div className="text-center py-12 text-slate-500">
                                            No hay platos con recetas configuradas.
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
