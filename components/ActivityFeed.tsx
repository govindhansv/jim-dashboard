import { CheckCircle2, GitPullRequestArrow, RadioTower, Rocket } from "lucide-react";

const activities = [
  {
    title: "Launch checklist completed",
    detail: "Production release moved to monitoring.",
    time: "2m ago",
    icon: Rocket,
  },
  {
    title: "Pull request reviewed",
    detail: "Dashboard layout changes approved.",
    time: "18m ago",
    icon: GitPullRequestArrow,
  },
  {
    title: "Monitoring alert resolved",
    detail: "API latency returned to baseline.",
    time: "41m ago",
    icon: RadioTower,
  },
  {
    title: "Tasks synchronized",
    detail: "Sprint board updated with latest status.",
    time: "1h ago",
    icon: CheckCircle2,
  },
];

export function ActivityFeed() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
      <div className="mb-6">
        <p className="text-sm text-slate-400">Recent events</p>
        <h2 className="mt-1 text-2xl font-semibold text-white">Activity feed</h2>
      </div>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div key={activity.title} className="flex gap-4 rounded-2xl border border-white/8 bg-slate-950/35 p-4 transition-all duration-200 hover:border-indigo-300/20 hover:bg-slate-900/70">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-200">
                <Icon className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-medium text-white">{activity.title}</p>
                  <span className="shrink-0 text-xs text-slate-500">{activity.time}</span>
                </div>
                <p className="mt-1 text-sm leading-6 text-slate-400">{activity.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
