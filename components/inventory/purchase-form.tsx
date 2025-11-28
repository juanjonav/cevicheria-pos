"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Loader2, Save, X } from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface Supplier {
    id: number
    name: string
    ruc: string | null
}

interface StockItem {
    id: number
    name: string
    unit: string
}

interface PurchaseFormProps {
    suppliers: Supplier[]
    stockItems: StockItem[]
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function PurchaseForm({ suppliers, stockItems, open, onOpenChange }: PurchaseFormProps) {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState(false)

    const [formData, setFormData] = useState({
        supplier_id: "",
        stock_item_id: "",
        quantity: "",
        unit_cost: "",
        total_cost: "",
        purchase_date: new Date().toISOString().split('T')[0],
        notes: ""
    })

    // Auto-calculate total cost when quantity or unit_cost changes
    useEffect(() => {
        const quantity = parseFloat(formData.quantity) || 0
        const unitCost = parseFloat(formData.unit_cost) || 0

        if (quantity > 0 && unitCost >= 0) {
            const total = parseFloat((quantity * unitCost).toFixed(2))
            setFormData(prev => ({
                ...prev,
                total_cost: total.toString()
            }))
        } else {
            setFormData(prev => ({
                ...prev,
                total_cost: ""
            }))
        }
    }, [formData.quantity, formData.unit_cost])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)
        setSuccess(false)

        try {
            const response = await fetch("/api/purchases", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    supplier_id: formData.supplier_id ? Number(formData.supplier_id) : null,
                    stock_item_id: Number(formData.stock_item_id),
                }),
            })

            if (!response.ok) {
                const data = await response.json()
                throw new Error(data.error || "Error al registrar la compra")
            }

            setSuccess(true)
            setFormData({
                supplier_id: "",
                stock_item_id: "",
                quantity: "",
                unit_cost: "",
                total_cost: "",
                purchase_date: new Date().toISOString().split('T')[0],
                notes: ""
            })

            router.refresh()

            // Close dialog after success
            setTimeout(() => {
                setSuccess(false)
                onOpenChange(false)
            }, 1500)

        } catch (err: any) {
            setError(err.message)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    // Get selected item unit for display
    const selectedItem = stockItems.find(item => item.id === Number(formData.stock_item_id))

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Registrar Compra de Insumo</DialogTitle>
                    <DialogDescription>
                        Ingresa los detalles de la compra. El stock se actualizará automáticamente.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {error && (
                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                            {error}
                        </div>
                    )}

                    {success && (
                        <div className="p-3 bg-emerald-50 text-emerald-600 text-sm rounded-lg border border-emerald-100">
                            ¡Compra registrada correctamente! Stock actualizado.
                        </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Insumo *</label>
                            <select
                                name="stock_item_id"
                                value={formData.stock_item_id}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg bg-white focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                required
                            >
                                <option value="">-- Seleccionar Insumo --</option>
                                {stockItems.map(item => (
                                    <option key={item.id} value={item.id}>
                                        {item.name} ({item.unit})
                                    </option>
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
                            <label className="text-sm font-medium">
                                Cantidad * {selectedItem && `(${selectedItem.unit})`}
                            </label>
                            <input
                                type="number"
                                name="quantity"
                                value={formData.quantity}
                                onChange={handleChange}
                                step="0.001"
                                min="0.001"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                required
                                placeholder="0.000"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Costo Unitario (S/) *</label>
                            <input
                                type="number"
                                name="unit_cost"
                                value={formData.unit_cost}
                                onChange={handleChange}
                                step="0.01"
                                min="0"
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                required
                                placeholder="0.00"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Costo Total (S/)</label>
                            <input
                                type="number"
                                name="total_cost"
                                value={formData.total_cost}
                                readOnly
                                className="w-full p-2 border rounded-lg bg-slate-50 font-bold text-slate-900"
                                placeholder="0.00"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Fecha *</label>
                            <input
                                type="date"
                                name="purchase_date"
                                value={formData.purchase_date}
                                onChange={handleChange}
                                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-sm font-medium">Notas (Opcional)</label>
                        <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none transition-all min-h-[80px]"
                            placeholder="Detalles adicionales de la compra..."
                        />
                    </div>

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={() => onOpenChange(false)}
                            className="flex-1 bg-slate-100 text-slate-700 p-3 rounded-lg font-medium hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
                        >
                            <X className="h-4 w-4" />
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-primary text-white p-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    Guardando...
                                </>
                            ) : (
                                <>
                                    <Save className="h-4 w-4" />
                                    Registrar Compra
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
