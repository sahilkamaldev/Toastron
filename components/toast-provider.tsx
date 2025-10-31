"use client"

import type React from "react"
import { createContext, useCallback, useState } from "react"
import Toast from "./toast"

export type AnimationType = "slide" | "fade" | "pop" | "bounce" | "zoom" | "slideLeft" | "slideRight"

export interface ToastMessage {
  id: string
  type: "success" | "error" | "warning" | "info" | "loading"
  title: string
  description?: string
  timeout?: number
  bgColor?: string
  textColor?: string
  position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | "center"
  animation?: AnimationType
}

interface ToastContextType {
  toasts: ToastMessage[]
  addToast: (toast: Omit<ToastMessage, "id">) => string
  removeToast: (id: string) => void
  updateToast: (id: string, updates: Partial<ToastMessage>) => void
  handlePromise: <T>(
    promise: Promise<T>,
    messages: {
      loading: { title: string; description?: string }
      success: { title: string; description?: string }
      error: { title: string; description?: string }
    },
    position?: string,
  ) => Promise<T>
}

export const ToastContext = createContext<ToastContextType | undefined>(undefined)

const getPositionClasses = (position?: string) => {
  switch (position) {
    case "top-left":
      return "top-6 left-6"
    case "top-center":
      return "top-6 left-1/2 -translate-x-1/2"
    case "top-right":
      return "top-6 right-6"
    case "bottom-left":
      return "bottom-6 left-6"
    case "bottom-center":
      return "bottom-6 left-1/2 -translate-x-1/2"
    case "center":
      return "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    case "bottom-right":
    default:
      return "bottom-6 right-6"
  }
}

/* Added animation mapping function */
const getAnimationClass = (animation?: AnimationType) => {
  switch (animation) {
    case "fade":
      return "animate-fade-in"
    case "pop":
      return "animate-pop-in"
    case "bounce":
      return "animate-bounce-in"
    case "zoom":
      return "animate-zoom-in"
    case "slideLeft":
      return "animate-slide-in-left"
    case "slideRight":
      return "animate-slide-in-right"
    case "slide":
    default:
      return "animate-slide-in-up"
  }
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([])

  const addToast = useCallback((toast: Omit<ToastMessage, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast: ToastMessage = {
      ...toast,
      id,
      timeout: toast.timeout ?? 4000,
      position: toast.position ?? "bottom-right",
      animation: toast.animation ?? "slide",
    }

    setToasts((prev) => {
      const updated = [...prev, newToast]
      return updated.slice(-3)
    })

    if (newToast.timeout > 0) {
      const timer = setTimeout(() => {
        removeToast(id)
      }, newToast.timeout)

      return () => clearTimeout(timer)
    }

    return () => {}
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const updateToast = useCallback((id: string, updates: Partial<ToastMessage>) => {
    setToasts((prev) => prev.map((toast) => (toast.id === id ? { ...toast, ...updates } : toast)))
  }, [])

  const handlePromise = useCallback(
    async <T,>(
      promise: Promise<T>,
      messages: {
        loading: { title: string; description?: string }
        success: { title: string; description?: string }
        error: { title: string; description?: string }
      },
      position?: string,
    ): Promise<T> => {
      const loadingId = Math.random().toString(36).substr(2, 9)
      const loadingToast: ToastMessage = {
        id: loadingId,
        type: "loading",
        title: messages.loading.title,
        description: messages.loading.description,
        timeout: 0,
        position: position ?? "bottom-right",
        animation: "slide",
      }

      setToasts((prev) => [...prev, loadingToast].slice(-3))

      try {
        const result = await promise
        updateToast(loadingId, {
          type: "success",
          title: messages.success.title,
          description: messages.success.description,
          timeout: 4000,
        })
        setTimeout(() => removeToast(loadingId), 4000)
        return result
      } catch (error) {
        updateToast(loadingId, {
          type: "error",
          title: messages.error.title,
          description: messages.error.description,
          timeout: 4000,
        })
        setTimeout(() => removeToast(loadingId), 4000)
        throw error
      }
    },
    [updateToast, removeToast],
  )

  const toastsByPosition = toasts.reduce(
    (acc, toast) => {
      const pos = toast.position ?? "bottom-right"
      if (!acc[pos]) acc[pos] = []
      acc[pos].push(toast)
      return acc
    },
    {} as Record<string, ToastMessage[]>,
  )

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, updateToast, handlePromise }}>
      {children}
      {Object.entries(toastsByPosition).map(([position, positionToasts]) => (
        <div
          key={position}
          className={`fixed flex flex-col gap-3 pointer-events-none z-50 ${getPositionClasses(position)}`}
        >
          {positionToasts.map((toast) => (
            <div key={toast.id} className={getAnimationClass(toast.animation)}>
              <Toast {...toast} onClose={() => removeToast(toast.id)} />
            </div>
          ))}
        </div>
      ))}
    </ToastContext.Provider>
  )
}
