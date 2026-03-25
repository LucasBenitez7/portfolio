import { IconExternal, IconGitHub } from "@/app/components/icons";

type ProjectCardActionsProps = {
  url: string;
  repo: string;
  color: string;
  colorRgb: string;
  liveCtaIsApiDocs: boolean;
};

export default function ProjectCardActions({
  url,
  repo,
  color,
  colorRgb,
  liveCtaIsApiDocs,
}: ProjectCardActionsProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 12,
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary"
        style={{
          padding: "10px 24px",
          fontSize: 12,
          background: color,
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          color: "#040a07",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow =
            `0 8px 28px rgba(${colorRgb}, 0.30)`;
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        {liveCtaIsApiDocs ? "Ver API Docs" : "Ver Sitio"} <IconExternal />
      </a>
      <a
        href={repo}
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
          el.style.borderColor = color;
          el.style.color = color;
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
  );
}
