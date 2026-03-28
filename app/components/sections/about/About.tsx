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
            He implementado sistemas de pagos, reservas y e-commerce desplegados
            en producción — con transacciones ACID verificadas bajo carga.
            Trabajo con un ciclo de desarrollo completo: diseño, implementación,
            testing, CI/CD y despliegue.
          </p>
        </div>
      </div>
    </section>
  );
}
