import { getActiveSuppliers, getRecentExpenses } from "@/lib/db/expenses"
import { ExpenseForm } from "@/components/expenses/expense-form"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { SidebarNav } from "@/components/layout/sidebar-nav"

export const dynamic = 'force-dynamic'

export default async function ExpensesPage() {
    const [suppliers, recentExpenses] = await Promise.all([
        getActiveSuppliers(),
        getRecentExpenses(10)
    ])

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
                        <h1 className="text-2xl font-bold text-gray-900">Registro de Gastos</h1>
                        <p className="text-sm text-gray-500">Administración de compras y gastos operativos</p>
                    </div>
                </header>

                <main className="flex-1 overflow-auto p-8">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Form Section */}
                        <div className="lg:col-span-1">
                            <ExpenseForm suppliers={suppliers} />
                        </div>

                        {/* List Section */}
                        <div className="lg:col-span-2">
                            <Card className="h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle>Gastos Recientes</CardTitle>
                                    <CardDescription>Últimos 10 movimientos registrados</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 min-h-0">
                                    <ScrollArea className="h-[600px] pr-4">
                                        <div className="space-y-4">
                                            {recentExpenses.length > 0 ? (
                                                recentExpenses.map((expense) => (
                                                    <div
                                                        key={expense.id}
                                                        className="flex items-start justify-between p-4 border rounded-lg bg-white hover:bg-slate-50 transition-colors"
                                                    >
                                                        <div className="space-y-1">
                                                            <div className="flex items-center gap-2">
                                                                <span className="font-medium text-slate-900">
                                                                    {categoryLabels[expense.category] || expense.category}
                                                                </span>
                                                                <Badge variant={expense.is_paid ? "default" : "outline"} className={expense.is_paid ? "bg-emerald-500 hover:bg-emerald-600" : "text-amber-600 border-amber-200 bg-amber-50"}>
                                                                    {expense.is_paid ? "Pagado" : "Pendiente"}
                                                                </Badge>
                                                            </div>
                                                            <p className="text-sm text-slate-600">{expense.description}</p>
                                                            <div className="flex items-center gap-2 text-xs text-slate-400">
                                                                <span>{format(new Date(expense.expense_date), "PPP", { locale: es })}</span>
                                                                {expense.supplier_name && (
                                                                    <>
                                                                        <span>•</span>
                                                                        <span>{expense.supplier_name}</span>
                                                                    </>
                                                                )}
                                                                {expense.receipt_reference && (
                                                                    <>
                                                                        <span>•</span>
                                                                        <span>Ref: {expense.receipt_reference}</span>
                                                                    </>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <span className="block font-bold text-slate-900">
                                                                S/ {expense.total.toFixed(2)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))
                                            ) : (
                                                <div className="text-center py-12 text-slate-500">
                                                    No hay gastos registrados recientemente.
                                                </div>
                                            )}
                                        </div>
                                    </ScrollArea>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
