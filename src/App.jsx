import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Journey from './components/Journey'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import CustomCursor from './components/CustomCursor'
import ParticleBackground from './components/ParticleBackground'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time for assets
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Custom Cursor - Hidden on mobile */}
            <div className="hidden lg:block">
              <CustomCursor />
            </div>
            
            {/* Noise Texture Overlay */}
            <div className="noise" />
            
            {/* Particle Background */}
            <ParticleBackground />
            
            {/* Main Content */}
            <Navbar />
            <main>
              <Hero />
              <About />
              <Skills />
              <Journey />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App
