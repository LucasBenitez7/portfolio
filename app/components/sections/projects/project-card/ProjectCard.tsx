"use client";

import { useState } from "react";
import type { Project } from "@/app/data/projects";
import type { K6ResultRow } from "./ticket-master/K6ResultsPanel";
import type { LocustResultRow } from "./risk-core/LocustResultsPanel";
import MetaHeader from "./parts/MetaHeader";
import ProjectTitle from "./parts/ProjectTitle";
import ProjectDescription from "./parts/ProjectDescription";
import TicketmasterStats from "./ticket-master/TicketmasterStats";
import K6ResultsPanel from "./ticket-master/K6ResultsPanel";
import LocustResultsPanel from "./risk-core/LocustResultsPanel";
import RiskCoreStats from "./risk-core/RiskCoreStats";
import ProjectCardActions from "./ProjectCardActions";
import StackChips from "./parts/StackChips";

const API_DOCS_PROJECT_IDS = new Set(["ticketmaster", "booking-api"]);

function getK6Rows(project: Project): readonly K6ResultRow[] | undefined {
  if (project.id !== "ticketmaster") return undefined;
  return project.k6;
}

function getLocustRows(project: Project): readonly LocustResultRow[] | undefined {
  if (project.id !== "risk-core") return undefined;
  return project.locust;
}

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);
  const [k6Open, setK6Open] = useState(false);
  const [locustOpen, setLocustOpen] = useState(false);
  const liveCtaIsApiDocs = API_DOCS_PROJECT_IDS.has(project.id);
  const k6Rows = getK6Rows(project);
  const locustRows = getLocustRows(project);

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
      <MetaHeader project={project} />
      <ProjectTitle name={project.name} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          alignItems: "start",
        }}
        className="project-cols"
      >
        <div className="project-card-left">
          <ProjectDescription description={project.description} />

          {project.id === "ticketmaster" && (
            <TicketmasterStats accentColor={project.color} />
          )}

          {project.id === "risk-core" && (
            <RiskCoreStats colorRgb={project.colorRgb} />
          )}

          {k6Rows && (
            <K6ResultsPanel
              rows={k6Rows}
              color={project.color}
              open={k6Open}
              onToggle={() => setK6Open(!k6Open)}
            />
          )}

          {locustRows && (
            <LocustResultsPanel
              rows={locustRows}
              color={project.color}
              open={locustOpen}
              onToggle={() => setLocustOpen(!locustOpen)}
            />
          )}

          <ProjectCardActions
            url={project.url}
            repo={project.repo}
            color={project.color}
            colorRgb={project.colorRgb}
            liveCtaIsApiDocs={liveCtaIsApiDocs}
          />
        </div>

        <StackChips
          stack={project.stack}
          color={project.color}
          colorRgb={project.colorRgb}
        />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .project-card { padding: 32px 20px !important; }
          .project-cols { grid-template-columns: 1fr !important; gap: 32px !important; }
          .project-card-left { min-width: 0; }
          .k6-table-scroll, .locust-table-scroll { -webkit-overflow-scrolling: touch; }
          .k6-table, .locust-table { min-width: 420px; }
        }
      `}</style>
    </div>
  );
}
