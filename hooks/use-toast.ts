"use client"

import { useContext } from "react"
import { ToastContext, type AnimationType } from "@/components/toast-provider"

export function useToast() {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }

  return {
    success: (title: string, description?: string, timeout?: number, position?: string, animation?: AnimationType) =>
      context.addToast({ type: "success", title, description, timeout, position, animation }),
    error: (title: string, description?: string, timeout?: number, position?: string, animation?: AnimationType) =>
      context.addToast({ type: "error", title, description, timeout, position, animation }),
    warning: (title: string, description?: string, timeout?: number, position?: string, animation?: AnimationType) =>
      context.addToast({ type: "warning", title, description, timeout, position, animation }),
    info: (title: string, description?: string, timeout?: number, position?: string, animation?: AnimationType) =>
      context.addToast({ type: "info", title, description, timeout, position, animation }),
    loading: (title: string, description?: string, position?: string, animation?: AnimationType) =>
      context.addToast({ type: "loading", title, description, timeout: 0, position, animation }),
    promise: <T,>(
      promise: Promise<T>,
      messages: {
        loading: { title: string; description?: string }
        success: { title: string; description?: string }
        error: { title: string; description?: string }
      },
      position?: string,
      animation?: AnimationType,
    ) => context.handlePromise(promise, messages, position, animation),
    toast: (options: Parameters<typeof context.addToast>[0]) => context.addToast(options),
  }
}
