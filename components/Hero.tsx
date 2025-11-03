'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-background text-textMain"
    >
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        whileHover={{ scale: 1.05, rotate: 3 }}
        className="mb-6"
      >
        <div className="relative w-40 h-40 rounded-full p-[3px] bg-gradient-accent">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary">
            {!imageError ? (
              <Image
                src="/avatar.png"
                alt="Adrienne Jones"
                fill
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary to-secondary">
                <span className="text-4xl font-bold text-white">AJ</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Name & Tagline */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold tracking-tight mb-2"
      >
        Hi, I'm <span className="text-primary">Adrienne Jones</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-textMuted max-w-lg"
      >
        I build futuristic, responsive, and interactive web experiences.
      </motion.p>
    </section>
  )
}

export default Hero
