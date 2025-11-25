"use client"

import { useState, useEffect } from "react"
import { type Product } from "@/lib/data"
import { ProductCard } from "@/components/pos/product-card"
import { CartSidebar } from "@/components/pos/cart-sidebar"
import { SidebarNav } from "@/components/layout/sidebar-nav"
import { Search } from "lucide-react"
import { cn } from "@/lib/utils"

interface CartItem extends Product {
  quantity: number
}

interface MenuItem {
  id: number
  name: string
  description: string | null
  category_id: number | null
  price: number | string
  image_url: string | null
  is_available: boolean
  menu_categories?: {
    id: number
    name: string
  } | null
}

export default function PosPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Clásicos")
  const [cart, setCart] = useState<CartItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<string[]>(["Clásicos", "Calientes", "Bebidas", "Guarniciones"])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Fetch products from API
  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true)
        const response = await fetch('/api/menu')

        if (!response.ok) {
          throw new Error('Error al cargar los productos')
        }

        const menuItems: MenuItem[] = await response.json()

        // Helper function to map category to Product category type
        const mapCategory = (categoryName: string | undefined | null): Product["category"] => {
          if (!categoryName) return "Clásicos"

          const normalizedCategory = categoryName.toLowerCase()
          if (normalizedCategory.includes("clásico") || normalizedCategory.includes("clasico")) return "Clásicos"
          if (normalizedCategory.includes("caliente")) return "Calientes"
          if (normalizedCategory.includes("bebida")) return "Bebidas"
          if (normalizedCategory.includes("guarnición") || normalizedCategory.includes("guarnicion")) return "Guarniciones"

          return "Clásicos" // Default fallback
        }

        // Transform API data to Product format
        const transformedProducts: Product[] = menuItems.map((item) => ({
          id: item.id.toString(),
          name: item.name,
          price: typeof item.price === 'string' ? parseFloat(item.price) : item.price,
          category: mapCategory(item.menu_categories?.name),
          image: item.image_url || "/placeholder.png",
          description: item.description || "",
        }))

        // Extract unique categories from products
        const uniqueCategories: string[] = Array.from(new Set(transformedProducts.map(p => p.category)))
        setCategories(uniqueCategories.length > 0 ? uniqueCategories : ["Clásicos", "Calientes", "Bebidas", "Guarniciones"])

        // Set first category as active if current active is not in the list
        if (uniqueCategories.length > 0 && !uniqueCategories.includes(activeCategory)) {
          setActiveCategory(uniqueCategories[0])
        }

        setProducts(transformedProducts)
        setError(null)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Error al cargar los productos. Por favor, intenta de nuevo.')
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const addToCart = (product: Product) => {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id)
      if (existing) {
        return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string, delta: number) => {
    setCart((current) =>
      current
        .map((item) => {
          if (item.id === id) {
            const newQuantity = Math.max(0, item.quantity + delta)
            return { ...item, quantity: newQuantity }
          }
          return item
        })
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (id: string) => {
    setCart((current) => current.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  const filteredProducts = products.filter(
    (p) => p.category === activeCategory && p.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <SidebarNav />

      <main className="flex-1 ml-20 md:ml-24 flex h-full">
        {/* Product Area */}
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Header */}
          <header className="px-8 py-6 flex items-center justify-between bg-white border-b border-slate-100">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Punto de Venta</h1>
              <p className="text-slate-500 text-sm">Cevicheria "El Puerto"</p>
            </div>

            <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-100 border-transparent focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary rounded-xl transition-all outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </header>

          {/* Categories */}
          <div className="px-8 py-6">
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-6 py-3 rounded-xl font-bold text-sm transition-all whitespace-nowrap",
                    activeCategory === cat
                      ? "bg-primary text-white shadow-lg shadow-primary/25 scale-105"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-primary/50 hover:text-primary",
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="flex-1 overflow-y-auto px-8 pb-8">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p className="text-slate-600">Cargando productos...</p>
                </div>
              </div>
            ) : error ? (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <p className="text-red-600 mb-4">{error}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Reintentar
                  </button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} onAdd={addToCart} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cart Sidebar */}
        <CartSidebar items={cart} onUpdateQuantity={updateQuantity} onRemove={removeFromCart} onClear={clearCart} />
      </main>
    </div>
  )
}
