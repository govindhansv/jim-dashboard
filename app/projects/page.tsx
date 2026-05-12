import { ExternalLink, GitBranch, FolderGit, Key, Globe, Monitor, User } from "lucide-react";

interface ProjectLink {
  label: string;
  url: string;
  icon?: React.ReactNode;
}

interface Credential {
  email: string;
  password: string;
  role: string;
}

interface Project {
  name: string;
  status: "Active" | "In Development" | "Planning";
  description: string;
  tech: string[];
  liveUrl?: string;
  localUrl?: string;
  githubUrl: string;
  credentials?: Credential[];
  notes?: string;
}

const projects: Project[] = [
  {
    name: "Jim Dashboard",
    status: "Active",
    description: "Modern Next.js dashboard with dark theme, real-time stats, analytics, and project management.",
    tech: ["Next.js 15", "Tailwind CSS", "TypeScript", "Vercel"],
    liveUrl: "https://jim-dashboard-five.vercel.app",
    githubUrl: "https://github.com/govindhansv/jim-dashboard",
    notes: "Deployed on Vercel — auto-deploys from main branch.",
  },
  {
    name: "Crakitup Admin Panel",
    status: "In Development",
    description: "Cloudflare Workers admin dashboard for the Crakitup platform. Auth, DB, file management, quiz engine.",
    tech: ["React 19", "Hono", "D1/SQLite", "Drizzle ORM", "Cloudflare Workers"],
    localUrl: "https://alike-card-correction-model.trycloudflare.com",
    githubUrl: "https://github.com/govindhansv/crakitup_app",
    credentials: [
      { email: "gokulhans@gmail.com", password: "SuperAdmin@123", role: "Super Admin" },
      { email: "gokulhans10@gmail.com", password: "Admin@123", role: "Admin" },
      { email: "test@example.com", password: "password123", role: "User" },
    ],
    notes: "Local dev server. Email login enabled, local DB seeded.",
  },
  {
    name: "Crakitup Flutter App",
    status: "In Development",
    description: "Cross-platform mobile app (Flutter) for exam preparation, mock tests, and community features.",
    tech: ["Flutter 3.41", "Dart 3.11", "Web (Wasm)", "Cloudflare API"],
    localUrl: "https://quotations-patch-integrate-butterfly.trycloudflare.com",
    githubUrl: "https://github.com/govindhansv/crakitup_app",
    notes: "Flutter web build, served locally. API points to the admin panel tunnel.",
  },
  {
    name: "Git Monitor",
    status: "Active",
    description: "Live git changes tracker with Codex CLI log viewer. Shows real-time file diffs, commits, and status across all repos.",
    tech: ["Node.js", "SSE", "Git API", "Real-time"],
    localUrl: "https://met-meetup-emotions-recent.trycloudflare.com",
    githubUrl: "https://github.com/govindhansv/jim-dashboard",
    notes: "Auto-refreshes every 3s via Server-Sent Events. Click commits to view full diffs.",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  const statusColor =
    project.status === "Active"
      ? "bg-emerald-100 text-emerald-700"
      : "bg-amber-100 text-amber-700";

  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6  transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300/25 hover:bg-slate-50">
      {/* Header */}
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-semibold text-slate-900">{project.name}</h2>
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}>
          {project.status}
        </span>
      </div>
      <p className="mt-2 text-sm text-slate-400">{project.description}</p>

      {/* Tech tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs text-blue-300">
            {t}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-4 space-y-2">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 transition-colors">
            <Globe className="h-4 w-4" />
            <span className="truncate">{project.liveUrl}</span>
            <ExternalLink className="h-3 w-3 shrink-0 ml-auto" />
          </a>
        )}
        {project.localUrl && (
          <a href={project.localUrl} target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-sm text-amber-300 hover:text-amber-700 transition-colors">
            <Monitor className="h-4 w-4" />
            <span className="truncate">{project.localUrl}</span>
            <ExternalLink className="h-3 w-3 shrink-0 ml-auto" />
          </a>
        )}
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
           className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-900 transition-colors">
          <FolderGit className="h-4 w-4" />
          <span className="truncate">{project.githubUrl}</span>
          <ExternalLink className="h-3 w-3 shrink-0 ml-auto" />
        </a>
      </div>

      {/* Credentials */}
      {project.credentials && project.credentials.length > 0 && (
        <div className="mt-4 rounded-2xl border border-white/5 bg-slate-50/80 p-4">
          <div className="flex items-center gap-2 mb-3 text-xs font-medium text-slate-400 uppercase tracking-wider">
            <Key className="h-3.5 w-3.5" />
            Test Credentials
          </div>
          <div className="space-y-2">
            {project.credentials.map((cred) => (
              <div key={cred.email} className="flex items-center gap-2 text-xs">
                <span className={`rounded px-2 py-0.5 font-medium ${
                  cred.role === "Super Admin" ? "bg-cyan-500/20 text-cyan-700" :
                  cred.role === "Admin" ? "bg-blue-500/20 text-blue-200" :
                  "bg-slate-500/20 text-slate-600"
                }`}>{cred.role}</span>
                <span className="text-slate-400">{cred.email}</span>
                <span className="text-slate-400">/</span>
                <span className="text-slate-400">{cred.password}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Notes */}
      {project.notes && (
        <p className="mt-3 text-xs text-slate-400 italic">{project.notes}</p>
      )}
    </article>
  );
};

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-slate-900">Projects</h1>
        <p className="mt-1 text-slate-400">Live sites, local tunnels, credentials, and repositories</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </div>
  );
}
