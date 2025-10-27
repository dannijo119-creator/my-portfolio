'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      href: 'https://github.com/adrienne-jones',
      color: 'hover:bg-gray-900 hover:text-white',
      bgColor: 'bg-gray-100 text-gray-800'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      href: 'https://linkedin.com/in/adrienne-jones',
      color: 'hover:bg-blue-600 hover:text-white',
      bgColor: 'bg-blue-100 text-blue-800'
    },
    { 
      name: 'Twitter', 
      icon: Twitter, 
      href: 'https://twitter.com/adrienne-jones',
      color: 'hover:bg-blue-400 hover:text-white',
      bgColor: 'bg-blue-100 text-blue-800'
    },
    { 
      name: 'Email', 
      icon: Mail, 
      href: 'mailto:dannijo119@gmail.com',
      color: 'hover:bg-red-500 hover:text-white',
      bgColor: 'bg-red-100 text-red-800'
    },
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <footer className="bg-muted/30 dark:bg-gray-800/50 border-t border-border dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Let's work together
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all duration-300 ${link.bgColor} ${link.color} shadow-sm hover:shadow-lg dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600`}
                  aria-label={`Visit ${link.name} profile`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  title={`Visit my ${link.name} profile`}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="col-span-1">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-border mt-8 pt-8 text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} Adrienne Jones. All rights reserved. Built with 
            <Heart className="w-4 h-4 text-red-500" />
            using Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer