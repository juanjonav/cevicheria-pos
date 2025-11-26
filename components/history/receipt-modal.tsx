"use client"

import { useState, useEffect } from "react"
import { Eye, X, Printer, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ReceiptModalProps {
    orderId: number
}

interface OrderDetails {
    id: number
    order_number: string
    voucher_type: string | null
    voucher_number: string | null
    order_date: string
    status: string
    totals: {
        subtotal: string
        tax: string
        discount: string
        total: string
    }
    client: {
        name: string
        document_type: string | null
        document_number: string | null
        address: string | null
    } | null
    items: Array<{
        id: number
        product_name: string
        quantity: number
        price: string
        total: string
        notes: string | null
    }>
    payments: Array<{
        method: string
        amount: string
        reference: string | null
    }>
    cashier: string | null
    notes: string | null
}

export function ReceiptModal({ orderId }: ReceiptModalProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState<OrderDetails | null>(null)
    const [error, setError] = useState<string | null>(null)

    const fetchDetails = async () => {
        try {
            setLoading(true)
            setError(null)
            const res = await fetch(`/api/orders/${orderId}/details`)
            if (!res.ok) throw new Error("Error al cargar detalles")
            const json = await res.json()
            setData(json)
        } catch (err) {
            setError("No se pudo cargar la información del comprobante")
        } finally {
            setLoading(false)
        }
    }

    const handleOpen = () => {
        setIsOpen(true)
        if (!data) {
            fetchDetails()
        }
    }

    if (!isOpen) {
        return (
            <button
                onClick={handleOpen}
                className="p-2 text-slate-500 hover:text-primary hover:bg-primary/10 rounded-full transition-colors"
                title="Ver comprobante"
            >
                <Eye className="h-4 w-4" />
            </button>
        )
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/50">
                    <h3 className="font-bold text-slate-900">Detalle del Comprobante</h3>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-white">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-12 text-slate-400">
                            <Loader2 className="h-8 w-8 animate-spin mb-2" />
                            <p className="text-sm">Cargando detalles...</p>
                        </div>
                    ) : error ? (
                        <div className="text-center py-8 text-red-500 bg-red-50 rounded-lg">
                            <p>{error}</p>
                            <button
                                onClick={fetchDetails}
                                className="mt-2 text-sm underline hover:text-red-700"
                            >
                                Reintentar
                            </button>
                        </div>
                    ) : data ? (
                        <div className="space-y-6 text-sm font-mono">

                            {/* Restaurant Info */}
                            <div className="text-center space-y-1 pb-4 border-b border-dashed border-slate-200">
                                <h2 className="text-lg font-bold text-slate-900">CEVICHERÍA "EL PUERTO"</h2>
                                <p className="text-slate-500">Av. La Marina 123, Lima</p>
                                <p className="text-slate-500">RUC: 20123456789</p>
                                <p className="text-slate-500">Tel: (01) 555-1234</p>
                            </div>

                            {/* Voucher Info */}
                            <div className="flex justify-between items-start pb-4 border-b border-dashed border-slate-200">
                                <div className="space-y-1">
                                    <p className="font-bold">
                                        {data.voucher_type === 'invoice' ? 'FACTURA ELECTRÓNICA' :
                                            data.voucher_type === 'ticket' ? 'BOLETA DE VENTA' : 'NOTA DE VENTA'}
                                    </p>
                                    <p className="text-slate-500">{data.voucher_number || `ORD-${data.order_number.slice(-8)}`}</p>
                                </div>
                                <div className="text-right space-y-1">
                                    <p className="text-slate-500">Fecha de Emisión</p>
                                    <p className="font-bold">
                                        {new Date(data.order_date).toLocaleDateString('es-PE')}
                                    </p>
                                    <p className="text-xs text-slate-400">
                                        {new Date(data.order_date).toLocaleTimeString('es-PE')}
                                    </p>
                                </div>
                            </div>

                            {/* Client Info */}
                            {data.client && (
                                <div className="space-y-1 pb-4 border-b border-dashed border-slate-200">
                                    <p><span className="text-slate-500">Cliente:</span> {data.client.name}</p>
                                    {data.client.document_number && (
                                        <p><span className="text-slate-500">{data.client.document_type || 'DOC'}:</span> {data.client.document_number}</p>
                                    )}
                                    {data.client.address && (
                                        <p><span className="text-slate-500">Dirección:</span> {data.client.address}</p>
                                    )}
                                </div>
                            )}

                            {/* Items */}
                            <div className="space-y-2 pb-4 border-b border-dashed border-slate-200">
                                <div className="grid grid-cols-12 text-slate-500 text-xs uppercase mb-2">
                                    <div className="col-span-1">Cant</div>
                                    <div className="col-span-7">Descripción</div>
                                    <div className="col-span-4 text-right">Importe</div>
                                </div>
                                {data.items.map((item) => (
                                    <div key={item.id} className="grid grid-cols-12 gap-1">
                                        <div className="col-span-1 font-bold">{item.quantity}</div>
                                        <div className="col-span-7">
                                            <p>{item.product_name}</p>
                                            {item.notes && <p className="text-xs text-slate-400 italic">({item.notes})</p>}
                                        </div>
                                        <div className="col-span-4 text-right">
                                            {parseFloat(item.total).toFixed(2)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Totals */}
                            <div className="space-y-2 pb-4 border-b border-dashed border-slate-200">
                                <div className="flex justify-between text-slate-500">
                                    <span>Subtotal</span>
                                    <span>S/ {parseFloat(data.totals.subtotal).toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-500">
                                    <span>IGV (18%)</span>
                                    <span>S/ {parseFloat(data.totals.tax).toFixed(2)}</span>
                                </div>
                                {parseFloat(data.totals.discount) > 0 && (
                                    <div className="flex justify-between text-emerald-600">
                                        <span>Descuento</span>
                                        <span>- S/ {parseFloat(data.totals.discount).toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-slate-100">
                                    <span>TOTAL</span>
                                    <span>S/ {parseFloat(data.totals.total).toFixed(2)}</span>
                                </div>
                            </div>

                            {/* Payments */}
                            <div className="space-y-1">
                                <p className="text-xs text-slate-500 uppercase mb-1">Pagos</p>
                                {data.payments.map((payment, idx) => (
                                    <div key={idx} className="flex justify-between text-xs">
                                        <span>
                                            {payment.method === 'cash' ? 'Efectivo' :
                                                payment.method === 'card' ? 'Tarjeta' :
                                                    payment.method === 'yape' ? 'Yape' :
                                                        payment.method === 'plin' ? 'Plin' : payment.method}
                                        </span>
                                        <span>S/ {parseFloat(payment.amount).toFixed(2)}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Footer */}
                            <div className="text-center pt-4 text-xs text-slate-400">
                                <p>Atendido por: {data.cashier || 'Cajero'}</p>
                                <p className="mt-2">¡Gracias por su preferencia!</p>
                            </div>

                        </div>
                    ) : null}
                </div>

                {/* Footer Actions */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex gap-3">
                    <button
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-xl hover:bg-slate-800 transition-colors font-medium text-sm"
                        onClick={() => window.print()}
                    >
                        <Printer className="h-4 w-4" />
                        Imprimir
                    </button>
                </div>
            </div>
        </div>
    )
}
