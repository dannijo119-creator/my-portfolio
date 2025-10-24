'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Eye } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered System Analyzer',
      description: 'An intelligent system analysis tool that uses machine learning to identify bottlenecks, predict failures, and optimize performance across enterprise infrastructure.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'TensorFlow', 'Next.js', 'PostgreSQL', 'Docker'],
      github: 'https://github.com/adrienne-jones/ai-system-analyzer',
      live: 'https://ai-analyzer-demo.vercel.app',
      featured: true,
      stats: { stars: 67, views: 2100 },
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Business Intelligence Dashboard',
      description: 'A comprehensive BI dashboard that aggregates data from multiple sources, providing real-time insights and automated reporting for business stakeholders.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'D3.js', 'Python', 'MongoDB', 'Chart.js'],
      github: 'https://github.com/adrienne-jones/bi-dashboard',
      live: 'https://bi-dashboard-demo.vercel.app',
      featured: true,
      stats: { stars: 89, views: 3400 },
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      title: 'Process Automation Platform',
      description: 'A workflow automation platform that streamlines business processes using AI and machine learning to reduce manual tasks and improve efficiency.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'Python', 'Redis', 'AWS'],
      github: 'https://github.com/adrienne-jones/process-automation',
      live: 'https://automation-demo.vercel.app',
      featured: true,
      stats: { stars: 54, views: 1800 },
      gradient: 'from-green-500 to-emerald-600',
    },
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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

  const projectVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  }

  const ProjectCard = ({ project, isLarge = false }: { project: any, isLarge?: boolean }) => (
    <motion.div
      variants={projectVariants}
      className={`group relative overflow-hidden rounded-xl bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
        isLarge ? 'lg:col-span-2' : ''
      }`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Project Image/Placeholder */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
          <div className="text-center text-white">
            <div className="text-4xl mb-2">
              {project.title.includes('AI') ? '🤖' : project.title.includes('BI') ? '📊' : '⚙️'}
            </div>
            <p className="text-sm opacity-90">Project Screenshot</p>
          </div>
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View GitHub repository"
          >
            <Github size={20} className="text-gray-800" />
          </motion.a>
          <motion.a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="View live project"
          >
            <ExternalLink size={20} className="text-gray-800" />
          </motion.a>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star size={14} />
              <span>{project.stats.stars}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye size={14} />
              <span>{project.stats.views}</span>
            </div>
          </div>
        </div>
        
        <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            <ExternalLink size={16} />
            <span>Live Demo</span>
          </a>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="projects" className="py-20 bg-muted/30 dark:bg-gray-800/50">
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
            Featured Projects
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mb-8"
          ></motion.div>
          <motion.p
            variants={itemVariants}
            className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Here are some of my recent projects that showcase my expertise in system analysis, AI integration, and business intelligence solutions.
          </motion.p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <motion.a
            href="https://github.com/adrienne-jones"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects