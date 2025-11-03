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
            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-foreground">
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

          {/* Right side - Avatar */}
          <div className="flex justify-center lg:justify-end">
            {!imageError ? (
              <div className="relative w-64 h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/avatar.png"
                  alt="Adrienne Jones"
                  fill
                  className="object-cover rounded-2xl"
                  priority
                  onError={() => setImageError(true)}
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
