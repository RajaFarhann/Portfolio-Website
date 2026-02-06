"use client"

import { useEffect, useState } from "react"
import Hero from "../components/home/hero/hero";
import AboutMe from "@/components/home/aboutMe/aboutMe";
import Skills from "@/components/home/skillSet/skillSet";
import Tools from "@/components/home/tools/tools";
import Loader from "@/components/InitialLoader";
import Contact from "@/components/home/contact/contact";

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("homeLoaded")

    if (hasLoaded) {
      // Sudah pernah buka Home di tab ini
      setLoading(false)
    } else {
      // Pertama kali buka / refresh
      sessionStorage.setItem("homeLoaded", "true")

      const timer = setTimeout(() => {
        setLoading(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  if (loading) return <Loader />

  return (
    <div className="relative z-10">
      <Hero />
      <AboutMe />
      <Skills />
      <Tools />
      <Contact/>
    </div>
  );
}
