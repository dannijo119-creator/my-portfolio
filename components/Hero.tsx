"use client"
import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"

export default function Hero(){
  return (
    <section className="min-h-[88vh] flex items-center" id="home">
      <AnimatedBackground />
      <div className="max-w-5xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div initial={{opacity:0, y:30}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight" style={{background: 'linear-gradient(90deg,#7c3aed,#06b6d4)', WebkitBackgroundClip:'text', color:'transparent'}}>Adrienne Jones</h1>
          <p className="text-lg text-muted-300 max-w-xl">Creative-front-end developer building luxurious web experiences — motion, micro-interactions, and beautiful gradients.</p>
          <div className="flex gap-4">
            <a href="#projects" className="btn-accent px-5 py-3 rounded-xl shadow-lg">View Projects</a>
            <a href="#contact" className="border border-border px-5 py-3 rounded-xl neon-link">Contact Me</a>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, scale:0.96}} animate={{opacity:1, scale:1}} transition={{delay:0.2}} className="flex justify-center">
          {/* stylized card with avatar or mock device */}
          <div className="card-glass p-6 rounded-2xl w-full max-w-sm">
            <div className="h-56 bg-gradient-to-br from-accentViolet to-accentCyan rounded-xl" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
