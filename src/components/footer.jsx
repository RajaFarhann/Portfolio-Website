import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="border-t border-violet-900 bg-indigo-950/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-12 py-2 md:py-3 lg:py-4 sm:flex-row">
        {/* Left */}
        <p className="text-xs md:text-sm lg:text-base text-center">
          © {new Date().getFullYear()} Raja Muhammad Farhan Zahputra. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/raja-muhammad-farhan-zahputra"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-violet-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/RajaFarhann"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-violet-600"
            aria-label="GitHub"
          >
            <FaGithub className="text-xl" />
          </a>

          {/* GitHub */}
          <a
            href="https://www.instagram.com/raja.farhan"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-violet-600"
            aria-label="Instagram"
          >
            <AiFillInstagram className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  )
}
