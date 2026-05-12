import { Bell, Palette, Shield, User } from "lucide-react";

const sections = [
  { title: "Profile", desc: "Manage your account details and preferences.", icon: User },
  { title: "Appearance", desc: "Customize theme, colors, and display options.", icon: Palette },
  { title: "Notifications", desc: "Configure alert channels and notification preferences.", icon: Bell },
  { title: "Security", desc: "Access control, API tokens, and authentication settings.", icon: Shield },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-white">Settings</h1>
        <p className="mt-1 text-slate-400">Configure your workspace</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <button key={section.title} className="group flex items-start gap-4 rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl text-left transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/25 hover:bg-white/[0.075">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500/15 text-indigo-200">
              <section.icon className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">{section.title}</h2>
              <p className="mt-1 text-sm text-slate-400">{section.desc}</p>
            </div>
          </button>
        ))}
      </section>
    </div>
  );
}
