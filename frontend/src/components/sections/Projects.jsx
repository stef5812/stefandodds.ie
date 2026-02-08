import Container from "../layout/Container";
import ProjectCard from "./ProjectCard";

import recipeImg from "../../assets/images/recipe-header.jpg";
import libraryImg from "../../assets/images/library-bg.png";
import serviceLocatorImg from "../../assets/images/service-bg.jpg";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      <Container>
        <div className="max-w-2xl">
        <p className="text-sm font-medium text-zinc-500">Projects</p>


          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
            Real applications,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text text-transparent">
                built end to end
            </span>
            </h2>

            <p className="mt-4 text-base leading-relaxed text-zinc-600">

            These are not demos or tutorials. They are production systems,
            designed, built, deployed, and maintained with real users and real
            constraints.
          </p>

          <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">

        <ProjectCard
            title="Service Locator"
            description="An interactive service-locator map for Ireland, allowing users to find health, social, and community services by category. Features custom SVG map markers, category toggles, Eircode search with automatic zoom, and click-to-view service details."
            stack={[
              "React",
              "Vite",
              "@vis.gl/react-google-maps",
              "Google Maps JavaScript API",
              "Node.js",
              "Express",
              "PostgreSQL",
              "Prisma",
              "Docker",
              "PM2",
              "Nginx",
              "Cloudflare",
            ]}
            href="https://stefandodds.ie/service-locator/"   // adjust if needed
            image={serviceLocatorImg}                       // screenshot / hero image
          />

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
        </div>
      </Container>
    </section>
  );
}
