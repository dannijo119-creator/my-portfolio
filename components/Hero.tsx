'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="min-h-[88vh] flex items-center relative"
    >
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h1
              className="text-5xl lg:text-7xl font-extrabold leading-tight"
              style={{
                background: 'linear-gradient(90deg, #7c3aed, #06b6d4)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Adrienne Jones
            </h1>
            <p className="text-lg text-muted-300 max-w-xl">
              Creative-front-end developer building luxurious web experiences — motion, micro-interactions, and beautiful gradients.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="btn-accent px-5 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-gray-700 px-5 py-3 rounded-xl neon-link transition-all duration-300 hover:scale-105"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          {/* Right side - Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative rounded-full p-[3px] bg-gradient-accent">
                {!imageError ? (
                  <Image
                    src="/avatar.jpg"
                    alt="Adrienne Jones"
                    width={160}
                    height={160}
                    className="rounded-full object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-40 h-40 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary">
                    <span className="text-4xl font-bold text-white">AJ</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
