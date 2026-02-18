import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#journey' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 150) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass-dark shadow-lg shadow-purple-500/5' 
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-bold font-display">
                Vedant
                <span className="gradient-text">.</span>
              </span>
              <motion.span 
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300
                    ${activeSection === link.href.slice(1) 
                      ? 'text-white' 
                      : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {link.name}
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-white/5 rounded-lg -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
              
              {/* CTA Button */}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="ml-4 px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 
                          rounded-full text-sm font-semibold text-white
                          hover:shadow-lg hover:shadow-purple-500/25 
                          transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative z-50 p-2 text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <HiX className="w-6 h-6" />
              ) : (
                <HiMenu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#0a0a0f] border-l border-white/10"
            >
              <div className="flex flex-col pt-24 px-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-lg font-medium transition-all duration-300
                      ${activeSection === link.href.slice(1)
                        ? 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.a
                  href="#contact"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4 px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 
                            rounded-lg text-center font-semibold text-white"
                >
                  Let's Talk
                </motion.a>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <p className="mt-4 text-center text-sm text-gray-500">
                  © 2026 Vedant. All rights reserved.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
