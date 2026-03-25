"use client";

import { STACK_CATEGORIES } from "@/app/data/stack";
import TechIcon from "./TechIcon";

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

        <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
          {STACK_CATEGORIES.map((cat, i) => (
            <div
              key={cat.title}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
            >
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
