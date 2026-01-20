'use client'

import { motion } from 'framer-motion'

export default function About() {
    return (
        <section className="relative px-10 py-24 overflow-hidden">
            {/* subtle background glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-800/10 via-purple-950/30 to-transparent" />

            <div className="max-w-3xl">
                {/* heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="relative text-purple-400 text-2xl mb-6 inline-block"
                >
                    About Me
                    <span
                        className="
              absolute left-0 -bottom-1 h-[2px] w-full
              bg-purple-400
              drop-shadow-[0_0_6px_rgba(168,85,247,0.8)]
            "
                    />
                </motion.h2>

                {/* paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="max-w-2xl text-gray-400 leading-relaxed"
                >
                    I focus on building usable Web3 interfaces—from wallet connection, contract interaction, to clean UI for non-crypto users.
                </motion.p>
            </div>
        </section>
    )
}