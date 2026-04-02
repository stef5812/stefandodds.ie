// frontend/src/pages/Home.jsx

import { useEffect, useRef } from "react";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

export default function Home() {
  const heroRef = useRef(null);
  const expRef = useRef(null);

  useEffect(() => {
    const heroEl = heroRef.current;
    const expEl = expRef.current;
    const projEl = document.getElementById("projects");

    if (!heroEl || !expEl || !projEl) return;

    function onScroll() {
      const rect = projEl.getBoundingClientRect();

      if (rect.bottom <= window.innerHeight) {
        heroEl.style.opacity = "0";
        expEl.style.opacity = "1";
      } else {
        heroEl.style.opacity = "1";
        expEl.style.opacity = "0";
      }
    }

    // initial state
    heroEl.style.opacity = "1";
    expEl.style.opacity = "0";
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />

      <main className="relative">
        {/* Fixed background layers */}
        <div className="fixed inset-0">
          <div
            ref={heroRef}
            className="absolute inset-0 transition-opacity duration-700"
          >
            <Hero />
          </div>

          <div
            ref={expRef}
            className="absolute inset-0 transition-opacity duration-700"
          >
            <Experience />
          </div>
        </div>

        {/* Scrolling content */}
        <div className="relative z-20 mt-[100svh] h-[220svh]">
          <Projects />
        </div>

        <div className="relative z-20">
          <Contact />
        </div>
      </main>
    </>
  );
}