'use client'

import { useState } from 'react'
import {
  FaWhatsapp,
  FaInstagram,
  FaBolt,
} from 'react-icons/fa'

const socials = [
  {
    name: 'WhatsApp',
    icon: FaWhatsapp,
    href: 'https://wa.me/6287880774859',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    href: 'https://www.instagram.com/suditamaaa/',
  },
]

export default function Web3ContactFab() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* EXPANDED ORBIT */}
      <div
        className={`
          mb-4 flex gap-3 px-4 py-3
          rounded-2xl
          bg-purple-950/60
          border border-violet-400/20
          shadow-[0_0_30px_-8px_rgba(139,92,246,0.45)]
          transition-all duration-300 ease-out
          ${open ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}
        `}
      >
        {socials.map((s, i) => {
          const Icon = s.icon
          return (
            <a
              key={i}
              href={s.href}
              target="_blank"
              aria-label={s.name}
              className="
                group relative flex h-11 w-11 items-center justify-center
                rounded-full
                bg-white/5
                border border-white/10
                text-violet-300
                transition-all duration-200
                hover:text-cyan-300
                hover:border-cyan-400/40
                hover:shadow-[0_0_16px_rgba(34,211,238,0.6)]
              "
            >
              <Icon className="text-lg group-hover:scale-110 transition-transform" />
            </a>
          )
        })}
      </div>

      {/* CORE NODE */}
      <button
        onClick={() => setOpen(!open)}
        className="
          relative flex h-14 w-14 items-center justify-center
          rounded-full
          bg-gradient-to-br from-violet-500 via-purple-600 to-cyan-500
          shadow-[0_0_28px_rgba(139,92,246,0.8)]
          transition-transform duration-300
          hover:scale-105
        "
      >
        {/* pulse ring */}
        <span
          className={`
            absolute inset-0 rounded-full
            animate-ping
            bg-violet-400/30
            ${open ? 'opacity-0' : 'opacity-100'}
          `}
        />

        <FaBolt
          className={`
            relative z-10 text-white text-xl
            transition-transform duration-300
            ${open ? 'rotate-45' : ''}
          `}
        />
      </button>
    </div>
  )
}
