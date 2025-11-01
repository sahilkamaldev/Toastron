# ⚡ Toastron

A fast, modern, and customizable toast notification library for React and Next.js.  
Create beautiful, animated alerts with ease — lightweight, responsive, and built for modern UI/UX.

---

## 🌐 Live Demo

👉 [Try Toastron Online With Full User Guide](https://toastron.vercel.app)

Explore live previews, toast examples, and interactive customizations.

---


## ✨ Features

- 🎨 **Glassmorphic Design** — beautiful backdrop blur with gradient borders  
- ⚡ **Multiple Toast Types** — success, error, warning, info, loading, custom  
- 🌀 **7 Smooth Animations** — slide, fade, pop, bounce, zoom, and more  
- ⏱️ **Auto-Dismiss & Pause** — customizable timeout with hover pause  
- 🔄 **Promise Support** — handle async operations with loading states  
- 📍 **7 Positions Available** — corners, center, and edges with full control  
- 🌈 **Custom Colors** — control background, text color, and border glow  

---

## 💻 Code Examples

### ✅ Success Toast
```js
const { success } = useToast()
success("Success!", "Your changes have been saved.")
```

### ❌ Error Toast
```js
const { error } = useToast()
error("Error", "Something went wrong.")
```

### ⚙️ Custom Toast
```js
const { toast } = useToast()
toast({
  type: "info",
  title: "Custom Style",
  bgColor: "rgba(99, 102, 241, 0.2)",
  textColor: "text-indigo-300",
  animation: "fade",
  position: "top-center",
})
```

---

## 🧠 API Reference

### Toast Methods

| Method | Description |
|--------|--------------|
| `success(title, desc?, timeout?, position?)` | Show success toast |
| `error(title, desc?, timeout?, position?)` | Show error toast |
| `warning(title, desc?, timeout?, position?)` | Show warning toast |
| `info(title, desc?, timeout?, position?)` | Show info toast |
| `loading(title, desc?)` | Show loading toast |
| `promise(promise, states)` | Handle promise-based toast |
| `toast(config)` | Fully custom toast |

### Config Options
```js
{
  type: "success" | "error" | "warning" | "info" | "loading",
  title: string,
  description?: string,
  bgColor?: string,
  textColor?: string,
  position?: "top-left" | "top-center" | "top-right" |
              "bottom-left" | "bottom-center" | "bottom-right" | "center",
  animation?: "slide" | "fade" | "pop" | "bounce" | "zoom",
  timeout?: number // in ms
}
```

---

## 🧩 Get Started Now

### 🔗 Documentation
Read full docs here:  
👉 [Toastron Docs](https://toastron.vercel.app)

---

## ⭐ Support Development
If you like this project, please star it on GitHub 💖 
---

## 🛠️ Built With
- [Next.js](https://nextjs.org)
- [React.js](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)

---

## ❤️ Credits
Free and open-source notification library  
Created with passion by **Sahil Kamal** for the developer community 💙  

© 2025 **Toastron** — All rights reserved.
