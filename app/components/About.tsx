"use client";

export default function About() {
  return (
    <section
      id="about"
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "rgba(16,185,129,0.015)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "100px 24px" }}>
        <div className="reveal" style={{ maxWidth: 680 }}>
          <p
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            01 / sobre mí
          </p>
          <h2
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: 32,
            }}
          >
            Full Stack {" "}
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              Developer
            </em>
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              marginBottom: 20,
              fontWeight: 300,
            }}
          >
            Soy Lucas, 25 años, viviendo en A Coruña. Construyo aplicaciones completas
            con TypeScript, React y NestJS, me encargo de todo desde la interfaz, el backend y el despliegue.
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
          <p
            style={{
              fontSize: 15,
              color: "var(--text-secondary)",
              lineHeight: 1.85,
              fontWeight: 300,
            }}
          >
            Fuera del código me gusta entrenar y hacer cosas que me hagan
            mejorar.
          </p>
        </div>
      </div>
    </section>
  );
}
