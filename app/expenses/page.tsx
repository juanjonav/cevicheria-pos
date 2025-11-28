import { getActiveSuppliers, getAllExpenses } from "@/lib/db/expenses"
import { ExpenseForm } from "@/components/expenses/expense-form"
import { ExpenseTabs } from "@/components/expenses/expense-tabs"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { SidebarNav } from "@/components/layout/sidebar-nav"

export const dynamic = 'force-dynamic'

export default async function ExpensesPage() {
    const [suppliers, allExpenses] = await Promise.all([
        getActiveSuppliers(),
        getAllExpenses()
    ])

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

                        {/* List Section with Tabs */}
                        <div className="lg:col-span-2">
                            <Card className="h-full flex flex-col">
                                <CardHeader>
                                    <CardTitle>Gastos Registrados</CardTitle>
                                    <CardDescription>Filtra por categoría usando los tabs</CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1 min-h-0">
                                    <ExpenseTabs expenses={allExpenses} />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}
