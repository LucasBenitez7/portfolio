"use client";

import { PROJECTS } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
      <div className="reveal" style={{ marginBottom: 50 }}>
        <p style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 11, color: "var(--accent)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
          02 / proyectos
        </p>
        <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 300, lineHeight: 1.1 }}>
          En producción 
        </h2>
      </div>

      {/* Proyectos — una fila completa cada uno */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {PROJECTS.map((project, i) => (
          <div key={project.id} className={`reveal reveal-delay-${i + 1}`}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
