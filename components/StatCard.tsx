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
  violet: "from-sky-100 to-fuchsia-100 text-cyan-800 ring-0",
  indigo: "from-blue-100 to-blue-50 text-blue-800 ring-0",
  emerald: "from-emerald-100 to-teal-50 text-emerald-700 ring-0",
  cyan: "from-sky-100 to-cyan-50 text-cyan-800 ring-0",
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
    <article className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/80  transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/25 hover:bg-slate-50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-400">{title}</p>
          <p className="mt-3 text-3xl font-semibold tracking-normal text-slate-900">
            {formattedValue}
            {suffix}
          </p>
        </div>
        <div className={`rounded-2xl bg-gradient-to-br p-3 ring-1 ${tones[tone]}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <p className="mt-5 text-sm text-slate-400">
        <span className="font-medium text-emerald-600">{change}</span>
      </p>
    </article>
  );
}
