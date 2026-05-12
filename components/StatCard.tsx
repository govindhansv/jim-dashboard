"use client";

import { useEffect, useMemo, useState } from "react";
import { Activity, BriefcaseBusiness, CheckCircle2, Users } from "lucide-react";

type StatIcon = "briefcase" | "check" | "activity" | "users";
type StatTone = "violet" | "indigo" | "emerald" | "cyan";

type StatCardProps = {
  title: string;
  value: number;
  suffix?: string;
  change: string;
  icon: StatIcon;
  tone: StatTone;
};

const icons = {
  briefcase: BriefcaseBusiness,
  check: CheckCircle2,
  activity: Activity,
  users: Users,
};

const tones = {
  violet: "from-cyan-500/24 to-fuchsia-500/10 text-cyan-200 ring-cyan-300/20",
  indigo: "from-blue-500/24 to-blue-500/10 text-blue-200 ring-blue-300/20",
  emerald: "from-emerald-500/20 to-teal-500/10 text-emerald-200 ring-emerald-300/20",
  cyan: "from-cyan-500/20 to-sky-500/10 text-cyan-200 ring-cyan-300/20",
};

export function StatCard({ title, value, suffix = "", change, icon, tone }: StatCardProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const Icon = icons[icon];
  const decimals = useMemo(() => (Number.isInteger(value) ? 0 : 2), [value]);

  useEffect(() => {
    let frame = 0;
    const duration = 1100;
    const startedAt = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(value * eased);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  const formattedValue = displayValue.toLocaleString("en-US", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  });

  return (
    <article className="group rounded-3xl border border-white/10 bg-white/[0.055] p-5 shadow-xl shadow-slate-950/20 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-300/25 hover:bg-white/[0.075]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-normal text-white">
            {formattedValue}
            {suffix}
          </p>
        </div>
        <div className={`rounded-2xl bg-gradient-to-br p-3 ring-1 ${tones[tone]}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-5 text-sm text-slate-400">
        <span className="font-medium text-emerald-300">{change}</span>
      </p>
    </article>
  );
}
