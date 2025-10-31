"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Sparkles, Copy, Check, Download, Star } from "lucide-react"
import { useState } from "react"

type AnimationType = "slide" | "fade" | "pop" | "bounce" | "zoom" | "slideLeft" | "slideRight"

const isValidColor = (color: string): boolean => {
  if (!color || typeof color !== "string") return false
  const trimmed = color.trim()
  if (!trimmed) return false

  if (trimmed.startsWith("rgb") || trimmed.startsWith("#") || trimmed === "transparent") {
    return true
  }

  try {
    const test = new Option().style
    test.color = trimmed
    return test.color !== ""
  } catch {
    return false
  }
}

export default function Home() {
  const toast = useToast()
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const [customType, setCustomType] = useState<"success" | "error" | "warning" | "info" | "loading">("success")
  const [customTitle, setCustomTitle] = useState("Notification Title")
  const [customDescription, setCustomDescription] = useState("This is a custom notification message")
  const [customTimeout, setCustomTimeout] = useState(4000)
  const [customBgColor, setCustomBgColor] = useState("rgba(16, 185, 129, 0.2)")
  const [customTextColor, setCustomTextColor] = useState("text-white")
  const [customPosition, setCustomPosition] = useState<
    "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right" | "center"
  >("bottom-right")
  const [customAnimation, setCustomAnimation] = useState<AnimationType>("slide")

  const colorPalette = [
    { name: "Emerald", color: "rgba(16, 185, 129, 0.2)" },
    { name: "Rose", color: "rgba(244, 63, 94, 0.2)" },
    { name: "Amber", color: "rgba(251, 146, 60, 0.2)" },
    { name: "Sky", color: "rgba(14, 165, 233, 0.2)" },
    { name: "Violet", color: "rgba(168, 85, 247, 0.2)" },
    { name: "Indigo", color: "rgba(99, 102, 241, 0.2)" },
    { name: "Cyan", color: "rgba(34, 211, 238, 0.2)" },
    { name: "Pink", color: "rgba(236, 72, 153, 0.2)" },
  ]

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const showCustomPreview = () => {
    if (customType === "loading") {
      toast.loading(customTitle, customDescription, customPosition)
    } else {
      const validatedBgColor = isValidColor(customBgColor) ? customBgColor : undefined
      toast.toast({
        type: customType,
        title: customTitle,
        description: customDescription,
        timeout: customTimeout === 0 ? 0 : customTimeout,
        bgColor: validatedBgColor,
        textColor: customTextColor,
        position: customPosition,
        animation: customAnimation,
      })
    }
  }

  const codeExamples = [
    {
      id: "basic",
      label: "Basic Success",
      code: `const { success } = useToast()
success("Success!", "Your changes have been saved.")`,
    },
    {
      id: "error",
      label: "Error Toast",
      code: `const { error } = useToast()
error("Error", "Something went wrong. Please try again.")`,
    },
    {
      id: "warning",
      label: "Warning Toast",
      code: `const { warning } = useToast()
warning("Warning", "Please review this action before proceeding.")`,
    },
    {
      id: "info",
      label: "Info Toast",
      code: `const { info } = useToast()
info("Information", "Here is some helpful information for you.")`,
    },
    {
      id: "loading",
      label: "Loading Toast",
      code: `const { loading } = useToast()
loading("Processing...", "Please wait while we process your request")`,
    },
    {
      id: "promise",
      label: "Promise Toast",
      code: `const { promise } = useToast()
await promise(fetchData(), {
  loading: { title: "Loading..." },
  success: { title: "Success!" },
  error: { title: "Error" }
})`,
    },
    {
      id: "custom-timeout",
      label: "Custom Timeout",
      code: `const { success } = useToast()
success("Quick!", "This disappears in 2 seconds", 2000)`,
    },
    {
      id: "custom-bg",
      label: "Custom Background",
      code: `const { toast } = useToast()
toast({
  type: "info",
  title: "Custom Style",
  bgColor: "rgba(99, 102, 241, 0.2)",
  textColor: "text-indigo-300"
})`,
    },
    {
      id: "custom-position",
      label: "Custom Position",
      code: `const { success } = useToast()
success(
  "Top Left!", 
  "Toast appears in top-left corner", 
  4000,
  "top-left"
)`,
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-950">
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between gap-2 md:gap-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-emerald-400" />
              <h1 className="text-lg md:text-2xl font-bold text-white">Toastron</h1>
            </div>
            <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-end">
              <Button
  onClick={() => window.open("https://github.com/sahilkamaldev/Toastron", "_blank")}
  className="flex items-center gap-1 md:gap-2 bg-emerald-500 hover:bg-emerald-600 text-white h-9 md:h-10 text-xs md:text-base px-2 md:px-4"
>
                <Download className="w-3 md:w-4 h-3 md:h-4" />
                <span className="hidden sm:inline">Download</span>
              </Button>
              <a
                href="https://github.com/sahilkamaldev/Toastron"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 md:gap-2 px-2 md:px-4 h-9 md:h-10 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium text-xs md:text-base transition-colors"
              >
                <Star className="w-3 md:w-4 h-3 md:h-4" />
                <span className="hidden sm:inline">Star</span>
              </a>
              <a
                href="https://buymeacoffee.com/sahilkamal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 md:gap-2 px-2 md:px-4 h-9 md:h-10 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 rounded-lg font-medium text-xs md:text-base border border-orange-500/30 transition-colors"
              >
                <span className="text-lg">☕</span>
                <span className="hidden sm:inline">Donate</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="min-h-screen p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 pt-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Premium Toast Notifications</h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Beautiful, customizable notifications with glassmorphic design. Multiple animations, positions, and full
              control.
            </p>
          </div>

          {/* Quick Actions - More Prominent */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Test</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
              <Button
                onClick={() => toast.success("Success!", "Your changes have been saved successfully.")}
                className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm md:text-base h-10 md:h-12"
              >
                Success
              </Button>

              <Button
                onClick={() => toast.error("Error", "Something went wrong. Please try again.")}
                className="bg-rose-500 hover:bg-rose-600 text-white text-sm md:text-base h-10 md:h-12"
              >
                Error
              </Button>

              <Button
                onClick={() => toast.warning("Warning", "Please review this action before proceeding.")}
                className="bg-amber-500 hover:bg-amber-600 text-white text-sm md:text-base h-10 md:h-12"
              >
                Warning
              </Button>

              <Button
                onClick={() => toast.info("Information", "Here is some helpful information for you.")}
                className="bg-sky-500 hover:bg-sky-600 text-white text-sm md:text-base h-10 md:h-12"
              >
                Info
              </Button>

              <Button
                onClick={() => toast.loading("Processing...", "Please wait while we process your request")}
                className="bg-violet-500 hover:bg-violet-600 text-white text-sm md:text-base h-10 md:h-12"
              >
                Loading
              </Button>

              <Button
                onClick={() => {
                  const handlePromiseExample = async () => {
                    try {
                      await toast.promise(new Promise((resolve) => setTimeout(resolve, 2000)), {
                        loading: { title: "Processing...", description: "Please wait" },
                        success: { title: "Done!", description: "Operation completed successfully" },
                        error: { title: "Failed", description: "Something went wrong" },
                      })
                    } catch (error) {
                      console.error(error)
                    }
                  }
                  handlePromiseExample()
                }}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-sm md:text-base h-10 md:h-12"
              >
                Promise
              </Button>

              <Button
                onClick={() => {
                  toast.success("Quick!", "This disappears in 2 seconds", 2000)
                }}
                className="bg-cyan-500 hover:bg-cyan-600 text-white text-sm md:text-base h-10 md:h-12"
              >
                Timeout
              </Button>

              <Button
                onClick={() => {
                  toast.toast({
                    type: "info",
                    title: "Custom Style",
                    description: "With custom background color",
                    bgColor: "rgba(99, 102, 241, 0.2)",
                    textColor: "text-indigo-300",
                  })
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white text-sm md:text-base h-10 md:h-12"
              >
                Custom
              </Button>
            </div>
          </div>

          {/* Interactive Customizer */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
            <div className="lg:col-span-2 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Interactive Customizer</h2>

              <div className="space-y-4">
                {/* Type Selector */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Toast Type</label>
                  <div className="grid grid-cols-3 gap-2 md:grid-cols-5">
                    {(["success", "error", "warning", "info", "loading"] as const).map((type) => (
                      <button
                        key={type}
                        onClick={() => setCustomType(type)}
                        className={`py-2 px-3 rounded-lg font-medium text-sm transition-all capitalize ${
                          customType === type
                            ? "bg-white text-slate-900 shadow-lg"
                            : "bg-white/10 text-slate-300 hover:bg-white/20"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Title Input */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Title</label>
                  <input
                    type="text"
                    value={customTitle}
                    onChange={(e) => setCustomTitle(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    placeholder="Enter title"
                  />
                </div>

                {/* Description Input */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Description</label>
                  <textarea
                    value={customDescription}
                    onChange={(e) => setCustomDescription(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none h-20"
                    placeholder="Enter description"
                  />
                </div>

                {/* Timeout Slider */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Timeout: {customTimeout === 0 ? "Never" : `${customTimeout}ms`}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    step="500"
                    value={customTimeout}
                    onChange={(e) => setCustomTimeout(Number(e.target.value))}
                    disabled={customType === "loading"}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-3">Color Palette</label>
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {colorPalette.map((palette) => (
                      <button
                        key={palette.name}
                        onClick={() => setCustomBgColor(palette.color)}
                        className="flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-white/10 transition-colors group"
                        title={palette.name}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg border-2 transition-all ${
                            customBgColor === palette.color ? "border-white" : "border-white/30"
                          }`}
                          style={{ backgroundColor: palette.color }}
                        />
                        <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                          {palette.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Background Color */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Custom Background Color</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={customBgColor}
                      onChange={(e) => setCustomBgColor(e.target.value)}
                      className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-mono text-xs focus:outline-none focus:border-emerald-400 transition-colors"
                      placeholder="rgba(16, 185, 129, 0.2)"
                    />
                    <div
                      className="w-12 h-10 rounded-lg border border-white/20 flex-shrink-0"
                      style={{ backgroundColor: isValidColor(customBgColor) ? customBgColor : "transparent" }}
                    />
                  </div>
                </div>

                {/* Text Color */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Text Color</label>
                  <select
                    value={customTextColor}
                    onChange={(e) => setCustomTextColor(e.target.value)}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-emerald-400 transition-colors appearance-none cursor-pointer bg-clip-padding"
                  >
                    <option value="text-white">White</option>
                    <option value="text-slate-300">Light Slate</option>
                    <option value="text-emerald-300">Emerald</option>
                    <option value="text-rose-300">Rose</option>
                    <option value="text-amber-300">Amber</option>
                    <option value="text-sky-300">Sky</option>
                    <option value="text-violet-300">Violet</option>
                  </select>
                </div>

                {/* Position */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Position</label>
                  <select
                    value={customPosition}
                    onChange={(e) => setCustomPosition(e.target.value as any)}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-emerald-400 transition-colors appearance-none cursor-pointer bg-clip-padding"
                  >
                    <option value="top-left">Top Left</option>
                    <option value="top-center">Top Center</option>
                    <option value="top-right">Top Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="bottom-center">Bottom Center</option>
                    <option value="bottom-right">Bottom Right</option>
                    <option value="center">Center</option>
                  </select>
                </div>

                {/* Animation Selector */}
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Animation</label>
                  <select
                    value={customAnimation}
                    onChange={(e) => setCustomAnimation(e.target.value as AnimationType)}
                    className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-emerald-400 transition-colors appearance-none cursor-pointer bg-clip-padding"
                  >
                    <option value="slide">Slide Up</option>
                    <option value="fade">Fade</option>
                    <option value="pop">Pop</option>
                    <option value="bounce">Bounce</option>
                    <option value="zoom">Zoom</option>
                    <option value="slideLeft">Slide Left</option>
                    <option value="slideRight">Slide Right</option>
                  </select>
                </div>

                {/* Preview Button */}
                <Button
                  onClick={showCustomPreview}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white h-12 text-base font-semibold"
                >
                  Preview Toast
                </Button>
              </div>
            </div>

            {/* Live Preview Card */}
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-4">Live Preview</h3>
                <div className="bg-slate-900 rounded-xl p-4 min-h-32 flex items-center justify-center">
                  <div
                    className="rounded-2xl p-4 max-w-xs"
                    style={{
                      backgroundColor: isValidColor(customBgColor) ? customBgColor : "rgba(16, 185, 129, 0.2)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <h4 className={`font-semibold text-sm leading-tight ${customTextColor}`}>{customTitle}</h4>
                    {customDescription && (
                      <p className={`text-xs mt-1 leading-relaxed opacity-80 ${customTextColor}`}>
                        {customDescription}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs text-slate-400">
                  <span className="text-emerald-400 font-semibold">Position:</span> {customPosition}
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  <span className="text-emerald-400 font-semibold">Tip:</span> Click Preview to see animation
                </p>
              </div>
            </div>
          </div>

          {/* Position Examples */}
          <div className="mb-16 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Position Examples</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {(
                [
                  "top-left",
                  "top-center",
                  "top-right",
                  "bottom-left",
                  "bottom-center",
                  "bottom-right",
                  "center",
                ] as const
              ).map((pos) => (
                <Button
                  key={pos}
                  onClick={() => toast.success(`Toast at ${pos}`, "Click to test!", 3000, pos)}
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white h-12 capitalize"
                >
                  Test {pos}
                </Button>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-16 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex gap-3">
                <span className="text-emerald-400 text-xl">✨</span>
                <div>
                  <h3 className="text-white font-semibold">Glassmorphic Design</h3>
                  <p className="text-slate-400 text-sm">Beautiful backdrop blur with gradient borders</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-rose-400 text-xl">🎨</span>
                <div>
                  <h3 className="text-white font-semibold">Multiple Toast Types</h3>
                  <p className="text-slate-400 text-sm">Success, error, warning, info, loading, custom</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-amber-400 text-xl">⚡</span>
                <div>
                  <h3 className="text-white font-semibold">7 Smooth Animations</h3>
                  <p className="text-slate-400 text-sm">Slide, fade, pop, bounce, zoom, and more</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-sky-400 text-xl">🎯</span>
                <div>
                  <h3 className="text-white font-semibold">Auto-Dismiss & Pause</h3>
                  <p className="text-slate-400 text-sm">Customizable timeout with hover pause</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-violet-400 text-xl">🔄</span>
                <div>
                  <h3 className="text-white font-semibold">Promise Support</h3>
                  <p className="text-slate-400 text-sm">Handle async operations with loading states</p>
                </div>
              </div>
              <div className="flex gap-3">
                <span className="text-indigo-400 text-xl">📍</span>
                <div>
                  <h3 className="text-white font-semibold">7 Positions Available</h3>
                  <p className="text-slate-400 text-sm">Corners, center, and edges with full control</p>
                </div>
              </div>
            </div>
          </div>

          {/* Code Examples */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Code Examples</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {codeExamples.map((example) => (
                <div key={example.id} className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold">{example.label}</h4>
                    <button
                      onClick={() => copyToClipboard(example.code, example.id)}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                      title="Copy code"
                    >
                      {copiedCode === example.id ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-slate-400" />
                      )}
                    </button>
                  </div>
                  <div className="bg-slate-950 rounded-lg p-3 border border-slate-800 overflow-x-auto">
                    <code className="text-slate-300 text-xs font-mono whitespace-pre-wrap break-words">
                      {example.code}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Documentation */}
          <div className="mb-16 space-y-8">
            <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-6">Documentation</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-emerald-400 mb-3">Installation</h3>
                  <ol className="space-y-2 text-slate-300 text-sm">
                    <li>
                      1. Copy <code className="bg-slate-900 px-2 py-1 rounded text-xs">components/toast.tsx</code>,{" "}
                      <code className="bg-slate-900 px-2 py-1 rounded text-xs">components/toast-provider.tsx</code>, and{" "}
                      <code className="bg-slate-900 px-2 py-1 rounded text-xs">hooks/use-toast.ts</code>
                    </li>
                    <li>
                      2. Add <code className="bg-slate-900 px-2 py-1 rounded text-xs">&lt;ToastProvider&gt;</code> to
                      your root layout
                    </li>
                    <li>
                      3. Import and use <code className="bg-slate-900 px-2 py-1 rounded text-xs">useToast()</code> in
                      your components
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-sky-400 mb-3">Basic Usage</h3>
                  <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                    <code className="text-slate-300 text-sm font-mono">
                      {`const { success, error, warning, info, loading, promise, toast } = useToast()

// Simple usage
success("Done!", "Operation completed successfully")

// With options
toast({
  type: "info",
  title: "Hello",
  description: "Custom toast",
  position: "top-center",
  animation: "fade"
})`}
                    </code>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-amber-400 mb-3">All Options</h3>
                  <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                    <code className="text-slate-300 text-sm font-mono">
                      {`// Toast Type
type: "success" | "error" | "warning" | "info" | "loading"

// Positions
position: "top-left" | "top-center" | "top-right" | 
          "bottom-left" | "bottom-center" | "bottom-right" | "center"

// Animations
animation: "slide" | "fade" | "pop" | "bounce" | "zoom" | "slideLeft" | "slideRight"

// Custom Styling
bgColor: string (any CSS color)
textColor: string (Tailwind class like "text-white")
timeout: number (milliseconds, 0 = never dismiss)`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Support & Download Footer */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/30">
            <h2 className="text-2xl font-bold text-white mb-4">Get Started Now</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-2">Download Library</h3>
                <p className="text-slate-300 text-sm mb-4">Get the complete Toastron for your project</p>
                <a
                  href="https://github.com/sahilkamaldev/Toastron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download ZIP
                </a>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2">Support Development</h3>
                <p className="text-slate-300 text-sm mb-4">Star on GitHub and help us improve</p>
                <a
                  href="https://github.com/sahilkamaldev/Toastron"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500 hover:bg-sky-600 text-white rounded-lg font-semibold transition-colors"
                >
                  <Star className="w-4 h-4" />
                  Star on GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center py-12 border-t border-white/10 mt-12">
            <p className="text-slate-400 text-sm">Built with Next.js, React, and Tailwind CSS</p>
            <p className="text-slate-500 text-xs mt-2">Free and open-source notification library</p>
            {/* Developer information and credits */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-slate-500 text-xs">Created with passion for the developer community</p>
              <p className="text-slate-600 text-xs mt-2">© 2025 Toastron. All rights reserved.</p>
              <div className="mt-4 flex items-center justify-center gap-4">
                <a href="" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                  Documentation
                </a>
                <span className="text-slate-700">•</span>
                <a href="https://github.com/sahilkamaldev/Toastron" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                  GitHub
                </a>
                <span className="text-slate-700">•</span>
                <a href="mailto:sahilkamal7788@gmail.com" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
                  Report Issues
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
