"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import type { Product } from "@/lib/data"

interface ProductCardProps {
  product: Product
  onAdd: (product: Product) => void
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
  return (
    <div
      onClick={() => onAdd(product)}
      className="group relative bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden cursor-pointer hover:shadow-md hover:border-primary/20 transition-all duration-200 active:scale-[0.98]"
    >
      <div className="relative h-40 w-full overflow-hidden bg-slate-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <span className="bg-white text-primary font-bold px-4 py-1.5 rounded-full text-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Agregar +
          </span>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-bold text-slate-800 line-clamp-1 text-lg">{product.name}</h3>
        </div>
        <p className="text-sm text-slate-500 line-clamp-2 mb-3 h-10">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-primary text-xl">S/ {product.price.toFixed(2)}</span>
          <button className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
