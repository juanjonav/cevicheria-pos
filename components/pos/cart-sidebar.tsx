"use client"

import { Trash2, Minus, Plus, ShoppingBag, CreditCard, Banknote, Smartphone } from "lucide-react"
import type { Product } from "@/lib/data"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { createOrder } from "@/app/actions/create-order"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster"

interface CartItem extends Product {
  quantity: number
}

interface CartSidebarProps {
  items: CartItem[]
  onUpdateQuantity: (id: string, delta: number) => void
  onRemove: (id: string) => void
  onClear: () => void
}

export function CartSidebar({ items, onUpdateQuantity, onRemove, onClear }: CartSidebarProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.18 // IGV Peru 18% included usually, but lets show breakdown
  const total = subtotal // Assuming prices include tax for simplicity in POS

  const [selectedPayment, setSelectedPayment] = useState<"card" | "cash" | "app">("cash")
  const [isProcessing, setIsProcessing] = useState(false)
  const { toast, toasts } = useToast()

  const handlePayment = async () => {
    if (items.length === 0) return

    setIsProcessing(true)

    try {
      // Map payment method to schema enum
      const paymentMethodMap = {
        card: "card" as const,
        cash: "cash" as const,
        app: "yape" as const,
      }

      const result = await createOrder({
        items: items.map((item) => ({
          id: parseInt(item.id),
          quantity: item.quantity,
          price: item.price,
        })),
        paymentMethod: paymentMethodMap[selectedPayment],
        total,
        userId: 1, // TODO: Get from session
      })

      if (result.success) {
        toast({
          title: "¡Venta registrada!",
          description: `Orden completada por S/ ${total.toFixed(2)}`,
          type: "success",
        })
        onClear()
      } else {
        toast({
          title: "Error",
          description: result.error || "No se pudo procesar la venta",
          type: "error",
        })
      }
    } catch (error) {
      console.error("Payment error:", error)
      toast({
        title: "Error",
        description: "Ocurrió un error al procesar el pago",
        type: "error",
      })
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="flex flex-col h-full bg-white border-l border-slate-200 shadow-xl w-96">
      {/* Header */}
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Orden Actual
          </h2>
          <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
            #
            {Math.floor(Math.random() * 1000)
              .toString()
              .padStart(3, "0")}
          </span>
        </div>
        <p className="text-sm text-slate-500">Mesa 4 • Mozo: Juan P.</p>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {items.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-400 space-y-4">
            <ShoppingBag className="h-16 w-16 opacity-20" />
            <p className="text-center font-medium">La orden está vacía</p>
            <p className="text-center text-sm px-8">Selecciona productos del menú para comenzar una orden.</p>
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex gap-3 bg-slate-50 p-3 rounded-xl group animate-in slide-in-from-right-4 duration-300"
            >
              <div className="h-16 w-16 bg-white rounded-lg overflow-hidden shrink-0 relative border border-slate-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="object-cover w-full h-full" />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <h4 className="font-semibold text-slate-800 text-sm line-clamp-1">{item.name}</h4>
                  <span className="font-bold text-slate-900 text-sm">S/ {(item.price * item.quantity).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3 bg-white rounded-lg border border-slate-200 px-1 py-0.5 shadow-sm">
                    <button
                      onClick={() => onUpdateQuantity(item.id, -1)}
                      className="p-1 hover:bg-slate-100 rounded-md text-slate-600 transition-colors"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, 1)}
                      className="p-1 hover:bg-slate-100 rounded-md text-slate-600 transition-colors"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors p-1"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer / Totals */}
      <div className="p-6 bg-slate-50 border-t border-slate-200">
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-sm text-slate-500">
            <span>Subtotal</span>
            <span>S/ {(subtotal / 1.18).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-slate-500">
            <span>IGV (18%)</span>
            <span>S/ {(total - subtotal / 1.18).toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-xl font-bold text-slate-900 pt-3 border-t border-slate-200">
            <span>Total</span>
            <span>S/ {total.toFixed(2)}</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <button
            onClick={() => setSelectedPayment("card")}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg border text-xs gap-1 transition-all",
              selectedPayment === "card"
                ? "border-primary bg-primary/10 text-primary font-bold"
                : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50",
            )}
          >
            <CreditCard className="h-4 w-4" />
            Tarjeta
          </button>
          <button
            onClick={() => setSelectedPayment("cash")}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg border text-xs gap-1 transition-all",
              selectedPayment === "cash"
                ? "border-primary bg-primary/10 text-primary font-bold"
                : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50",
            )}
          >
            <Banknote className="h-4 w-4" />
            Efectivo
          </button>
          <button
            onClick={() => setSelectedPayment("app")}
            className={cn(
              "flex flex-col items-center justify-center p-2 rounded-lg border text-xs gap-1 transition-all",
              selectedPayment === "app"
                ? "border-primary bg-primary/10 text-primary font-bold"
                : "border-slate-200 bg-white text-slate-500 hover:bg-slate-50",
            )}
          >
            <Smartphone className="h-4 w-4" />
            Yape/Plin
          </button>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClear}
            className="px-4 py-3 rounded-xl border border-red-200 text-red-500 hover:bg-red-50 transition-colors font-medium"
            disabled={items.length === 0}
          >
            <Trash2 className="h-5 w-5" />
          </button>
          <button
            onClick={handlePayment}
            className="flex-1 bg-primary text-white py-3 rounded-xl font-bold shadow-lg shadow-primary/25 hover:bg-primary/90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:shadow-none"
            disabled={items.length === 0 || isProcessing}
          >
            {isProcessing ? "Procesando..." : `Pagar S/ ${total.toFixed(2)}`}
          </button>
        </div>
      </div>
      <Toaster toasts={toasts} />
    </div>
  )
}
