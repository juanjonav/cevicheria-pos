import { useState, useEffect } from "react"

type ToastType = "success" | "error" | "info"

interface Toast {
    id: string
    title?: string
    description?: string
    type?: ToastType
}

export function useToast() {
    const [toasts, setToasts] = useState<Toast[]>([])

    const toast = ({ title, description, type = "info" }: Omit<Toast, "id">) => {
        const id = Math.random().toString(36).substring(7)
        setToasts((prev) => [...prev, { id, title, description, type }])

        // Auto-dismiss after 3 seconds
        setTimeout(() => {
            setToasts((prev) => prev.filter((t) => t.id !== id))
        }, 3000)
    }

    return { toast, toasts }
}
