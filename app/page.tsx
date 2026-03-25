"use client";

import { useReveal } from "@/app/hooks/useReveal";
import Nav from "@/app/components/layout/Nav";
import Hero from "@/app/components/sections/hero/Hero";
import About from "@/app/components/sections/about/About";
import Projects from "@/app/components/sections/projects/Projects";
import Stack from "@/app/components/sections/stack/Stack";
import Contact from "@/app/components/sections/contact/Contact";
import Footer from "@/app/components/layout/Footer";

export default function Page() {
  useReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
