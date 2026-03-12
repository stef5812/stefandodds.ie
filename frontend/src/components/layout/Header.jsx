// src/components/layout/Header.jsx
import Container from "./Container";

import LogoMark from "../../assets/images/logo-green.png";
import LogoAI from "../../assets/images/banner.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/35 to-transparent" />

      <Container>
        <div className="flex flex-col items-center gap-4 py-3 md:flex-row md:items-center md:justify-between md:gap-6">
          {/* LEFT */}
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={LogoMark}
              alt="SD Logo"
              className="h-12 w-auto select-none md:h-14"
              draggable="false"
            />
          </div>

          {/* CENTER */}
          <div className="flex w-full justify-center md:w-auto">
            <nav className="flex items-center gap-2 rounded-full border border-white/70 bg-white/55 px-2 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-zinc-200/70 backdrop-blur-md">
              <a
                href="#projects"
                className="rounded-full px-4 py-2 text-sm font-semibold text-green-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white hover:shadow-[0_0_12px_rgba(34,197,94,0.35)]"
              >
                Projects
              </a>

              <a
                href="#experience"
                className="rounded-full px-4 py-2 text-sm font-semibold text-green-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white hover:shadow-[0_0_12px_rgba(34,197,94,0.35)]"
              >
                Experience
              </a>

              <a
                href="#contact"
                className="rounded-full px-4 py-2 text-sm font-semibold text-green-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-600 hover:text-white hover:shadow-[0_0_12px_rgba(34,197,94,0.35)]"
              >
                Contact
              </a>

              <a
                href="http://localhost:5173/login?from=portfolio&next=/menu"
                className="rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md ring-1 ring-green-400/70 transition-all duration-300 hover:-translate-y-0.5 hover:from-green-600 hover:to-green-700 hover:shadow-[0_0_14px_rgba(34,197,94,0.45)]"
              >
                Admin
              </a>
            </nav>
          </div>

          {/* RIGHT */}
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={LogoAI}
              alt="AI"
              className="h-12 w-auto select-none md:h-16"
              draggable="false"
            />
          </div>
        </div>
      </Container>
    </header>
  );
}