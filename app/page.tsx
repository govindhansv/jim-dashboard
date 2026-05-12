export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 font-sans px-4">
      <main className="flex flex-col items-center gap-8 text-center max-w-2xl">
        <div className="text-6xl">🤖</div>
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Jim&apos;s Dashboard
        </h1>
        <p className="text-xl text-purple-200/80 max-w-md">
          Your Next.js sample app is live and connected to GitHub. Let&apos;s build something cool.
        </p>

        <div className="flex gap-4 mt-4">
          <span className="px-4 py-2 rounded-full bg-emerald-500/20 text-emerald-300 text-sm border border-emerald-500/30">
            🔥 Hot Reload Active
          </span>
          <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/30">
            ⚡ Turbopack
          </span>
        </div>

        <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/10 text-left w-full">
          <p className="text-purple-300 text-sm font-mono mb-3">// Try changing this text — it updates instantly!</p>
          <p className="text-gray-300 text-sm leading-relaxed">
            This page was edited by JIM on the fly. If you can see this message, live HMR is working through the Cloudflare tunnel. 🚀
          </p>
        </div>

        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/govindhansv/jim-dashboard"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-purple-100 transition-all"
          >
            View on GitHub →
          </a>
        </div>
      </main>
    </div>
  );
}
