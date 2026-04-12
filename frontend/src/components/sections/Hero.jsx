import Container from "../layout/Container";
import codingImg from "../../assets/images/coding.webp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative md:fixed
        md:inset-0
        w-full
        overflow-y-auto md:overflow-hidden
        transition-opacity duration-500
        bg-white
      "
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={codingImg}
          alt=""
          className="h-full w-full object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-900/55 to-zinc-950/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.20),transparent_35%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_30%)]" />
      </div>

      <Container>
        <div className="relative max-w-6xl pt-24 pb-32 md:pb-24">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-start">
            <div>
              <p className="inline-block rounded-full border border-green-400/30 bg-gradient-to-r from-white/10 via-zinc-200/10 to-green-400/10 px-3 py-1 text-xs font-medium tracking-wide text-green-300 backdrop-blur-sm">
                Full Stack • Applied AI • Systems • Deployment
              </p>

              <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                I build{" "}
                <span className="bg-gradient-to-r from-white via-zinc-200 to-green-400 bg-clip-text text-transparent">
                  practical full-stack systems
                </span>{" "}
                and AI-powered features that solve real problems.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
                Over 15 years of experience designing, building, deploying, and
                supporting production systems. I work across frontend, backend,
                authentication, databases, APIs, hosting, and delivery
                pipelines, and integrate practical AI features into real
                applications — creating software that is functional, usable,
                maintainable, and ready for the real world.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "Node.js",
                  "Express",
                  "Python",
                  "PHP",
                  "PostgreSQL",
                  "MySQL",
                  "Prisma",
                  "REST APIs",
                  "Authentication",
                  "AI Integration",
                  "Gemini API",
                  "Prompt Design",
                  "Structured JSON",
                  "Nginx",
                  "PM2",
                  "Docker",
                  "VPS Deployment",
                  "GitHub",
                  "Tailwind CSS",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200 backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-white">15+ years</p>
                  <p className="mt-1 text-sm text-zinc-300">
                    Software development and technical problem-solving
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-white">
                    End-to-end
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    UI, backend, databases, auth, deployment, and support
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-white">
                    AI in practice
                  </p>
                  <p className="mt-1 text-sm text-zinc-300">
                    Real app features, workflows, and usable integrations
                  </p>
                </div>
              </div>

              <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-green-400/40 to-transparent" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                What I build
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <h3 className="text-base font-semibold text-white">
                    Full stack web applications
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-300">
                    Responsive frontends, secure backends, and database-driven
                    platforms built with modern frameworks and clean
                    architecture.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <h3 className="text-base font-semibold text-white">
                    AI-powered product features
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-300">
                    Practical AI integrations such as assisted writing,
                    structured content generation, and model-backed workflows
                    built into real applications with usable interfaces and
                    clean service layers.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <h3 className="text-base font-semibold text-white">
                    Authentication and multi-app systems
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-300">
                    Central auth, user roles, protected routes, shared login
                    flows, and scalable application integration.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <h3 className="text-base font-semibold text-white">
                    Hosting, deployment, and maintenance
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-zinc-300">
                    VPS hosting, Nginx, PM2, Docker, GitHub workflows,
                    debugging, and production support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}