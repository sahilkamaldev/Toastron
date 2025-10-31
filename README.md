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
