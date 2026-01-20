'use client'

import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import type { Engine } from 'tsparticles-engine'
import { loadSlim } from 'tsparticles-slim'

export default function SectionParticles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: 'transparent' },
        fpsLimit: 60,
        particles: {
          number: {
            value: 40,
            density: { enable: false }
          },
          color: { value: '#a855f7' }, // violet
          opacity: {
            value: 0.15
          },
          size: {
            value: 2,
            random: true
          },
          move: {
            enable: true,
            speed: 0.4,
            direction: 'none',
            outModes: { default: 'out' }
          },
          links: {
            enable: true,
            distance: 120,
            color: '#a855f7',
            opacity: 20,
            width: 1
          }
        },
        detectRetina: true
      }}
      className="absolute inset-0 -z-10"
    />
  )
}
