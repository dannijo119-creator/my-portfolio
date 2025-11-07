'use client'

import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'
import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="relative p-2 rounded-lg bg-card hover:bg-accent transition-colors duration-300 border border-border">
        <div className="w-6 h-6 flex items-center justify-center">
          <Sun size={18} className="text-yellow-500" />
        </div>
      </div>
    )
  }
  
  const { theme, toggleTheme } = useTheme()
  const currentTheme = theme

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-card hover:bg-accent transition-colors duration-300 border border-border"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        className="relative w-6 h-6"
        initial={false}
        animate={{ rotate: currentTheme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ 
            opacity: currentTheme === 'light' ? 1 : 0,
            scale: currentTheme === 'light' ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          <Sun size={18} className="text-yellow-500" />
        </motion.div>
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ 
            opacity: currentTheme === 'dark' ? 1 : 0,
            scale: currentTheme === 'dark' ? 1 : 0.8
          }}
          transition={{ duration: 0.2 }}
        >
          <Moon size={18} className="text-blue-400" />
        </motion.div>
      </motion.div>
    </motion.button>
  )
}

export default ThemeToggle
