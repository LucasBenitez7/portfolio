export default function Footer() {
  return (
    <footer
      className="section-bg"
      style={{ borderTop: "1px solid var(--border)", padding: "24px" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} Lucas Benítez
        </span>
        <span
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            color: "var(--text-muted)",
            letterSpacing: "0.05em",
          }}
        >
          Next.js 16 · Deployed on Vercel
        </span>
      </div>
    </footer>
  );
}
