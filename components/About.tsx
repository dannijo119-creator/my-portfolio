'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Smartphone, Zap, Database, Cloud, Users, Award } from 'lucide-react'

const About = () => {
  const skills = [
    { name: 'System Analysis', icon: Code, description: 'Requirements gathering, Process mapping, Technical documentation', color: 'from-blue-500 to-cyan-500' },
    { name: 'AI & Machine Learning', icon: Zap, description: 'AI integration, Data analysis, Intelligent automation', color: 'from-purple-500 to-pink-500' },
    { name: 'Web Development', icon: Smartphone, description: 'Next.js, React, TypeScript, Modern frameworks', color: 'from-green-500 to-emerald-500' },
    { name: 'Data Analysis', icon: Database, description: 'SQL, Python, Data visualization, Reporting', color: 'from-yellow-500 to-orange-500' },
    { name: 'Technical Documentation', icon: Palette, description: 'System specs, User guides, Process documentation', color: 'from-red-500 to-rose-500' },
    { name: 'Cloud Technologies', icon: Cloud, description: 'AWS, Azure, Cloud architecture, DevOps', color: 'from-indigo-500 to-blue-500' },
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Code },
    { number: '3+', label: 'Years Experience', icon: Award },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '24/7', label: 'Support Available', icon: Zap },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-background dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            I'm a Technical Analyst with a passion for leveraging AI and modern web technologies to solve complex problems. 
            With expertise in system analysis and a keen eye for innovation, I bridge the gap between technology and business solutions.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-4">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With experience in technical analysis and a growing expertise in AI and Next.js development, 
                I've had the opportunity to work with diverse teams and analyze systems that impact business operations.
              </p>
              <p>
                I specialize in bridging the gap between technical requirements and business solutions, 
                using modern technologies like AI, Next.js, and data analysis tools. My approach combines 
                analytical thinking with innovative problem-solving.
              </p>
              <p>
                When I'm not analyzing systems, you can find me learning new AI technologies, building 
                with Next.js, or exploring how artificial intelligence can enhance business processes.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-card hover:bg-accent transition-colors duration-300"
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl font-semibold text-foreground mb-8">Skills & Expertise</h3>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  className="group relative overflow-hidden rounded-xl bg-card p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center mb-3">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
                      <skill.icon 
                        size={24} 
                        className="text-white" 
                      />
                    </div>
                    <h4 className="ml-3 font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{skill.description}</p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About