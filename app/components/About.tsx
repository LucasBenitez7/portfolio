"use client";

export default function About() {
  return (
    <section
      id="about"
      className="section-bg"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
        <div className="reveal" style={{ maxWidth: 680 }}>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 14,
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 50,
            }}
          >
            01 / sobre mí
          </p>

          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: 20,
              fontWeight: 300,
            }}
          >
            Soy Lucas, Construyo aplicaciones completas con TypeScript y
            JavaScript, cubro todo el ciclo: desde la interfaz, el backend y el
            despliegue en producción.
          </p>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: 20,
              fontWeight: 300,
            }}
          >
            Trabajo con orden, código tipado, responsabilidades bien separadas y
            arquitectura clara. Así el código queda mantenible y escalable.
          </p>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: 20,
              fontWeight: 300,
            }}
          >
            Le doy bastante importancia a que el código funcione de verdad.
            Escribo tests, pruebo los flujos completos y verifico que aguanta
            bajo carga.
          </p>
        </div>
      </div>
    </section>
  );
}
