"use client"

import { useState } from "react"
import { PurchaseForm } from "./purchase-form"
import { ShoppingCart } from "lucide-react"

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

interface PurchaseButtonProps {
    suppliers: Supplier[]
    stockItems: StockItem[]
}

export function PurchaseButton({ suppliers, stockItems }: PurchaseButtonProps) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
                <ShoppingCart className="h-4 w-4" />
                Registrar Compra
            </button>
            <PurchaseForm
                suppliers={suppliers}
                stockItems={stockItems}
                open={open}
                onOpenChange={setOpen}
            />
        </>
    )
}
