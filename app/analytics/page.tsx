import { BarChart3, TrendingUp, Users, Globe } from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Analytics</h1>
        <p className="mt-1 text-slate-400">Platform metrics and trends</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {[
          { title: "Page Views", value: "284.5K", change: "+12.3%", icon: BarChart3, tone: "from-blue-500/20 to-blue-500/10 text-blue-200" },
          { title: "Active Users", value: "3,842", change: "+8.1%", icon: Users, tone: "from-emerald-500/20 to-teal-500/10 text-emerald-700" },
          { title: "Conversion", value: "4.7%", change: "+1.2%", icon: TrendingUp, tone: "from-cyan-500/20 to-fuchsia-500/10 text-cyan-700" },
        ].map((card) => (
          <article key={card.title} className="rounded-3xl border border-slate-200 bg-white p-6 ">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-400">{card.title}</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900">{card.value}</p>
              </div>
              <div className={`rounded-2xl bg-gradient-to-br p-3 ring-1 ring-white/10 ${card.tone}`}>
                <card.icon className="h-5 w-5" />
              </div>
            </div>
            <p className="mt-4 text-sm font-medium text-emerald-600">{card.change}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
