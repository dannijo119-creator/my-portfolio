'use client'

import Image from 'next/image'
import { useState } from 'react'

const Hero = () => {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="min-h-[88vh] flex items-center relative"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left side - Content */}
          <div className="space-y-6">
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
                className="btn-accent px-5 py-3 rounded-xl shadow-lg"
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

          {/* Right side - Avatar */}
          <div className="flex justify-center lg:justify-end">
            {!imageError ? (
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/avatar.png"
                  alt="Adrienne Jones"
                  fill
                  className="object-cover"
                  priority
                  onError={() => setImageError(true)}
                />
              </div>
            ) : (
              <div className="w-64 h-64 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg">
                <span className="text-5xl font-bold text-white">AJ</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
