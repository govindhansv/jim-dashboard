import { CheckCircle2, GitFork, Tag } from "lucide-react";

const releases = [
  {
    version: "v2.0.0",
    date: "May 2026",
    status: "current",
    changes: [
      "Live Git Monitor integration",
      "Crakitup admin panel & credentials dashboard",
      "Real-time project links with tunnel URLs",
      "Quick links panel on homepage",
    ],
  },
  {
    version: "v1.1.0",
    date: "April 2026",
    status: "past",
    changes: [
      "Analytics page with stat cards",
      "Projects page with repo cards",
      "Settings page structure",
      "Dark glass-morphism theme",
    ],
  },
  {
    version: "v1.0.0",
    date: "March 2026",
    status: "past",
    changes: [
      "Initial Next.js setup with App Router",
      "Sidebar navigation",
      "Vercel deployment pipeline",
      "GitHub auto-deploy",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-white">Changelog</h1>
        <p className="mt-1 text-slate-400">Release history and updates</p>
      </div>

      <div className="relative space-y-0">
        {/* Vertical timeline line */}
        <div className="absolute left-[19px] top-0 h-full w-px bg-white/10" />

        {releases.map((release) => (
          <div key={release.version} className="relative flex gap-6 pb-12 last:pb-0">
            {/* Timeline dot */}
            <div className={`relative z-10 mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${
              release.status === "current"
                ? "border-blue-400/30 bg-blue-500/20 text-blue-200"
                : "border-white/10 bg-white/[0.06] text-slate-400"
            }`}>
              {release.status === "current" ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <Tag className="h-4 w-4" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl">
              <div className="mb-3 flex items-center gap-3">
                <h2 className="text-lg font-semibold text-white">{release.version}</h2>
                <span className="rounded-full bg-white/5 px-3 py-0.5 text-xs text-slate-500">
                  {release.date}
                </span>
                {release.status === "current" && (
                  <span className="rounded-full bg-blue-500/15 px-3 py-0.5 text-xs text-blue-200">
                    Latest
                  </span>
                )}
              </div>
              <ul className="space-y-2">
                {release.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
