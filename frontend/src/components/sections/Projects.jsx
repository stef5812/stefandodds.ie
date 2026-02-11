import Container from "../layout/Container";
import ProjectCard from "./ProjectCard";

import recipeImg from "../../assets/images/recipe-header.jpg";
import libraryImg from "../../assets/images/library-bg.png";
import serviceLocatorImg from "../../assets/images/map-app-project-bg.png";

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-20">
      <Container>
      <div className="mt-12 grid gap-8 md:grid-cols-2">
  {/* Featured project: full width */}
  <div className="md:col-span-2">
    <ProjectCard
      featured
      title="Integrated Service Locator & CRM Platform"
      description="An enterprise-ready service locator platform built with React, Node.js and PostgreSQL, designed to integrate live public datasets with CRM systems in real time. The application has been connected to Salesforce CRM using Apex (APX), demonstrating secure API integration and bidirectional data workflows. Features include custom SVG map markers, category toggles, Eircode search with automatic zoom, and click-to-view service details. The current public version is a demonstration build due to API usage costs, and the platform can be easily packaged as an Android mobile application."
      stack={[
        "React",
        "Vite",
        "@vis.gl/react-google-maps",
        "Google Maps JavaScript API",
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Salesforce Apex",
        "REST APIs",
        "Docker",
        "PM2",
        "Nginx",
        "Cloudflare",
      ]}
      href="https://stefandodds.ie/service-locator/"
      image={serviceLocatorImg}
    />
  </div>

  {/* Other projects: normal grid items */}
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
