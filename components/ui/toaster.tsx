"use client"

import { useEffect, useState } from "react"
import { CheckCircle2, XCircle, Info } from "lucide-react"

interface Toast {
    id: string
    title?: string
    description?: string
    type?: "success" | "error" | "info"
}

interface ToasterProps {
    toasts: Toast[]
}

export function Toaster({ toasts }: ToasterProps) {
    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm">
            {toasts.map((toast) => (
                <div
                    key={toast.id}
                    className={`
            bg-white rounded-lg shadow-lg border-l-4 p-4 animate-in slide-in-from-right-full
            ${toast.type === "success" ? "border-green-500" : ""}
            ${toast.type === "error" ? "border-red-500" : ""}
            ${toast.type === "info" ? "border-blue-500" : ""}
          `}
                >
                    <div className="flex gap-3">
                        {toast.type === "success" && <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0" />}
                        {toast.type === "error" && <XCircle className="h-5 w-5 text-red-500 shrink-0" />}
                        {toast.type === "info" && <Info className="h-5 w-5 text-blue-500 shrink-0" />}
                        <div className="flex-1">
                            {toast.title && <p className="font-semibold text-slate-900">{toast.title}</p>}
                            {toast.description && <p className="text-sm text-slate-600">{toast.description}</p>}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
