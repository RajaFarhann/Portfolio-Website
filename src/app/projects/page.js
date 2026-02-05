import ProjectCard from "@/components/projects/projectCard"
import { projects } from "@/components/projects/projectsData"

export const metadata = {
  title: "Projects | Raja Muhammad Farhan",
}

export default function Projects() {
  return (
    <section className="relative z-10 min-h-screen">
      <div className="mb-12 text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-violet-600">Projects</h1>
        <p className="mt-4 text-gray-300">
          Some of the projects I have worked on
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
