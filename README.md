<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Toastron — Modern Toast Notifications for React & Next.js</title>
  <style>
    :root{
      --bg:#0f1724; --card:#0b1220; --muted:#94a3b8; --accent:#ff6b6b; --text:#e6eef8;
      --mono-bg:#0b1220;
    }
    body{font-family:Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; margin:0; background:linear-gradient(180deg,#071022 0%, #071833 100%); color:var(--text); line-height:1.6;}
    .container{max-width:900px;margin:48px auto;padding:28px;background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));border-radius:12px;box-shadow:0 8px 30px rgba(2,6,23,0.6);border:1px solid rgba(255,255,255,0.03);}
    h1{font-size:28px;margin:0 0 8px;display:flex;align-items:center;gap:12px}
    .badge{background:var(--card);padding:6px 10px;border-radius:8px;font-size:13px;color:var(--muted);border:1px solid rgba(255,255,255,0.02);}
    p.lead{color:var(--muted);margin-top:6px}
    section{margin-top:20px}
    ul{margin:10px 0 0 20px}
    pre{background:var(--mono-bg);padding:16px;border-radius:8px;overflow:auto;border:1px solid rgba(255,255,255,0.03);color:var(--text);font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Courier New", monospace;font-size:13px}
    code{background:rgba(255,255,255,0.02);padding:2px 6px;border-radius:6px}
    .muted{color:var(--muted)}
    footer{margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.02);color:var(--muted);font-size:13px}
    a{color:#7dd3fc;text-decoration:none}
    .columns{display:flex;gap:20px;flex-wrap:wrap}
    .col{flex:1;min-width:220px}
  </style>
</head>
<body>
  <main class="container" role="main">
    <header>
      <h1>⚡ Toastron <span class="badge">Modern Toasts for React &amp; Next.js</span></h1>
      <p class="lead">Toastron is a fast, modern, and fully customizable toast notification library for React and Next.js. Create beautiful, animated alerts with ease. Lightweight, responsive, and built for modern UI/UX design.</p>
    </header>

    <section>
      <h2>✨ Features</h2>
      <ul>
        <li>⚡ Blazing fast and lightweight</li>
        <li>🎨 Beautiful, smooth animations</li>
        <li>🧩 Works with React &amp; Next.js</li>
        <li>🌗 Dark and Light mode support</li>
        <li>🪄 Custom colors, icons, and positions</li>
        <li>📱 Fully responsive on all devices</li>
      </ul>
    </section>

    <section>
      <h2>🚀 Installation</h2>
      <pre><code>npm install toastron
# or
yarn add toastron</code></pre>
    </section>

    <section>
      <h2>💻 Usage Example</h2>
      <pre><code>import { Toastron, toast } from "toastron"
import "toastron/dist/style.css"

export default function App() {
  return (
    &lt;&gt;
      &lt;Toastron /&gt;
      &lt;button onClick={() =&gt; toast.success("Welcome to Toastron!")}&gt;
        Show Toast
      &lt;/button&gt;
    &lt;/&gt;
  )
}</code></pre>
    </section>

    <section>
      <h2>⚙️ Customization Example</h2>
      <pre><code>toast("Custom Toast Message", {
  type: "info",
  duration: 4000,
  position: "bottom-right",
  theme: "dark",
})</code></pre>
    </section>

    <section>
      <h2>🧠 Available Toast Types</h2>
      <div class="columns">
        <div class="col">
          <ul>
            <li>✅ Success</li>
            <li>⚠️ Warning</li>
            <li>❌ Error</li>
          </ul>
        </div>
        <div class="col">
          <ul>
            <li>ℹ️ Info</li>
            <li>🎨 Custom</li>
          </ul>
        </div>
      </div>
    </section>

    <section>
      <h2>🌐 Live Demo</h2>
      <p class="muted">Demo (replace with your actual URL): <a href="https://toastron.vercel.app" target="_blank" rel="noreferrer">https://toastron.vercel.app</a></p>
    </section>

    <section>
      <h2>💡 Author</h2>
      <p class="muted">Created by <a href="https://github.com/radium-op" target="_blank" rel="noreferrer">Radium</a><br/>
      17-year-old Full Stack Developer | CEO of <a href="https://maxipay.store" target="_blank" rel="noreferrer">Maxipay</a></p>
      <p class="muted">"Made with passion, built for developers."</p>
    </section>

    <footer>
      <p>📜 <strong>License</strong> — MIT © 2025 Radium</p>
    </footer>
  </main>
</body>
</html>
