"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "sobre mí", href: "#about" },
  { label: "proyectos", href: "#projects" },
  { label: "stack", href: "#stack" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{ borderBottomColor: scrolled ? "var(--border)" : "transparent" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: 16,
            fontWeight: 700,
            color: "var(--accent)",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          lsb
        </a>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: 32, alignItems: "center" }}
          className="nav-desktop"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 12,
                color: "var(--text-secondary)",
                letterSpacing: "0.05em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "var(--text-secondary)")
              }
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: "8px 20px", fontSize: 11 }}
          >
            Contacto
          </a>
        </div>

        {/* Mobile burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text-primary)",
            display: "none",
          }}
          aria-label="Toggle menu"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "20px 24px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: 13,
                color: "var(--text-secondary)",
                letterSpacing: "0.05em",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 13,
              color: "var(--text-secondary)",
              letterSpacing: "0.05em",
            }}
          >
            contacto
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
