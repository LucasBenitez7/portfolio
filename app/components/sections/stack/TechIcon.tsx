"use client";

import type { StackItem } from "@/app/data/stack";

type TechIconProps = {
  item: StackItem;
};

export default function TechIcon({ item }: TechIconProps) {
  return (
    <div
      className="tech-icon-card"
      title={item.name}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 10,
        padding: "18px 12px",
        background: "var(--bg-card)",
        border: "1px solid var(--border)",
        borderRadius: 4,
        cursor: "default",
        transition: "all 0.25s ease",
        minWidth: 80,
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = item.color + "55";
        el.style.background = item.color + "0d";
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = `0 8px 24px ${item.color}22`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = "var(--border)";
        el.style.background = "var(--bg-card)";
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      <div
        style={{ width: 40, height: 40, flexShrink: 0 }}
        dangerouslySetInnerHTML={{ __html: item.icon }}
      />
      <span
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 10,
          color: "var(--text-secondary)",
          letterSpacing: "0.04em",
          textAlign: "center",
          lineHeight: 1.3,
          whiteSpace: "nowrap",
        }}
      >
        {item.name}
      </span>
    </div>
  );
}
