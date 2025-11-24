"use client"

import { SidebarNav } from "@/components/layout/sidebar-nav"
import { recentSales, type Sale } from "@/lib/data"
import { ArrowUpRight, Calendar, CreditCard, Download, Filter, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export default function HistoryPage() {
  const getStatusColor = (status: Sale["status"]) => {
    switch (status) {
      case "Completado":
        return "bg-emerald-100 text-emerald-700 border-emerald-200"
      case "En Proceso":
        return "bg-amber-100 text-amber-700 border-amber-200"
      case "Cancelado":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-slate-100 text-slate-700"
    }
  }

  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <SidebarNav />

      <main className="flex-1 ml-20 md:ml-24 flex flex-col h-full overflow-hidden">
        {/* Header */}
        <header className="px-8 py-8 bg-white border-b border-slate-100">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Historial de Ventas</h1>
              <p className="text-slate-500 mt-1">Resumen de transacciones del día</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg hover:bg-slate-50 font-medium text-sm">
                <Download className="h-4 w-4" />
                Exportar
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 font-medium text-sm shadow-lg shadow-primary/20">
                <Calendar className="h-4 w-4" />
                Hoy
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-primary to-teal-800 rounded-2xl p-6 text-white shadow-xl shadow-primary/20">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-white/10 rounded-lg">
                  <CreditCard className="h-6 w-6 text-white" />
                </div>
                <span className="flex items-center text-xs font-bold bg-white/20 px-2 py-1 rounded-full text-white">
                  +12.5% <ArrowUpRight className="h-3 w-3 ml-1" />
                </span>
              </div>
              <p className="text-primary-foreground/70 text-sm font-medium mb-1">Ventas Totales</p>
              <h3 className="text-3xl font-bold">S/ 2,450.00</h3>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <p className="text-slate-500 text-sm font-medium mb-1">Tickets Promedio</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">S/ 45.20</h3>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div className="bg-orange-500 h-full w-[70%]" />
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <p className="text-slate-500 text-sm font-medium mb-1">Órdenes Hoy</p>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">54</h3>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> 50 Completadas
              </div>
            </div>
          </div>
        </header>

        {/* Table Section */}
        <div className="flex-1 overflow-hidden p-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full">
            {/* Table Filters */}
            <div className="p-4 border-b border-slate-100 flex gap-4 items-center">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Buscar por ID o monto..."
                  className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
              </div>
              <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-lg border border-slate-200">
                <Filter className="h-4 w-4" />
              </button>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-6 gap-4 p-4 bg-slate-50 border-b border-slate-200 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <div className="col-span-1">ID Orden</div>
              <div className="col-span-1">Fecha & Hora</div>
              <div className="col-span-1">Items</div>
              <div className="col-span-1">Método</div>
              <div className="col-span-1">Estado</div>
              <div className="col-span-1 text-right">Total</div>
            </div>

            {/* Table Body */}
            <div className="overflow-y-auto flex-1 p-2">
              {recentSales.map((sale) => (
                <div
                  key={sale.id}
                  className="grid grid-cols-6 gap-4 p-4 border-b border-slate-50 hover:bg-slate-50 transition-colors items-center text-sm rounded-lg group"
                >
                  <div className="col-span-1 font-bold text-slate-900">{sale.id}</div>
                  <div className="col-span-1 text-slate-500">{sale.date}</div>
                  <div className="col-span-1 text-slate-700">{sale.items} productos</div>
                  <div className="col-span-1 text-slate-700">{sale.paymentMethod}</div>
                  <div className="col-span-1">
                    <span
                      className={cn("px-2.5 py-1 rounded-full text-xs font-bold border", getStatusColor(sale.status))}
                    >
                      {sale.status}
                    </span>
                  </div>
                  <div className="col-span-1 text-right font-bold text-slate-900">S/ {sale.total.toFixed(2)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
