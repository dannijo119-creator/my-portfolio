'use client'

import { motion } from 'framer-motion'

const PARTICLES = [
  { top: 6, left: 18, duration: 8, delay: 0 },
  { top: 18, left: 42, duration: 9.5, delay: 1.2 },
  { top: 12, left: 68, duration: 7.8, delay: 0.8 },
  { top: 28, left: 24, duration: 8.6, delay: 1.7 },
  { top: 34, left: 55, duration: 9.8, delay: 0.4 },
  { top: 42, left: 12, duration: 8.9, delay: 2.5 },
  { top: 52, left: 48, duration: 10.2, delay: 1.1 },
  { top: 64, left: 22, duration: 8.4, delay: 0.6 },
  { top: 72, left: 58, duration: 9.1, delay: 1.9 },
  { top: 84, left: 34, duration: 8.7, delay: 0.3 },
  { top: 14, left: 84, duration: 9.4, delay: 2.2 },
  { top: 46, left: 78, duration: 8.1, delay: 1.4 },
  { top: 68, left: 82, duration: 9.6, delay: 0.9 },
  { top: 54, left: 6, duration: 8.8, delay: 2.8 },
  { top: 32, left: 4, duration: 9.2, delay: 1.5 },
  { top: 8, left: 52, duration: 10.4, delay: 2.6 },
  { top: 26, left: 70, duration: 9.3, delay: 0.7 },
  { top: 60, left: 68, duration: 8.3, delay: 1.0 },
  { top: 78, left: 12, duration: 9.7, delay: 1.8 },
  { top: 88, left: 86, duration: 8.5, delay: 2.1 },
]

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[88vh] flex items-center relative"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight gradient-text-animated">
              Adrienne Jones
            </h1>
            <p className="text-lg text-muted-300 max-w-xl">
              Creative-front-end developer building luxurious web experiences — motion, micro-interactions, and beautiful gradients.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="bg-primary text-primary-foreground px-5 py-3 rounded-xl shadow-lg hover:bg-primary/90 transition-colors"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-gray-700 px-5 py-3 rounded-xl neon-link"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right side - Animated subtle background */}
          <div className="relative w-64 h-64 flex justify-center items-center">
            {/* Floating glowing particles */}
            {PARTICLES.map((particle, i) => (
              <motion.span
                key={i}
                className="absolute block w-1.5 h-1.5 rounded-full bg-primary/40"
                style={{
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                }}
                animate={{
                  y: [0, -60],
                  opacity: [0.2, 0.6, 0],
                  scale: [0.5, 1, 0.3],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  delay: particle.delay,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
