import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiLightningBolt, HiSparkles, HiHeart } from 'react-icons/hi'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { number: '2+', label: 'Years Experience', icon: HiLightningBolt },
    { number: '15+', label: 'Projects Completed', icon: HiCode },
    { number: '10+', label: 'Happy Clients', icon: HiHeart },
    { number: '100%', label: 'Dedication', icon: HiSparkles },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section id="about" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-pink-600/10 rounded-full blur-[100px]" />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="px-4 py-2 rounded-full text-sm font-medium 
                          bg-gradient-to-r from-purple-500/10 to-pink-500/10 
                          border border-purple-500/20 text-purple-300">
              Get to know me
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              About <span className="gradient-text">Me</span>
            </h2>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image/Visual */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Background Decorations */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                            rounded-3xl rotate-6"
                  animate={{ rotate: [6, 8, 6] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-purple-600/20 
                            rounded-3xl -rotate-3"
                  animate={{ rotate: [-3, -5, -3] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                {/* Main Card */}
                <div className="relative h-full rounded-3xl overflow-hidden glass border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-pink-900/30" />
                  
                  {/* Code-like Pattern */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                      className="space-y-4 font-mono text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-pink-400">const</span>
                        <span className="text-cyan-400">developer</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-400">{'{'}</span>
                      </div>
                      <div className="pl-4 space-y-2">
                        <div>
                          <span className="text-purple-400">name:</span>
                          <span className="text-green-400">"Vedant"</span>,
                        </div>
                        <div>
                          <span className="text-purple-400">role:</span>
                          <span className="text-green-400">"Web Developer"</span>,
                        </div>
                        <div>
                          <span className="text-purple-400">location:</span>
                          <span className="text-green-400">"Mumbai, India"</span>,
                        </div>
                        <div>
                          <span className="text-purple-400">passion:</span>
                          <span className="text-green-400">"Creating amazing web experiences"</span>,
                        </div>
                        <div>
                          <span className="text-purple-400">available:</span>
                          <span className="text-cyan-400">true</span>
                        </div>
                      </div>
                      <div className="text-yellow-400">{'}'}</div>
                    </motion.div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute top-4 right-4 flex gap-2"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Right - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Passionate about crafting{' '}
                <span className="gradient-text">digital experiences</span>
              </h3>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm a creative web developer with a strong foundation in front-end technologies. 
                My journey in tech started with curiosity about how websites work, and it has 
                evolved into a passion for building beautiful, functional digital products.
              </p>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                Currently pursuing Diploma in Computer Engineering at Vidyalankar Polytechnic, 
                I combine academic knowledge with practical experience to deliver exceptional results. 
                I believe in writing clean, efficient code and creating user-centric designs.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['Problem Solver', 'Team Player', 'Quick Learner', 'Detail Oriented'].map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 rounded-full text-sm font-medium
                              bg-white/5 border border-white/10 text-gray-300
                              hover:border-purple-500/50 transition-colors duration-300"
                  >
                    {trait}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="pt-6">
                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-purple-400 font-medium
                            hover:text-purple-300 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  Let's work together
                  <svg 
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="relative group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20 
                              rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-6 rounded-2xl glass border border-white/10 
                              group-hover:border-purple-500/30 transition-colors text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-purple-400" />
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
