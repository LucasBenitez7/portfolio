"use client";

import { useReveal } from "./hooks/useReveal";
import Nav      from "./components/Nav";
import Hero     from "./components/Hero";
import About    from "./components/About";
import Projects from "./components/Projects";
import Stack    from "./components/Stack";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

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
