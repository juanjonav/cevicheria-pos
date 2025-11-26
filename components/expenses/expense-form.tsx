"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Loader2, Plus, Save } from "lucide-react"
import { cn } from "@/lib/utils"

interface Supplier {
    id: number
    name: string
    ruc: string | null
}

interface ExpenseFormProps {
    suppliers: Supplier[]
}

const CATEGORIES = [
    { value: "supplies", label: "Insumos" },
    { value: "staff", label: "Personal" },
    { value: "services", label: "Servicios" },
    { value: "maintenance", label: "Mantenimiento" },
    { value: "transport", label: "Transporte" },
    { value: "marketing", label: "Marketing" },
    { value: "taxes", label: "Impuestos" },
    { value: "other", label: "Otros" },
]

export function ExpenseForm({ suppliers }: ExpenseFormProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const [formData, setFormData] = useState({
        category: "supplies",
        supplier_id: "",
        amount: "",
        tax: "",
        total: "",
        description: "",
        receipt_reference: "",
        expense_date: new Date().toISOString().split('T')[0],
        is_paid: true
    })

    // Auto-calculate tax and total when amount changes
    useEffect(() => {
        const amount = parseFloat(formData.amount) || 0
        if (amount > 0) {
            // Assuming amount is base, tax is 18% (IGV in Peru)
            // Or if user enters total, we might want to back-calculate. 
            // For simplicity, let's assume user enters base amount and we calc tax.
            // BUT, usually in stores you just pay the total.
            // Let's make it flexible: if user enters amount, we calc tax (18%) and total.
            // Actually, let's just let user enter Amount and Tax manually, but provide a helper.

            // Let's assume the input 'amount' is the base.
            const tax = parseFloat((amount * 0.18).toFixed(2))
            const total = parseFloat((amount + tax).toFixed(2))

            setFormData(prev => ({
                ...prev,
                tax: tax.toString(),
                total: total.toString()
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                tax: "",
                total: ""
            }))
        }
    }, [formData.amount])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setSuccess(false)

        try {
            const response = await fetch("/api/expenses", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    supplier_id: formData.supplier_id ? Number(formData.supplier_id) : null,
                }),
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || "Error al guardar el gasto")
            }

            setSuccess(true)
            setFormData({
                category: "supplies",
                supplier_id: "",
                amount: "",
                tax: "",
                total: "",
                description: "",
                receipt_reference: "",
                expense_date: new Date().toISOString().split('T')[0],
                is_paid: true
            })

            router.refresh()

            // Hide success message after 3 seconds
            setTimeout(() => setSuccess(false), 3000)

        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target

        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked
            setFormData(prev => ({ ...prev, [name]: checked }))
        } else {
            setFormData(prev => ({ ...prev, [name]: value }))
        }
    }

    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Registrar Nuevo Gasto</CardTitle>
                <CardDescription>Ingresa los detalles del gasto operativo o compra.</CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="p-3 bg-emerald-50 text-emerald-600 text-sm rounded-lg border border-emerald-100">
                            ¡Gasto registrado correctamente!
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Categoría</label>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                required
                            >
                                {CATEGORIES.map(cat => (
                                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Proveedor (Opcional)</label>
                            <select
                                name="supplier_id"
                                value={formData.supplier_id}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                            >
                                <option value="">-- Seleccionar --</option>
                                {suppliers.map(sup => (
                                    <option key={sup.id} value={sup.id}>{sup.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Monto Base (S/)</label>
                            <input
                                type="number"
                                name="amount"
                                value={formData.amount}
                                onChange={handleChange}
                                step="0.01"
                                min="0"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                required
                                placeholder="0.00"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">IGV / Impuesto (S/)</label>
                            <input
                                type="number"
                                name="tax"
                                value={formData.tax}
                                onChange={handleChange}
                                step="0.01"
                                min="0"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50"
                                placeholder="0.00"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Total (S/)</label>
                            <input
                                type="number"
                                name="total"
                                value={formData.total}
                                onChange={handleChange} // Allow manual override
                                step="0.01"
                                min="0"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold"
                                required
                                placeholder="0.00"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Fecha</label>
                            <input
                                type="date"
                                name="expense_date"
                                value={formData.expense_date}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Descripción</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[80px]"
                            placeholder="Detalles del gasto..."
                            required
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Nro. Comprobante (Opcional)</label>
                            <input
                                type="text"
                                name="receipt_reference"
                                value={formData.receipt_reference}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                placeholder="F001-123456"
                            />
                        </div>

                        <div className="flex items-center space-x-2 h-full pt-6">
                            <input
                                type="checkbox"
                                id="is_paid"
                                name="is_paid"
                                checked={formData.is_paid}
                                onChange={handleChange}
                                className="h-5 w-5 text-primary rounded border-gray-300 focus:ring-primary"
                            />
                            <label htmlFor="is_paid" className="text-sm font-medium cursor-pointer">
                                Gasto Pagado
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-primary text-white p-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Guardando...
                            </>
                        ) : (
                            <>
                                <Save className="h-4 w-4" />
                                Registrar Gasto
                            </>
                        )}
                    </button>
                </form>
            </CardContent>
        </Card>
    )
}
