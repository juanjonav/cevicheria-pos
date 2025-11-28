"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutGrid, History, Settings, ChefHat, LogOut, BarChart3, Receipt, Package, DollarSign, FileText } from "lucide-react"
import { cn } from "@/lib/utils"

export function SidebarNav() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", icon: LayoutGrid, label: "Menú" },
    { href: "/history", icon: History, label: "Historial" },
    { href: "/dashboard", icon: BarChart3, label: "Dashboard" },
    { href: "/inventory", icon: Package, label: "Inventario" },
    { href: "/costs", icon: DollarSign, label: "Costos" },
    { href: "/expenses", icon: Receipt, label: "Gastos" },
    { href: "/reports", icon: FileText, label: "Reportes" },
    { href: "/kitchen", icon: ChefHat, label: "Cocina" },
    { href: "/settings", icon: Settings, label: "Ajustes" },
  ]

  return (
    <div className="flex flex-col h-screen w-20 md:w-24 bg-primary text-primary-foreground items-center py-6 fixed left-0 top-0 z-50 shadow-xl">
      <div className="mb-8 p-2 bg-white/10 rounded-xl">
        <ChefHat className="h-8 w-8" />
      </div>

      <div className="flex-1 w-full overflow-y-auto overflow-x-hidden px-2">
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 p-3 rounded-xl transition-all duration-200 group",
                  isActive
                    ? "bg-white text-primary shadow-md translate-x-1"
                    : "text-primary-foreground/70 hover:bg-white/10 hover:text-white",
                )}
              >
                <item.icon className={cn("h-6 w-6", isActive && "stroke-[2.5px]")} />
                <span className="text-[10px] font-medium hidden md:block">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="mt-auto px-2 w-full">
        <button className="flex flex-col items-center justify-center gap-1 p-3 rounded-xl text-primary-foreground/70 hover:bg-white/10 hover:text-white w-full transition-colors">
          <LogOut className="h-6 w-6" />
          <span className="text-[10px] font-medium hidden md:block">Salir</span>
        </button>
      </div>
    </div>
  )
}
