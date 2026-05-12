import { Activity, ArrowUpRight, Clock3, Cpu, Sparkles } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ActivityFeed } from "@/components/ActivityFeed";
import { MiniChart } from "@/components/MiniChart";

const stats = [
  {
    title: "Projects",
    value: 3,
    suffix: "",
    change: "Active",
    tone: "violet" as const,
    icon: "briefcase" as const,
  },
  {
    title: "Deployments",
    value: 1,
    suffix: "",
    change: "Vercel + Workers",
    tone: "indigo" as const,
    icon: "check" as const,
  },
  {
    title: "Uptime",
    value: 99.98,
    suffix: "%",
    change: "30 day average",
    tone: "emerald" as const,
    icon: "activity" as const,
  },
  {
    title: "Stacks",
    value: 3,
    suffix: "",
    change: "Next.js / Flutter / Cloudflare",
    tone: "cyan" as const,
    icon: "users" as const,
  },
];

const quickLinks = [
  { label: "Jim Dashboard", url: "https://jim-dashboard-five.vercel.app", live: true },
  { label: "Admin Panel (local)", url: "https://alike-card-correction-model.trycloudflare.com", live: false },
  { label: "Flutter App (local)", url: "https://quotations-patch-integrate-butterfly.trycloudflare.com", live: false },
  { label: "GitHub — jim-dashboard", url: "https://github.com/govindhansv/jim-dashboard", live: true },
  { label: "GitHub — crakitup_app", url: "https://github.com/govindhansv/crakitup_app", live: true },
  { label: "Git Monitor", url: "https://met-meetup-emotions-recent.trycloudflare.com", live: false },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-3 py-1 text-sm font-medium text-indigo-200">
              <Sparkles className="h-4 w-4" />
              Development workspace
            </div>
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
                Welcome back, Jim.
              </h1>
              <p className="text-base leading-7 text-slate-300 sm:text-lg">
                Crakitup admin panel, Flutter app, and this dashboard — all running from your VPS.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <Activity className="h-4 w-4" />
                Systems nominal
              </div>
              <div className="flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
                <Clock3 className="h-4 w-4" />
                2 tunnels active
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
            <div className="mb-2 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Quick Links</p>
              </div>
              <div className="rounded-2xl bg-indigo-500/15 p-3 text-indigo-200">
                <Cpu className="h-6 w-6" />
              </div>
            </div>
            <div className="space-y-2.5">
              {quickLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors">
                  {link.live ? (
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shrink-0" />
                  ) : (
                    <span className="h-2 w-2 rounded-full bg-amber-500 shrink-0" />
                  )}
                  <span className="truncate">{link.label}</span>
                  <ArrowUpRight className="h-3 w-3 shrink-0 ml-auto opacity-50" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Operational load</p>
              <h2 className="mt-1 text-2xl font-semibold text-white">Weekly capacity</h2>
            </div>
            <span className="rounded-full bg-violet-500/15 px-3 py-1 text-sm text-violet-200">
              Dummy data
            </span>
          </div>
          <div className="grid h-72 grid-cols-12 items-end gap-3">
            {[46, 64, 52, 78, 72, 88, 69, 91, 84, 76, 95, 87].map((height, index) => (
              <div key={index} className="group flex h-full items-end">
                <div
                  className="w-full rounded-t-xl bg-gradient-to-t from-indigo-600 to-violet-300 opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:shadow-lg group-hover:shadow-violet-500/20"
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>
        </div>
        <ActivityFeed />
      </section>
    </div>
  );
}
