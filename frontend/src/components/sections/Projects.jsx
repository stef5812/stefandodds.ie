import Container from "../layout/Container";
import ProjectCard from "./ProjectCard";

import recipeImg from "../../assets/images/recipe-header.jpg";
import libraryImg from "../../assets/images/library-bg.png";
import serviceLocatorImg from "../../assets/images/service-locator.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white py-20"
    >
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.08),transparent_28%),radial-gradient(circle_at_top_left,rgba(161,161,170,0.08),transparent_30%)]" />

      <Container>
        <div className="relative max-w-2xl">
          <p className="text-sm font-medium tracking-wide text-green-600">
            Projects
          </p>

          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
            Real applications,{" "}
            <span className="bg-gradient-to-r from-zinc-500 via-zinc-300 to-green-500 bg-clip-text text-transparent">
              built end to end
            </span>
          </h2>

          <p className="mt-4 text-base leading-relaxed text-zinc-600">
            These are not demos or tutorials. They are production systems,
            designed, built, deployed, and maintained with real users and real
            constraints.
          </p>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-green-500/35 to-transparent" />
        </div>

        <div className="relative mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
            title="HalfYourBook"
            description="A full publishing platform allowing authors to showcase large previews of their work, manage books, uploads, roles, and direct readers to external sales."
            stack={[
              "React",
              "Vite",
              "Node.js",
              "Express",
              "Prisma",
              "PostgreSQL",
              "Docker",
              "PM2",
              "Nginx",
              "Cloudflare",
            ]}
            href="https://stefandodds.ie/halfyourbook/"
            image={libraryImg}
          />

          <ProjectCard
            title="Recipe App"
            description="A structured recipe management system focused on clean data models, staged cooking steps, ingredient linking, and media handling."
            stack={[
              "React",
              "Node.js",
              "PostgreSQL",
              "Prisma",
              "Docker",
              "UX Design",
            ]}
            href="https://stefandodds.ie/recipe-app/"
            image={recipeImg}
          />

          <ProjectCard
            title="Service Locator"
            description="An interactive location-based resource finder built to help users quickly discover useful nearby services, with mapping, category filtering, and practical local search."
            stack={[
              "React",
              "Google Maps",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Prisma",
              "Docker",
              "Nginx",
            ]}
            href="https://stefandodds.ie/service-locator/"
            image={serviceLocatorImg}
          />
        </div>
      </Container>
    </section>
  );
}