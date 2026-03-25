import type { Project } from "@/app/data/projects";

export default function MetaHeader({ project }: { project: Project }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-6">
      <span
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 11,
          color: "var(--text-muted2)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginRight: 8,
        }}
      >
        {project.type}
      </span>
      <div className="flex flex-wrap items-center gap-2">
        {project.ci.map((c) => (
          <span
            key={c.label}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              padding: "2px 8px",
              borderRadius: 2,
              background: `rgba(${project.colorRgb},0.1)`,
              border: `1px solid rgba(${project.colorRgb},0.22)`,
              color: project.color,
            }}
          >
            {c.label}: {c.badge}
          </span>
        ))}
      </div>
    </div>
  );
}
