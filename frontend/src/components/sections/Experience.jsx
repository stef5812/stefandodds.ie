import Container from "../layout/Container";
import windImg from "../../assets/images/wind.jpeg";

function Role({ years, title, org, extra }) {
  return (
    <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold text-white">
          {title} <span className="text-white/70">• {org}</span>
        </h3>
        <p className="text-sm text-white/60">{years}</p>
      </div>
      {extra ? (
        <p className="mt-2 text-sm leading-relaxed text-white/75">{extra}</p>
      ) : null}
    </div>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-[100svh] w-full transition-opacity duration-500"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={windImg}
          alt=""
          className="h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.10),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />
      </div>

      <Container>
        <div className="relative grid gap-12 pt-24 pb-24 lg:grid-cols-12 lg:items-start sm:pt-28 sm:pb-28">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-zinc-400">Experience</p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A long track record in software, systems, and applied
              problem-solving
            </h2>

            <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Over 15 years across full-stack systems, CRM platforms,
              reporting, deployment, production support, and practical AI
              integration.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-zinc-300">
              <li>• React / Vite → Node / Express → PostgreSQL / Prisma</li>
              <li>
                • AI integration with model-backed workflows and structured
                outputs
              </li>
              <li>• Docker, PM2, Nginx, deployment and debugging</li>
              <li>• Data modelling, reporting, and workflow design</li>
              <li>• Calm, practical problem solving in real environments</li>
            </ul>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-green-400/30 to-transparent" />
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4">
              <Role
                years="2022 – Present"
                title="Support Co-ordinator"
                org="ALONE"
                extra="Operational support, systems improvement, reporting, workflow development, and practical problem-solving in a live service environment."
              />
              <Role
                years="2018 – 2020"
                title="Carer"
                org="Helping Hands"
                extra="Hands-on work in demanding real-world settings, strengthening communication, empathy, reliability, and calm decision-making."
              />
              <Role
                years="2007 – 2014"
                title="Park Manager"
                org="ValAventure"
                extra="Operational management, responsibility, and leadership in a practical, safety-focused environment."
              />
              <Role
                years="2004 – 2018"
                title="Full Stack Developer"
                org="Foxweb.fr"
                extra="Designed and built web applications, backend systems, databases, and client-focused software solutions across a range of projects."
              />
              <Role
                years="1991 – 2004"
                title="Software Developer"
                org="Activate-IT"
                extra="Built strong commercial foundations in software development, databases, reporting, and technical delivery in professional environments."
              />
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm">
              <p className="text-sm font-medium text-white">
                City of London highlights
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Built strong analytical, database, reporting, and systems
                foundations through years of commercial software development in
                demanding environments — experience that still informs how I
                design, debug, and deliver software today.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}