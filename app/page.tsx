import { Activity, ArrowUpRight, Clock3, Cpu, Sparkles } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { ActivityFeed } from "@/components/ActivityFeed";
import { MiniChart } from "@/components/MiniChart";

const stats = [
  {
    title: "Projects",
    value: 18,
    suffix: "",
    change: "+12.4%",
    tone: "violet" as const,
    icon: "briefcase" as const,
  },
  {
    title: "Tasks",
    value: 246,
    suffix: "",
    change: "+28 this week",
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
    title: "Visitors",
    value: 12840,
    suffix: "",
    change: "+18.2%",
    tone: "cyan" as const,
    icon: "users" as const,
  },
];

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-indigo-950/40 backdrop-blur-xl sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-400/25 bg-indigo-400/10 px-3 py-1 text-sm font-medium text-indigo-200">
              <Sparkles className="h-4 w-4" />
              Live workspace overview
            </div>
            <div className="max-w-3xl space-y-4">
              <h1 className="text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
                Welcome back, Jim.
              </h1>
              <p className="text-base leading-7 text-slate-300 sm:text-lg">
                Monitor delivery, system health, and audience activity from a focused command center built for fast daily review.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <Activity className="h-4 w-4" />
                Systems nominal
              </div>
              <div className="flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm text-violet-200">
                <Clock3 className="h-4 w-4" />
                Updated 4 min ago
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-slate-950/50 p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Throughput</p>
                <p className="mt-1 text-2xl font-semibold text-white">84.6%</p>
              </div>
              <div className="rounded-2xl bg-indigo-500/15 p-3 text-indigo-200">
                <Cpu className="h-6 w-6" />
              </div>
            </div>
            <MiniChart />
            <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
              <span className="text-slate-400">Delivery velocity</span>
              <span className="flex items-center gap-1 font-medium text-emerald-300">
                +9.8% <ArrowUpRight className="h-4 w-4" />
              </span>
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
