"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X, Loader2 } from "lucide-react"

interface ToastProps {
  id: string
  type: "success" | "error" | "warning" | "info" | "loading"
  title: string
  description?: string
  timeout?: number
  bgColor?: string
  textColor?: string
  onClose: () => void
}

const toastConfig = {
  success: {
    icon: CheckCircle2,
    bgGradient: "from-emerald-500/20 to-emerald-600/10",
    borderColor: "border-emerald-500/30",
    accentColor: "text-emerald-400",
    glowColor: "rgba(16, 185, 129, 0.3)",
  },
  error: {
    icon: AlertCircle,
    bgGradient: "from-rose-500/20 to-rose-600/10",
    borderColor: "border-rose-500/30",
    accentColor: "text-rose-400",
    glowColor: "rgba(244, 63, 94, 0.3)",
  },
  warning: {
    icon: AlertTriangle,
    bgGradient: "from-amber-500/20 to-amber-600/10",
    borderColor: "border-amber-500/30",
    accentColor: "text-amber-400",
    glowColor: "rgba(217, 119, 6, 0.3)",
  },
  info: {
    icon: Info,
    bgGradient: "from-sky-500/20 to-sky-600/10",
    borderColor: "border-sky-500/30",
    accentColor: "text-sky-400",
    glowColor: "rgba(14, 165, 233, 0.3)",
  },
  loading: {
    icon: Loader2,
    bgGradient: "from-violet-500/20 to-violet-600/10",
    borderColor: "border-violet-500/30",
    accentColor: "text-violet-400",
    glowColor: "rgba(139, 92, 246, 0.3)",
  },
}

const isValidColor = (color: string): boolean => {
  if (!color || typeof color !== "string") return false
  const trimmed = color.trim()

  // Check for common color formats
  if (trimmed.startsWith("rgb") || trimmed.startsWith("#") || trimmed === "transparent") {
    return true
  }

  // Try to validate by creating a test element
  try {
    const test = new Option().style
    test.color = trimmed
    return test.color !== ""
  } catch {
    return false
  }
}

export default function Toast({
  id,
  type,
  title,
  description,
  timeout = 4000,
  bgColor,
  textColor,
  onClose,
}: ToastProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const config = toastConfig[type]
  const Icon = config.icon

  const validatedBgColor = bgColor && isValidColor(bgColor) ? bgColor : undefined

  useEffect(() => {
    const startDismissTimer = () => {
      if (timeout > 0) {
        timeoutRef.current = setTimeout(() => {
          handleClose()
        }, timeout)
      }
    }

    const clearDismissTimer = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }

    if (!isHovered) {
      startDismissTimer()
    } else {
      clearDismissTimer()
    }

    return clearDismissTimer
  }, [isHovered, timeout])

  const handleClose = () => {
    setIsExiting(true)
    hoverTimeoutRef.current = setTimeout(() => {
      onClose()
    }, 300)
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  useEffect(() => {
    const playSound = () => {
      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
        const oscillator = audioContext.createOscillator()
        const gainNode = audioContext.createGain()

        oscillator.connect(gainNode)
        gainNode.connect(audioContext.destination)

        oscillator.frequency.value = 800
        oscillator.type = "sine"

        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

        oscillator.start(audioContext.currentTime)
        oscillator.stop(audioContext.currentTime + 0.1)
      } catch (e) {
        // Audio context not available, silently fail
      }
    }

    playSound()
  }, [])

  return (
    <div className="group pointer-events-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div
        className={`
          relative overflow-hidden rounded-2xl
          ${validatedBgColor ? "" : `bg-gradient-to-br ${config.bgGradient}`}
          border ${config.borderColor}
          backdrop-blur-xl
          p-4
          shadow-xl
          transition-all duration-300 ease-out
          ${isExiting ? "opacity-0 scale-95 translate-y-2" : "opacity-100 scale-100"}
          ${isHovered && !isExiting ? "translate-y-[-8px] shadow-2xl" : "translate-y-0"}
        `}
        style={{
          backgroundColor: validatedBgColor || undefined,
          boxShadow:
            isHovered && !isExiting
              ? `0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px ${config.glowColor}`
              : "0 10px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div
          className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${config.glowColor}, transparent)`,
            opacity: isHovered && !isExiting ? 1 : 0,
          }}
        />

        <div className="relative flex gap-3 items-start">
          <Icon
            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.accentColor} ${type === "loading" ? "animate-spin" : ""}`}
          />

          <div className="flex-1 min-w-0">
            <h3 className={`font-semibold text-sm leading-tight ${textColor || "text-white"}`}>{title}</h3>
            {description && (
              <p className={`text-xs mt-1 leading-relaxed ${textColor ? "opacity-80" : "text-slate-300"}`}>
                {description}
              </p>
            )}
          </div>

          {type !== "loading" && (
            <button
              onClick={handleClose}
              className={`
                flex-shrink-0 ml-2
                text-slate-400 hover:text-white
                transition-all duration-200
                p-1 rounded-lg hover:bg-white/10
                ${isHovered && !isExiting ? "rotate-90 scale-110" : "rotate-0 scale-100"}
              `}
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
