"use client";

import { STACK_CATEGORIES, type StackItem } from "../data/stack";

function TechIcon({ item }: { item: StackItem }) {
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
      {/* Icon */}
      <div
        style={{ width: 40, height: 40, flexShrink: 0 }}
        dangerouslySetInnerHTML={{ __html: item.icon }}
      />
      {/* Name */}
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

export default function Stack() {
  return (
    <section
      id="stack"
      className="section-bg"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        padding: "100px 0",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 50 }}>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 14,
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            03 / stack
          </p>
        </div>

        {/* Categories */}
        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {STACK_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
            >
              {/* Category label */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {cat.title}
                </span>

                <div
                  style={{
                    flex: 1,
                    height: 1,
                    background: "var(--border)",
                  }}
                />
              </div>

              {/* Icon grid */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.items.map((item) => (
                  <TechIcon key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
