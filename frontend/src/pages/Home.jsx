import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import codingImg from "../assets/images/coding.webp";
import Projects from "../components/sections/Projects";
import Experience from "../components/sections/Experience";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}
