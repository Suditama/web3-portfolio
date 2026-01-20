'use client'

import Image from 'next/image'
import TypingText from './TypingText'
import WalletButton from './WalletButton'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* cinematic background */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-purple-900/30 via-black to-cyan-500/20" />
      <div className="absolute inset-0 -z-10" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-16 min-h-screen"
      >
        {/* avatar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* glow pulse */}
          <motion.div
            animate={{
              boxShadow: [
                '0 0 20px rgba(168,85,247,0.4)',
                '0 0 40px rgba(168,85,247,0.8)',
                '0 0 20px rgba(168,85,247,0.4)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            className="rounded-full"
          >
            <Image
              src="/Screenshot_2025-12-02-18-26-45-96_dba69a5e82e939c3ddef13f99a115ca3.jpg"
              alt="profile"
              width={600}
              height={600}
              className="
                w-60 h-60 rounded-full object-cover
                border-4 border-purple-400
              "
            />
          </motion.div>
        </motion.div>

        {/* text */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="w-full text-2xl font-bold text-purple-400">
            <TypingText
              texts={[
                'Suditamaaaa',
                'im Veryy Stuningggg',
                'Absolute Cinemaa!!!!',
                'Yooo Welcomeeee !!!',
              ]}
            />
          </h1>

          <h1 className="mt-2 text-4xl font-bold text-white">
            I Build wallet-connected apps, NFT dashboards{' '}
            <span className="text-purple-400">Web3.</span>
          </h1>

          <p className="mt-4 text-gray-400">
            Developer • Smart Contract • Solidity
          </p>

          <div className="py-4" />
          <WalletButton />
        </motion.div>
      </motion.div>
    </section>
  )
}
