// frontend/src/components/layout/Header.jsx

import { useEffect, useRef, useState } from "react";
import Container from "./Container";

import LogoMark from "../../assets/images/logo-green.png";
import LogoAI from "../../assets/images/banner.png";

function getEnvLinks() {
  const isLocal =
    typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");

  if (isLocal) {
    return {
      apps: [
        { label: "Recipe App", href: "http://localhost:5174/recipe-app/" },
        { label: "HalfYourBook", href: "http://localhost:5175/halfyourbook/" },
        { label: "Blog", href: "http://localhost:5176/" },
        { label: "Service Locator", href: "http://localhost:5173/" },
      ],
      users: [
        {
          label: "User Login",
          href: "http://localhost:3001/login?from=portfolio&next=/menu",
        },
        {
          label: "Register",
          href: "http://localhost:3001/register?from=portfolio&next=/menu",
        },
      ],
    };
  }

  return {
    apps: [
      { label: "Recipe App", href: "https://stefandodds.ie/recipe-app/" },
      { label: "HalfYourBook", href: "https://stefandodds.ie/halfyourbook/" },
      { label: "Blog", href: "https://stefandodds.ie/blog-app/" },
      {
        label: "Service Locator",
        href: "https://stefandodds.ie/service-locator/",
      },
    ],
    users: [
      {
        label: "User Login",
        href: "https://auth.stefandodds.ie/login?from=portfolio&next=/menu",
      },
      {
        label: "Register",
        href: "https://auth.stefandodds.ie/register?from=portfolio&next=/menu",
      },
    ],
  };
}

function AdminDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const { apps, users } = getEnvLinks();

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="true"
        className="rounded-full bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md ring-1 ring-green-400/70 transition-all duration-300 hover:-translate-y-0.5 hover:from-green-600 hover:to-green-700 hover:shadow-[0_0_14px_rgba(34,197,94,0.45)]"
      >
        Admin <span className="ml-1">▾</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/95 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-zinc-200/70 backdrop-blur-md">
          <div className="px-4 pb-2 pt-3">
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">
              Apps
            </p>
          </div>

          {apps.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-green-50 hover:text-green-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <div className="mx-4 my-2 border-t border-zinc-200" />

          <div className="px-4 pb-2 pt-1">
            <p className="text-xs font-bold uppercase tracking-wide text-zinc-400">
              Users
            </p>
          </div>

          {users.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-green-50 hover:text-green-700"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/70 backdrop-blur-xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500/35 to-transparent" />

      <Container>
        <div className="flex flex-col items-center gap-4 py-3 md:flex-row md:items-center md:justify-between md:gap-6">
          <div className="flex items-center justify-center md:justify-start">
            <img
              src={LogoMark}
              alt="SD Logo"
              className="h-12 w-auto select-none md:h-14"
              draggable="false"
            />
          </div>

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

              <AdminDropdown />
            </nav>
          </div>

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