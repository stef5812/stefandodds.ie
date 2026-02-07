// 1) Create: src/components/layout/Header.jsx
// Simple sticky header with anchor links to Projects / Experience / Contact.
import Container from "./Container";
import Logo from "../../assets/images/new-logo2.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur ring-1 ring-black/5">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a
            href="#top"
            className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-100"
          >
            <img
              src={Logo}
              alt="Stefan Dodds logo"
              className="h-9 w-9 opacity-90"
            />

            <span className="relative">
              Stefan Dodds
              {/* subtle brand underline */}
              <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-emerald-500 transition-all duration-300 group-hover:w-full" />
            </span>
          </a>

          {/* Nav */}
          <nav className="flex items-center gap-1">
            <a
              href="#projects"
              className="rounded-full px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="rounded-full px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="rounded-full px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
            >
              Contact
            </a>
          </nav>
        </div>
      </Container>
    </header>
  );
}
