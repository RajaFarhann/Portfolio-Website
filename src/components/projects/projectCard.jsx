import Image from "next/image"
import { FaGithub, FaLink  } from "react-icons/fa"

export default function ProjectCard({ project }) {
  return (
    <div className="group overflow-hidden rounded-2xl border-2 border-violet-600 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg shadow-md shadow-violet-600/50">

      {/* IMAGE */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
        <p className="mb-4 text-sm text-zinc-300">
          {project.description}
        </p>

        <div className="mb-4 flex flex-wrap gap-4">
        {project.tech.map((tech) => (
            <div
            key={tech.name}
            className="flex items-center gap-2 rounded-full bg-violet-600/20 px-3 py-1 text-xs text-violet-300 transition hover:scale-105"
            >
            <i className={`${tech.icon} text-base`} />
            <span>{tech.name}</span>
            </div>
        ))}
        </div>


        {/* ACTION BUTTONS (ALWAYS VISIBLE) */}
        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-violet-600 hover:text-white transition"
            >
              <FaGithub /> GitHub
            </a>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm hover:bg-violet-600 hover:text-white transition"
            >
              <FaLink  /> Link
            </a>
          )}
        </div>
      </div>
    </div>
  )
}