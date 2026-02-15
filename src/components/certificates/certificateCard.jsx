"use client"

import { useState } from "react"
import Image from "next/image"
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa"

export default function CertificateCard({ cert }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* CARD */}
      <div
        onClick={() => setOpen(true)}
        className="group cursor-pointer overflow-hidden rounded-2xl border-2 border-violet-600 bg-white/5 backdrop-blur transition hover:-translate-y-1 hover:border-violet-500 hover:shadow-lg shadow-md shadow-violet-600/50"
      >
        <div className="relative h-40 overflow-hidden">
          <Image
            src={cert.image}
            alt={cert.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-5">
          <h3 className="text-lg font-semibold">{cert.title}</h3>
          <p className="text-sm text-zinc-300">
            {cert.issuer} • {cert.date}
          </p>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 lg:-top-15 -right-1 lg:-right-10 rounded-full bg-violet-600 p-3 text-white hover:bg-violet-500 transition"
            >
              <FaTimes />
            </button>

            {/* IMAGE */}
            <div className="relative w-full h-[50vh]">
              <Image
                src={cert.image}
                alt={cert.title}
                fill
                className="object-contain rounded-xl"
              />
            </div>

            {/* LINK BUTTON */}
            {cert.link && (
              <a
                href={cert.link}
                target="_blank"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 text-white transition hover:bg-violet-500"
              >
                View Original <FaExternalLinkAlt size={14} />
              </a>
            )}
          </div>
        </div>
      )}
    </>
  )
}
