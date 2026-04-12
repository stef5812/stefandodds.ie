import Container from "../layout/Container";
import ProjectCard from "./ProjectCard";

import recipeImg from "../../assets/images/recipe-header.jpg";
import libraryImg from "../../assets/images/library-bg.png";
import serviceLocatorImg from "../../assets/images/service-locator.png";
import blogImg from "../../assets/images/blog-bg.png";
import authImg from "../../assets/images/auth-bg.png";

export default function Projects() {
  return (
    <section
      id="projects"
      className="sticky min-h-screen z-30 bg-white opacity-100 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 bg-white" />

      <Container>
        <div className="relative max-w-2xl pt-24">
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
            These are working systems built around real workflows — from
            full-stack platforms and authentication architecture to practical AI
            features integrated into live applications.
          </p>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-green-500/35 to-transparent" />
        </div>

        <div className="relative mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
            title="HalfYourBook"
            description="Publishing platform with author tools, previews, and structured content workflows."
            stack={["React", "Node", "PostgreSQL", "Prisma"]}
            href="https://stefandodds.ie/halfyourbook/"
            image={libraryImg}
          />

          <ProjectCard
            title="Recipe App"
            description="Structured recipe platform designed for creation, organisation, and future AI-assisted recipe workflows."
            stack={["React", "Node", "PostgreSQL", "Prisma"]}
            href="https://stefandodds.ie/recipe-app/"
            image={recipeImg}
          />

          <ProjectCard
            title="Blog App"
            description="Multi-user blogging platform with AI-assisted editing, rewrite tools, and generated titles."
            stack={["React", "Express", "Prisma", "Gemini API"]}
            href="https://stefandodds.ie/blog-app/"
            image={blogImg}
          />

          <ProjectCard
            title="Standalone Auth"
            description="Central authentication and role system shared across multiple applications."
            stack={["Node", "Express", "PostgreSQL", "Auth"]}
            href="https://auth.stefandodds.ie/"
            image={authImg}
          />

          <ProjectCard
            title="Service Locator"
            description="Location-based service finder with mapped results, backend APIs, and workflow-focused design."
            stack={["React", "Maps", "Node", "REST API"]}
            href="https://stefandodds.ie/service-locator/"
            image={serviceLocatorImg}
          />
        </div>
      </Container>
    </section>
  );
}