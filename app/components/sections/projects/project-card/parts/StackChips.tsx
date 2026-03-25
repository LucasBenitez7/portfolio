type StackChipsProps = {
  stack: readonly string[];
  color: string;
  colorRgb: string;
};

export default function StackChips({
  stack,
  color,
  colorRgb,
}: StackChipsProps) {
  return (
    <div>
      <p
        style={{
          fontFamily: "JetBrains Mono, monospace",
          fontSize: 10,
          color,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        Stack
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {stack.map((t) => (
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
              background: `rgba(${colorRgb}, 0.06)`,
              border: `1px solid rgba(${colorRgb}, 0.15)`,
              color: "var(--text-secondary)",
              letterSpacing: "0.03em",
              transition: "all 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `rgba(${colorRgb}, 0.12)`;
              e.currentTarget.style.borderColor = `rgba(${colorRgb}, 0.35)`;
              e.currentTarget.style.color = color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `rgba(${colorRgb}, 0.06)`;
              e.currentTarget.style.borderColor = `rgba(${colorRgb}, 0.15)`;
              e.currentTarget.style.color = "var(--text-secondary)";
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
