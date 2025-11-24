import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowDownRight, ArrowUpRight, DollarSign, Wallet, ShoppingBag } from "lucide-react"
import { recentSales, expenses } from "@/lib/data"

export default function DashboardPage() {
  // Calculate totals
  const totalSales = recentSales.filter((s) => s.status === "Completado").reduce((acc, curr) => acc + curr.total, 0)

  const totalExpenses = expenses.filter((e) => e.status === "Pagado").reduce((acc, curr) => acc + curr.amount, 0)

  const netCashFlow = totalSales - totalExpenses

  // Combine and sort transactions for the feed
  const transactions = [
    ...recentSales.map((s) => ({
      id: s.id,
      type: "income",
      description: `Venta #${s.id.split("-")[1]}`,
      amount: s.total,
      date: s.date,
      category: "Venta",
      status: s.status,
    })),
    ...expenses.map((e) => ({
      id: e.id,
      type: "expense",
      description: e.description,
      amount: e.amount,
      date: e.date,
      category: e.category,
      status: e.status,
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="flex flex-col h-screen bg-gray-50/50">
      <header className="flex items-center justify-between px-8 py-6 bg-white border-b">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Financiero</h1>
          <p className="text-sm text-gray-500">Resumen de flujo de caja y movimientos</p>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 bg-gray-100 px-4 py-2 rounded-full">
          <span>
            {new Date().toLocaleDateString("es-PE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </header>

      <main className="flex-1 overflow-auto p-8">
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
              <ArrowUpRight className="h-4 w-4 text-emerald-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-emerald-600">S/ {totalSales.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">+12.5% vs mes anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Gastos Operativos</CardTitle>
              <ArrowDownRight className="h-4 w-4 text-rose-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-rose-600">S/ {totalExpenses.toFixed(2)}</div>
              <p className="text-xs text-muted-foreground">Insumos y personal</p>
            </CardContent>
          </Card>
          <Card className={netCashFlow >= 0 ? "border-emerald-200 bg-emerald-50/30" : "border-rose-200 bg-rose-50/30"}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Flujo de Caja Neto</CardTitle>
              <Wallet className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className={cn("text-2xl font-bold", netCashFlow >= 0 ? "text-emerald-700" : "text-rose-700")}>
                S/ {netCashFlow.toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">Balance actual</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Movimientos Recientes</CardTitle>
              <CardDescription>Historial combinado de ventas y gastos</CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {transactions.map((t) => (
                    <div
                      key={t.id}
                      className="flex items-center justify-between p-4 border rounded-lg bg-white shadow-sm"
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "p-2 rounded-full",
                            t.type === "income" ? "bg-emerald-100 text-emerald-600" : "bg-rose-100 text-rose-600",
                          )}
                        >
                          {t.type === "income" ? (
                            <DollarSign className="h-4 w-4" />
                          ) : (
                            <ShoppingBag className="h-4 w-4" />
                          )}
                        </div>
                        <div>
                          <p className="text-sm font-medium leading-none">{t.description}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {t.category} •{" "}
                            {new Date(t.date).toLocaleTimeString("es-PE", { hour: "2-digit", minute: "2-digit" })}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span
                          className={cn("font-bold block", t.type === "income" ? "text-emerald-600" : "text-rose-600")}
                        >
                          {t.type === "income" ? "+" : "-"} S/ {t.amount.toFixed(2)}
                        </span>
                        <Badge variant="outline" className="mt-1 text-[10px] h-5">
                          {t.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Desglose de Gastos</CardTitle>
              <CardDescription>Distribución por categoría</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Insumos", "Personal", "Servicios", "Mantenimiento"].map((cat) => {
                  const amount = expenses.filter((e) => e.category === cat).reduce((acc, curr) => acc + curr.amount, 0)

                  if (amount === 0) return null

                  const percentage = (amount / totalExpenses) * 100

                  return (
                    <div key={cat} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{cat}</span>
                        <span className="text-muted-foreground">
                          S/ {amount.toFixed(2)} ({percentage.toFixed(0)}%)
                        </span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full" style={{ width: `${percentage}%` }} />
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">Estado Financiero</h4>
                <p className="text-xs text-blue-700 leading-relaxed">
                  El flujo de caja actual es positivo. Se recomienda mantener el control de gastos en insumos, que
                  representan la mayor parte de las salidas.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(" ")
}
