"use client";

import Image from "next/image";
import { useTypewriter } from "../hooks/useTypewriter";
import { IconArrow } from "./icons";

export default function Hero() {
  const { display: typed, showCursor } = useTypewriter(
    "Full Stack Developer",
    80,
  );

  return (
    <section
      className="hero-grid flex flex-col items-start justify-center"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: 0,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glows */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          left: "5%",
          width: 280,
          height: 280,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(16,185,129,0.025) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 24px",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: 80,
          alignItems: "center",
        }}
        className="hero-layout"
      >
        {/* Texto */}
        <div>
          <h1
            className="animate-fade-up delay-100"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(3.5rem, 7vw, 6rem)",
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              marginBottom: 4,
            }}
          >
            Lucas
          </h1>
          <h1
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "clamp(3.5rem, 7vw, 6rem)",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "var(--accent)",
              fontStyle: "italic",
              marginBottom: 32,
            }}
          >
            Benítez
          </h1>

          <div
            className="animate-fade-up delay-300"
            style={{
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 18,
              color: "var(--text-secondary)",
              letterSpacing: "0.06em",
              marginBottom: 40,
              minHeight: 28,
            }}
          >
            {typed}
            {showCursor && <span className="typewriter-cursor" />}
          </div>

          <div
            className="animate-fade-up delay-500"
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <a href="#projects" className="btn-primary">
              Ver proyectos <IconArrow />
            </a>
            <a href="#contact" className="btn-ghost">
              Contactar
            </a>
          </div>
        </div>

        {/* Foto */}
        <div className="animate-fade-up delay-300 hero-photo">
          <div className="photo-ring" style={{ width: 220, height: 220 }}>
            <div
              className="hero-photo-img"
              style={{
                width: 220,
                height: 220,
                borderRadius: "50%",
                overflow: "hidden",
                position: "relative",
                border: "2px solid var(--bg)",
              }}
            >
              <Image
                src="/photo.png"
                alt="Lucas Benítez"
                fill
                sizes="(max-width: 768px) 220px, 220px"
                style={{ objectFit: "cover", objectPosition: "center top", }}
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-layout {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
            padding: 60px 24px !important;
          }
          .hero-photo {
            order: -1;
            justify-self: center;
          }
          .hero-photo .photo-ring,
          .hero-photo .hero-photo-img {
            width: 200px !important;
            height: 200px !important;
          }
        }
      `}</style>
    </section>
  );
}
