import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Benítez — Full Stack Developer",
  description:
    "Full Stack Developer especializado en TypeScript, React, Next.js y NestJS. Proyectos en producción con Stripe, AWS EC2, Redis y testing exhaustivo.",
  keywords: [
    "Full Stack Developer",
    "TypeScript",
    "React",
    "Next.js",
    "NestJS",
    "Node.js",
  ],
  authors: [{ name: "Lucas Benítez", url: "https://lsbstack.com" }],
  creator: "Lucas Benítez",
  metadataBase: new URL("https://lsbstack.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://lsbstack.com",
    title: "Lucas Benítez — Full Stack Developer",
    description:
      "Full Stack Developer con proyectos en producción: e-commerce con Stripe y API REST verificada con k6 (500 VUs, 0% errores).",
    siteName: "Lucas Benítez",
    images: ["/photo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Benítez — Full Stack Developer",
    description:
      "Full Stack Developer con proyectos en producción: e-commerce con Stripe y API REST verificada con k6.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=JetBrains+Mono:wght@400;500;700&family=Outfit:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
