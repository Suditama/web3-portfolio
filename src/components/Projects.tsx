'use client'

import { useEffect, useRef, useState } from 'react'

export default function Projects() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.25 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={ref}
      className="
        px-10 py-20
        min-h-[320px]
      "
    >
      {/* WRAPPER (ANIMATION ONLY HERE) */}
      <div
        className={`
          transition-[transform,opacity]
          duration-700 ease-out
          will-change-transform
          motion-safe:transform
          ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}
      >
        <h2 className="relative inline-block text-purple-400 text-2xl mb-6">
          Featured Project
          <span
            className="
              absolute left-0 -bottom-1 h-[2px] w-full
              bg-purple-400/60
              shadow-[0_0_12px_rgba(168,85,247,0.6)]
            "
          />
        </h2>

        <div
          className="
            max-w-xl rounded-xl
            border border-white/10
            bg-black/40 backdrop-blur
            p-6
            transition-transform duration-300
            hover:-translate-y-1
            will-change-transform
          "
        >
          <h3 className="text-white text-xl mb-2">
            Web3 Portfolio
          </h3>

          <p className="text-gray-400">
            Personal Web3 portfolio with wallet connection, animated UI,
            and floating contact dock.
          </p>
        </div>
      </div>
    </section>
  )
}
