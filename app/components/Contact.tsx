"use client";

import { IconEmail, IconPhone, IconGitHub, IconLinkedIn } from "./icons";

const CONTACT_LINKS = [
  { href: "tel:+34624897409", icon: <IconPhone />, label: "+34 624 897 409" },
  {
    href: "https://github.com/LucasBenitez7",
    icon: <IconGitHub />,
    label: "LucasBenitez7",
  },
  {
    href: "https://www.linkedin.com/in/lucas-ben%C3%ADtez-b38069291/",
    icon: <IconLinkedIn />,
    label: "lucas-benítez",
  },
] as const;

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        borderTop: "1px solid var(--border)",
        padding: "100px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow de fondo */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 300,
          background:
            "radial-gradient(ellipse at bottom, rgba(16,185,129,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="reveal"
        style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}
      >
        <p
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 11,
            color: "var(--accent)",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          04 / contacto
        </p>
        <h2
          style={{
            fontFamily: "Cormorant Garamond, serif",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.05,
            marginBottom: 24,
          }}
        >
          Trabajemos{" "}
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            juntos
          </em>
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            marginBottom: 56,
            fontWeight: 300,
          }}
        >
          Busco posición remota como Full Stack Developer o Backend Developer.
          Si te interesa mi perfil, hablemos.
        </p>

        <a
          href="mailto:lucaspy1943@icloud.com"
          className="btn-primary"
          style={{
            fontSize: 14,
            padding: "16px 40px",
            marginBottom: 48,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <IconEmail /> lucaspy1943@icloud.com
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          {CONTACT_LINKS.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="link-underline"
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 13,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {c.icon}
              {c.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
