"use client";

import { useState } from "react";
import { type Project } from "../../data/projects";
import { IconExternal, IconGitHub } from "../icons";
import Stat from "./Stat";

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);
  const [k6Open, setK6Open] = useState(false);

  const p = project as typeof project & {
    k6?: {
      name: string;
      vus: string;
      p95: string;
      rps: string;
      errors: string;
      ok: boolean;
      repo: string;
    }[];
  };

  return (
    <div
      className="card project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        padding: "40px 48px",
        position: "relative",
        overflow: "hidden",
        borderColor: hovered
          ? `rgba(${project.colorRgb}, 0.4)`
          : "var(--border)",
        transition:
          "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Top accent bar */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: project.color,
          opacity: hovered ? 1 : 0.35,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Header — type + CI badges */}
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

      {/* Title */}
      <h3
        style={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
          fontWeight: 500,
          letterSpacing: "-0.01em",
          marginBottom: 28,
        }}
      >
        {project.name}
      </h3>

      {/* Two-column body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "start",
        }}
        className="project-cols"
      >
        {/* Left: description + stats (ticketmaster) + k6 + CTA */}
        <div className="project-card-left">
          <p
            style={{
              fontSize: 14,
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: 10,
              fontWeight: 300,
            }}
          >
            {project.description}
          </p>

          {/* Stats — solo TicketMaster */}
          {project.id === "ticketmaster" && (
            <div className="grid grid-cols-3 gap-2 mb-6">
              <Stat
                value={500}
                label="VUs máximos"
                suffix="+"
                color={project.color}
              />
              <Stat
                value={0}
                label="Error rate"
                suffix="%"
                color={project.color}
              />
              <Stat
                value={12}
                label="p95 latency"
                suffix="ms"
                color={project.color}
              />
            </div>
          )}

          {/* k6 table */}
          {p.k6 && (
            <div style={{ marginBottom: 28 }}>
              <button
                onClick={() => setK6Open(!k6Open)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  color: project.color,
                  letterSpacing: "0.08em",
                  marginBottom: k6Open ? 12 : 0,
                  padding: 0,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    transform: k6Open ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "transform 0.2s",
                  }}
                >
                  ▶
                </span>
                {k6Open ? "OCULTAR" : "VER"} RESULTADOS K6
              </button>
              {k6Open && (
                <div
                  className="k6-table-wrapper"
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: 2,
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <div
                    className="k6-table-scroll"
                    style={{
                      overflowX: "auto",
                      WebkitOverflowScrolling: "touch",
                      width: "100%",
                    }}
                  >
                    <table className="k6-table">
                      <thead>
                        <tr>
                          <th>Escenario</th>
                          <th>VUs</th>
                          <th>p95</th>
                          <th>req/s</th>
                          <th>Errores</th>
                          <th>Result</th>
                        </tr>
                      </thead>
                      <tbody>
                        {p.k6.map((row) => (
                          <tr key={row.name}>
                            <td className="k6-val">{row.name}</td>
                            <td>{row.vus}</td>
                            <td className="k6-val">{row.p95}</td>
                            <td>{row.rps}</td>
                            <td>{row.errors}</td>
                            <td
                              className="text-center"
                              style={{ color: project.color, fontWeight: 700 }}
                            >
                              ✅
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CTA */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{
                padding: "10px 24px",
                fontSize: 12,
                background: project.color,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#040a07",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  `0 8px 28px rgba(${project.colorRgb}, 0.30)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {project.id === "ticketmaster" ? "Ver API Docs" : "Ver Sitio"}{" "}
              <IconExternal />
            </a>
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{
                padding: "10px 24px",
                fontSize: 12,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = project.color;
                el.style.color = project.color;
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--text-secondary)";
                el.style.transform = "translateY(0)";
              }}
            >
              Ver código <IconGitHub />
            </a>
          </div>
        </div>

        {/* Right: stack chips con color del proyecto */}
        <div>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 10,
              color: project.color,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Stack
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
            {project.stack.map((t) => (
              <span
                key={t}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  padding: "3px 10px",
                  borderRadius: 2,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: 11,
                  fontWeight: 500,
                  background: `rgba(${project.colorRgb}, 0.06)`,
                  border: `1px solid rgba(${project.colorRgb}, 0.15)`,
                  color: "var(--text-secondary)",
                  letterSpacing: "0.03em",
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = `rgba(${project.colorRgb}, 0.12)`;
                  e.currentTarget.style.borderColor = `rgba(${project.colorRgb}, 0.35)`;
                  e.currentTarget.style.color = project.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = `rgba(${project.colorRgb}, 0.06)`;
                  e.currentTarget.style.borderColor = `rgba(${project.colorRgb}, 0.15)`;
                  e.currentTarget.style.color = "var(--text-secondary)";
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card { padding: 32px 20px !important; }
          .project-cols { grid-template-columns: 1fr !important; gap: 32px !important; }
          .project-card-left { min-width: 0; }
          .k6-table-scroll { -webkit-overflow-scrolling: touch; }
          .k6-table { min-width: 420px; }
        }
      `}</style>
    </div>
  );
}
