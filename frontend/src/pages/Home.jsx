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
  
    // ✅ INITIAL STATE
    heroEl.style.opacity = "1";
    expEl.style.opacity = "0";
  
    function onScroll() {
      const rect = projEl.getBoundingClientRect();
  
      if (rect.bottom <= window.innerHeight) {
        // 🔥 Projects fully covering viewport
        console.log("stage1");
  
        heroEl.style.opacity = "0";
        expEl.style.opacity = "1";
  
      } else {
        // 🔄 Not fully covering yet
        console.log("stage0");
  
        heroEl.style.opacity = "1";
        expEl.style.opacity = "0";
      }
    }
  
    window.addEventListener("scroll", onScroll);
  
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />

      <main className="relative">

        {/* HERO (fixed layer) */}
        <div ref={heroRef}>
          <Hero />
        </div>

        {/* EXPERIENCE (fixed layer underneath Hero) */}
        <div ref={expRef}>
          <Experience />
        </div>

        {/* PROJECTS (scroll content) */}
        <div className="relative h-[220vh] mt-[100vh]">
          <Projects />
        </div>

        {/* CONTACT */}
        <Contact />

      </main>
    </>
  );
}