'use client'

import { motion } from 'framer-motion'
import SectionParticles from '@/components/SectionParticles'

import {
  FaGasPump,
  FaBug,
  FaProjectDiagram,
  FaBolt
} from 'react-icons/fa'

const principles = [
  {
    icon: <FaGasPump />,
    title: 'Gas is confusing — UX should not',
    desc: 'Users shouldn’t think about gas limits, decimals, or fees. The interface should guide them safely.'
  },
  {
    icon: <FaBug />,
    title: 'Errors must be human-readable',
    desc: 'RPC errors are for developers. Users deserve clear messages and actionable feedback.'
  },
  {
    icon: <FaProjectDiagram />,
    title: 'Wallet connection is a state machine',
    desc: 'Connecting a wallet is not a button — it’s a flow with multiple states and edge cases.'
  },
  {
    icon: <FaBolt />,
    title: 'On-chain doesn’t have to feel slow',
    desc: 'With proper loading states, optimistic UI, and feedback, blockchain apps can feel responsive.'
  }
]

export default function HowIThinkSection() {
  return (
      <section className="relative py-24 overflow-hidden">
      {/* background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-800/10 via-purple-950/40 to-cyan-500/10" />

        <SectionParticles />
      <div className="max-w-5xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            How I think when building{' '}
            <span className="text-violet-400">Web3 apps</span>
          </h2>
          <p className="mt-4 text-violet-200/70 max-w-2xl mx-auto">
            My focus is not just making things work on-chain, but making them
            understandable, reliable, and usable for real people.
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
          className="mt-16 grid gap-6 md:grid-cols-2"
        >
          {principles.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className="
                relative bg-white/5 border border-white/10 rounded-xl p-6
                transition-all duration-300
                hover:border-violet-400/40
                shadow-[0_0_30px_-10px_rgba(139,92,246,0.35)]
              "
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />

              <div className="relative flex items-start gap-4">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="text-violet-400 text-xl mt-1"
                >
                  {item.icon}
                </motion.div>

                <div>
                  <h3 className="text-white font-medium">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-violet-200/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-14 text-center text-sm text-violet-300/60 italic"
        >
          “This shows how I think — not just what I build.”
        </motion.p>
      </div>
    </section>
  )
}
