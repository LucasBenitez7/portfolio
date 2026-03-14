"use client";

import { PROJECTS } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-bg"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "100px 24px",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
      <div className="reveal" style={{ marginBottom: 50 }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 14, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
          02 / proyectos
        </p>
      </div>

      {/* Proyectos — una fila completa cada uno */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {PROJECTS.map((project, i) => (
          <div key={project.id} className={`reveal reveal-delay-${i + 1}`}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
