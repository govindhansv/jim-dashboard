import { ExternalLink, GitBranch, Star } from "lucide-react";

const projects = [
  { name: "Jim Dashboard", status: "Active", stars: 0, branch: "main", desc: "Modern Next.js dashboard with dark theme and analytics." },
  { name: "API Service", status: "In Progress", stars: 0, branch: "dev", desc: "RESTful API service with authentication and rate limiting." },
  { name: "Mobile App", status: "Planning", stars: 0, branch: "prototype", desc: "Cross-platform mobile application using React Native." },
  { name: "Documentation", status: "Active", stars: 0, branch: "main", desc: "Project documentation and developer guides." },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-white">Projects</h1>
        <p className="mt-1 text-slate-400">Ongoing workspaces</p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article key={project.name} className="group rounded-3xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/25 hover:bg-white/[0.075]">
            <div className="flex items-start justify-between">
              <h2 className="text-lg font-semibold text-white">{project.name}</h2>
              <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                project.status === "Active" ? "bg-emerald-500/15 text-emerald-200" :
                project.status === "In Progress" ? "bg-amber-500/15 text-amber-200" :
                "bg-slate-500/15 text-slate-300"
              }`}>{project.status}</span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{project.desc}</p>
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1"><Star className="h-3 w-3" /> {project.stars}</span>
              <span className="flex items-center gap-1"><GitBranch className="h-3 w-3" /> {project.branch}</span>
              <span className="flex items-center gap-1 ml-auto group-hover:text-indigo-300 transition-colors">
                <ExternalLink className="h-3 w-3" /> View
              </span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
