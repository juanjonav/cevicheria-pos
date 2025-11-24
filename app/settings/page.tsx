"use client"

import { SidebarNav } from "@/components/layout/sidebar-nav"
import { Settings } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <SidebarNav />

      <main className="flex-1 ml-20 md:ml-24 flex items-center justify-center h-full">
        <div className="text-center text-slate-400">
          <Settings className="h-24 w-24 mx-auto mb-4 opacity-20" />
          <h2 className="text-xl font-bold">Ajustes</h2>
          <p className="text-sm">Configuración del sistema próximamente.</p>
        </div>
      </main>
    </div>
  )
}
