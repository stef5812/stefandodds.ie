import Container from "../layout/Container";
import windImg from "../../assets/images/wind.jpeg";

function Role({ years, title, org, extra }) {
  return (
    <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-base font-semibold text-white">
          {title} <span className="text-white/70">• {org}</span>
        </h3>
        <p className="text-sm text-white/60">{years}</p>
      </div>
      {extra ? <p className="mt-2 text-sm leading-relaxed text-white/75">{extra}</p> : null}
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-zinc-950 py-20">
      {/* Subtle background image */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <img src={windImg} alt="" className="h-full w-full object-cover" />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950/70 to-zinc-950" />

      <Container>
        <div className="relative grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-zinc-400">Experience</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white">
              A lifetime of experience building and supporting software
            </h2>

            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Over 15 years in software development (including the City of London),
              with strengths across CRM administration, database management, reporting,
              and full stack development. I build systems that solve operational problems —
              and I’m comfortable owning them end-to-end in production.
            </p>

            <ul className="mt-6 space-y-2 text-sm text-zinc-300">
              <li>• Full stack delivery: React/Vite → Node/Express → PostgreSQL/Prisma</li>
              <li>• Production operations: Docker, PM2, Nginx, Cloudflare</li>
              <li>• Data & reporting: structured models, analytics, practical dashboards</li>
              <li>• Calm problem-solving in real-world environments</li>
            </ul>

            <p className="mt-6 text-sm text-zinc-400">
              Trailblazer: <span className="text-white/80">27 badges</span> •{" "}
              <span className="text-white/80">16,175 points</span>
            </p>
          </div>

          <div className="relative lg:col-span-7">
            <div className="grid gap-4">
              <Role
                years="2022 – Present"
                title="Support Co-ordinator (CHO4)"
                org="ALONE"
                extra="Improved reporting efficiency, tackled technical backlog, and built/introduced practical systems to streamline processes."
              />
              <Role
                years="2018 – 2020"
                title="Carer (Live-in)"
                org="Helping Hands"
                extra="Built resilience, communication, and responsibility — skills that translate directly into supporting people and systems under pressure."
              />
              <Role
                years="2007 – 2014"
                title="Park Manager (CQP Certified)"
                org="ValAventure / Acro Branche"
                extra="Operations leadership with public safety and rescue training — strong real-world risk awareness and decision-making."
              />
              <Role
                years="2004 – 2018"
                title="Full Stack Developer (Contract) • IT Consultant"
                org="Foxweb.fr"
                extra="Delivered and maintained business systems across multiple clients and domains — full lifecycle work from build to support."
              />
              <Role
                years="1991 – 2004"
                title="Software Developer (Contract) • Director"
                org="Activate-IT Solutions"
                extra="Long-term development and delivery of management tools, data systems, and custom software solutions."
              />
            </div>

            <div className="mt-6 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
              <p className="text-sm font-medium text-white">City of London highlights</p>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Compiled Quarterly Reports for International Data Corporation (IDC),
                building strong analytical habits and a practical, data-driven approach to
                software and reporting.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
