'use client'

import { useMemo } from 'react'
import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeBackground() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'


  // Generate clouds with fixed positions
  const clouds = useMemo(() => {
    return Array.from({ length: 5 }).map((_, i) => {
      const seed = i * 0.5
      return {
        id: i,
        left: 20 + i * 20,
        top: 15 + Math.sin(i) * 10,
        width: 60 + (seed % 1) * 40,
        height: 40 + (seed % 1) * 30,
        delay: i * 2,
        duration: 15 + i * 2,
      }
    })
  }, [])

  // Generate static star positions for dark mode background
  const stars = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 2.5 + 0.8,
      duration: 2.5 + Math.random() * 2.5,
      delay: Math.random() * 4,
    }))
  }, [])

  return (
    <>
      <div 
        className="fixed inset-0 -z-20 overflow-hidden pointer-events-none"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -20,
        }}
      >
      {isDark ? (
        // Starry Night Video Background (Dark Mode)
        <>
          {/* Starry gradient backdrop */}
          <div 
            className="absolute inset-0"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              width: '100%',
              height: '100%',
              minHeight: '100vh',
              background: 'linear-gradient(180deg, #040b1f 0%, #081132 45%, #02040a 100%)',
            }}
          >
            {/* Radial glow */}
            <div
              className="absolute inset-0"
              style={{
                background: 'radial-gradient(circle at 20% 20%, rgba(90, 130, 255, 0.25), transparent 55%)',
                mixBlendMode: 'screen',
              }}
            />
            {/* Star field */}
            <div className="absolute inset-0">
              {stars.map((star) => (
                <span
                  key={star.id}
                  className="absolute rounded-full bg-white"
                  style={{
                    top: `${star.top}%`,
                    left: `${star.left}%`,
                    width: `${star.size}px`,
                    height: `${star.size}px`,
                    opacity: 0.85,
                    animation: `twinkle ${star.duration}s ease-in-out infinite`,
                    animationDelay: `${star.delay}s`,
                  }}
                />
              ))}
            </div>
          </div>
          {/* Subtle dark overlay to ensure text readability */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/20 pointer-events-none"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2,
            }}
          />
        </>
      ) : (
        // Sunny Background (Light Mode)
        <div 
          className="absolute inset-0 bg-gradient-to-b from-sky-300 via-blue-200 to-yellow-100"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            minHeight: '100vh',
          }}
        >
          {/* Sun */}
          <div className="absolute top-10 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-yellow-300 via-orange-300 to-yellow-400 opacity-95 shadow-2xl shadow-yellow-400/60" />
          <div className="absolute top-14 right-14 w-36 h-36 rounded-full bg-yellow-200 opacity-85" />
          <div className="absolute top-16 right-16 w-28 h-28 rounded-full bg-yellow-100 opacity-70" />
          
          {/* Clouds */}
          {clouds.map((cloud) => (
            <div
              key={cloud.id}
              className="absolute rounded-full bg-white opacity-60"
              style={{
                left: `${cloud.left}%`,
                top: `${cloud.top}%`,
                width: `${cloud.width}px`,
                height: `${cloud.height}px`,
                animation: `floatCloud ${cloud.duration}s ease-in-out infinite`,
                animationDelay: `${cloud.delay}s`,
              }}
            />
          ))}
          
          {/* Sun rays */}
          <div className="absolute top-0 left-0 w-full h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="absolute top-10 right-10 w-1 h-32 bg-gradient-to-b from-yellow-300/30 to-transparent origin-bottom"
                style={{
                  transform: `rotate(${i * 30}deg)`,
                  animation: `pulse ${2 + (i % 3) * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      )}
      </div>
    </>
  )
}

