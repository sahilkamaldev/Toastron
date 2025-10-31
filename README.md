  Toastron — Modern Toast Notifications for React & Next.js :root{ --bg:#0f1724; --card:#0b1220; --muted:#94a3b8; --accent:#ff6b6b; --text:#e6eef8; --mono-bg:#0b1220; } body{font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; margin:0; background:linear-gradient(180deg,#071022 0%, #071833 100%); color:var(--text); line-height:1.6;} .container{max-width:900px;margin:48px auto;padding:28px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:12px;box-shadow:0 8px 30px rgba(2,6,23,0.6);border:1px solid rgba(255,255,255,0.03);} h1{font-size:28px;margin:0 0 8px;display:flex;align-items:center;gap:12px} .badge{background:var(--card);padding:6px 10px;border-radius:8px;font-size:13px;color:var(--muted);border:1px solid rgba(255,255,255,0.02);} p.lead{color:var(--muted);margin-top:6px} section{margin-top:20px} ul{margin:10px 0 0 20px} pre{background:var(--mono-bg);padding:16px;border-radius:8px;overflow:auto;border:1px solid rgba(255,255,255,0.03);color:var(--text);font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;font-size:13px} code{background:rgba(255,255,255,0.02);padding:2px 6px;border-radius:6px} .muted{color:var(--muted)} footer{margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.02);color:var(--muted);font-size:13px} a{color:#7dd3fc;text-decoration:none} .columns{display:flex;gap:20px;flex-wrap:wrap} .col{flex:1;min-width:220px}

⚡ Toastron Modern Toasts for React & Next.js
============================================

Toastron is a fast, modern, and fully customizable toast notification library for React and Next.js. Create beautiful, animated alerts with ease. Lightweight, responsive, and built for modern UI/UX design.

✨ Features
----------

*   ⚡ Blazing fast and lightweight
*   🎨 Beautiful, smooth animations
*   🧩 Works with React & Next.js
*   🌗 Dark and Light mode support
*   🪄 Custom colors, icons, and positions
*   📱 Fully responsive on all devices

🚀 Installation
---------------

    npm install toastron
    # or
    yarn add toastron

💻 Usage Example
----------------

    import { Toastron, toast } from "toastron"
    import "toastron/dist/style.css"
    
    export default function App() {
      return (
        <>
          <Toastron />
          <button onClick={() => toast.success("Welcome to Toastron!")}>
            Show Toast
          </button>
        </>
      )
    }

⚙️ Customization Example
------------------------

    toast("Custom Toast Message", {
      type: "info",
      duration: 4000,
      position: "bottom-right",
      theme: "dark",
    })

🧠 Available Toast Types
------------------------

*   ✅ Success
*   ⚠️ Warning
*   ❌ Error

*   ℹ️ Info
*   🎨 Custom

🌐 Live Demo
------------

Demo (replace with your actual URL): [https://toastron.vercel.app](https://toastron.vercel.app)

💡 Author
---------

Created by [Radium](https://github.com/radium-op)  
17-year-old Full Stack Developer | CEO of [Maxipay](https://maxipay.store)

"Made with passion, built for developers."

📜 **License** — MIT © 2025 Radium
