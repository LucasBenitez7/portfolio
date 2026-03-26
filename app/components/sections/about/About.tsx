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
            Construyo aplicaciones full stack y APIs backend con foco en
            arquitectura, rendimiento y mantenibilidad.
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
            He implementado autenticación avanzada, pagos online, cero sobreventa bajo carga con
            transacciones ACID verificadas con load testing, arquitectura
            hexagonal y pipelines CI/CD completos con despliegue en producción.
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
            Escribo tests — unitarios, integración, E2E — y verifico que el
            sistema aguanta bajo carga real.
          </p>
        </div>
      </div>
    </section>
  );
}
