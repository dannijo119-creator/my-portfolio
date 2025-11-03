'use client'

import { motion } from 'framer-motion'
import AnimatedBackground from './AnimatedBackground'

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[88vh] flex items-center relative"
    >
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
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
      </div>
    </section>
  )
}

export default Hero
