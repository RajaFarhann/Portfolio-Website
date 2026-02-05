"use client"

import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      init={particlesInit}
      className="absolute inset-0 -z-0"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: { value: 150 },
          color: { value: "#ffffff" },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.6,
            },
          },
          size: { value: { min: 0.5, max: 1 } },
          move: { enable: true, speed: 0.2 },
        },
      }}
    />
  )
}
