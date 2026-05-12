"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  FolderKanban,
  LayoutDashboard,
  Settings,
  Sparkles,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-slate-950/70 p-5 backdrop-blur-2xl lg:block">
        <div className="flex h-full flex-col">
          <Link href="/" className="flex items-center gap-3 rounded-2xl px-2 py-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-400 to-violet-600 text-white shadow-lg shadow-indigo-500/25">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="text-base font-semibold text-white">Jim Dashboard</p>
              <p className="text-sm text-slate-400">Control center</p>
            </div>
          </Link>

          <nav className="mt-8 space-y-2">
            {navigation.map((item) => {
              const isActive =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              const Icon = item.icon;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-indigo-500/20 text-white shadow-lg shadow-indigo-950/30 ring-1 ring-indigo-300/20"
                      : "text-slate-400 hover:bg-white/8 hover:text-white"
                  }`}
                >
                  <Icon
                    className={`h-5 w-5 transition-transform duration-200 group-hover:scale-110 ${
                      isActive ? "text-indigo-200" : "text-slate-500 group-hover:text-indigo-200"
                    }`}
                  />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto rounded-3xl border border-white/10 bg-white/[0.055] p-4">
            <p className="text-sm font-medium text-white">Workspace health</p>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-400">Deployments</span>
                <span className="text-emerald-300">Stable</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-indigo-500 to-violet-400" />
              </div>
            </div>
          </div>
        </div>
      </aside>

      <nav className="fixed inset-x-3 bottom-3 z-50 rounded-3xl border border-white/10 bg-slate-950/85 p-2 shadow-2xl shadow-black/40 backdrop-blur-2xl lg:hidden">
        <div className="grid grid-cols-4 gap-1">
          {navigation.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-2xl text-[0.7rem] font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-indigo-500/25 text-white"
                    : "text-slate-400 hover:bg-white/8 hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
