import { Sparkles, Zap, Rocket } from "lucide-react";

const quarters = [
  {
    label: "Q1 2026",
    icon: Sparkles,
    color: "text-cyan-300",
    bg: "bg-cyan-500/15",
    items: [
      { title: "Dashboard v1.0 Release", done: true },
      { title: "Vercel Deployment Pipeline", done: true },
      { title: "GitHub Integration", done: true },
      { title: "Crakitup Admin Panel", done: true },
    ],
  },
  {
    label: "Q2 2026",
    icon: Zap,
    color: "text-amber-300",
    bg: "bg-amber-100",
    items: [
      { title: "Flutter App Web Build", done: true },
      { title: "Cloudflare D1 + Workers Deploy", inProgress: true },
      { title: "Live Git Monitor", done: true },
      { title: "Real-time Codex Log Streaming", pending: true },
    ],
  },
  {
    label: "Q3 2026",
    icon: Rocket,
    color: "text-emerald-600",
    bg: "bg-emerald-100",
    items: [
      { title: "Production Admin Panel Launch", pending: true },
      { title: "Flutter App Store Release", pending: true },
      { title: "CI/CD Pipeline Automation", pending: true },
      { title: "Performance Monitoring & Alerts", pending: true },
    ],
  },
];

export default function RoadmapPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Roadmap</h1>
        <p className="mt-1 text-slate-400">What&apos;s coming next</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quarters.map((q) => (
          <div key={q.label} className="rounded-3xl border border-slate-200 bg-white p-6  transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/25">
            <div className={`mb-4 flex items-center gap-3 rounded-2xl ${q.bg} p-3`}>
              <q.icon className={`h-6 w-6 ${q.color}`} />
              <h2 className={`text-lg font-semibold ${q.color}`}>{q.label}</h2>
            </div>
            <ul className="space-y-3">
              {q.items.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                    item.done ? "bg-emerald-500/20 text-emerald-600" :
                    item.inProgress ? "bg-amber-500/20 text-amber-300" :
                    "bg-white/5 text-slate-400"
                  }`}>
                    {item.done ? "✓" : item.inProgress ? "~" : "·"}
                  </span>
                  <span className={`text-sm ${
                    item.done ? "text-emerald-700 line-through opacity-60" :
                    item.inProgress ? "text-amber-700" :
                    "text-slate-400"
                  }`}>
                    {item.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
