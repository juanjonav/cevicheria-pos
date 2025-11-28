"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import type { expense_category } from "@/app/generated/prisma/client"

interface Expense {
    id: number
    description: string
    category: expense_category
    total: number
    expense_date: Date
    is_paid: boolean
    is_fixed: boolean
    supplier_name: string | null
    receipt_reference: string | null
}

interface ExpenseTabsProps {
    expenses: Expense[]
}

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

export function ExpenseTabs({ expenses }: ExpenseTabsProps) {
    // Filter functions
    const allExpenses = expenses
    const fixedExpenses = expenses.filter(e => e.is_fixed)
    const servicesExpenses = expenses.filter(e => e.category === 'services')
    const staffExpenses = expenses.filter(e => e.category === 'staff')
    const operationalExpenses = expenses.filter(e =>
        ['supplies', 'maintenance', 'transport', 'marketing', 'taxes', 'other'].includes(e.category)
    )

    // Render expense list
    const renderExpenseList = (expenseList: Expense[]) => (
        <ScrollArea className="h-[600px] pr-4">
            <div className="space-y-4">
                {expenseList.length > 0 ? (
                    expenseList.map((expense) => (
                        <div
                            key={expense.id}
                            className="flex items-start justify-between p-4 border rounded-lg bg-white hover:bg-slate-50 transition-colors"
                        >
                            <div className="space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="font-medium text-slate-900">
                                        {categoryLabels[expense.category] || expense.category}
                                    </span>
                                    <Badge
                                        variant={expense.is_paid ? "default" : "outline"}
                                        className={expense.is_paid ? "bg-emerald-500 hover:bg-emerald-600" : "text-amber-600 border-amber-200 bg-amber-50"}
                                    >
                                        {expense.is_paid ? "Pagado" : "Pendiente"}
                                    </Badge>
                                    {expense.is_fixed && (
                                        <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                                            Fijo
                                        </Badge>
                                    )}
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
                        No hay gastos en esta categoría.
                    </div>
                )}
            </div>
        </ScrollArea>
    )

    return (
        <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="all">
                    Todos ({allExpenses.length})
                </TabsTrigger>
                <TabsTrigger value="fixed">
                    Fijos ({fixedExpenses.length})
                </TabsTrigger>
                <TabsTrigger value="services">
                    Servicios ({servicesExpenses.length})
                </TabsTrigger>
                <TabsTrigger value="staff">
                    Personal ({staffExpenses.length})
                </TabsTrigger>
                <TabsTrigger value="operational">
                    Operativos ({operationalExpenses.length})
                </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
                {renderExpenseList(allExpenses)}
            </TabsContent>

            <TabsContent value="fixed">
                {renderExpenseList(fixedExpenses)}
            </TabsContent>

            <TabsContent value="services">
                {renderExpenseList(servicesExpenses)}
            </TabsContent>

            <TabsContent value="staff">
                {renderExpenseList(staffExpenses)}
            </TabsContent>

            <TabsContent value="operational">
                {renderExpenseList(operationalExpenses)}
            </TabsContent>
        </Tabs>
    )
}
