"use client";

import { useState } from "react";
import Link from "next/link";
import { FiFolder, FiFileText, FiHome } from "react-icons/fi"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-tranparent backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold">
          Raja Farhan<span className="text-indigo-600">.</span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden gap-8 text-xl font-medium md:flex">
          {[
            { label: "Home", href: "/", icon: <FiHome size={20} /> },
            { label: "Projects", href: "/projects", icon: <FiFolder size={18} /> },
            { label: "Resume", href: "/resume", icon: <FiFileText size={18} /> },
          ].map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="
                  group relative flex items-center gap-2
                  after:absolute after:left-0 after:-bottom-1
                  after:h-1 after:w-0 after:bg-indigo-600
                  after:rounded-full after:transition-all after:duration-300
                  hover:after:w-full
                "
              >
                <span className="transition-transform group-hover:scale-110">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* BUTTON MOBILE */}
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </nav>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden">
          <ul className="flex flex-col gap-4 border-t border-zinc-800 bg-transparent px-6 py-6">
            <li>
              <Link onClick={() => setOpen(false)} href="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={() => setOpen(false)} href="/resume">
                Resume
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
