import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiArrowDown, HiDownload, HiPlay } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  const roles = ['Web Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker']
  
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Vedantraneopbhai', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/vedant-rane-9a1b38354?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
   
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    },
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-pink-600/30 rounded-full blur-[100px]"
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
            scale: [1.2, 1, 1.2],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-600/20 rounded-full blur-[80px]"
          animate={{
            x: [0, 50, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            {/* Greeting Badge */}
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <span className="px-4 py-2 rounded-full text-sm font-medium 
                            bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                            border border-purple-500/20 text-purple-300">
                👋 Welcome to my portfolio
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display mb-4"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Vedant</span>
            </motion.h1>

            {/* Animated Role */}
            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-400 font-medium">
                I'm a{' '}
                <span className="relative inline-block">
                  <TypeWriter words={roles} />
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              I craft exceptional digital experiences with clean, efficient code 
              and modern design principles. Turning ideas into 
              <span className="text-white"> beautiful reality</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 
                          bg-[length:200%_100%] rounded-full font-semibold text-white
                          shadow-lg shadow-purple-500/25 overflow-hidden"
                whileHover={{ scale: 1.05, backgroundPosition: 'right center' }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <HiPlay className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="#contact"
                className="relative px-8 py-4 rounded-full font-semibold text-white
                          border-2 border-transparent overflow-hidden"
                style={{
                  background: 'linear-gradient(#0a0a0f, #0a0a0f) padding-box, linear-gradient(135deg, #8b5cf6, #ec4899) border-box'
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <HiDownload className="w-5 h-5" />
                  Download CV
                </span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400
                            hover:text-white hover:bg-white/10 hover:border-purple-500/50
                            transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Avatar/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ padding: '20px' }}
              />
              
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 
                            rounded-full blur-3xl scale-110" />
              
              {/* Main Avatar Container */}
              <motion.div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden
                          bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-cyan-600/20
                          border border-white/10 shadow-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                {/* Placeholder Avatar with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-pink-900/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                  animate={{ x: ['-200%', '200%'] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              </motion.div>

              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-4 -right-4 p-4 rounded-2xl glass"
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <span className="text-3xl">⚛️</span>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -left-8 p-4 rounded-2xl glass"
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <span className="text-3xl">🎨</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 p-4 rounded-2xl glass"
                animate={{ x: [0, 10, 0], y: [0, -5, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
              >
                <span className="text-3xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <HiArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}

// TypeWriter Component for animated text
const TypeWriter = ({ words }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = words[currentWordIndex]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1))
        } else {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => (prev + 1) % words.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words])

  return (
    <span className="gradient-text font-semibold">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="inline-block w-0.5 h-8 bg-purple-500 ml-1 align-middle"
      />
    </span>
  )
}



export default Hero
