import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaNodeJs, 
  FaGitAlt, FaFigma, FaDatabase 
} from 'react-icons/fa'
import { 
  SiTypescript, SiTailwindcss, SiMongodb, SiMysql, 
  SiCplusplus, SiVite 
} from 'react-icons/si'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Frontend',
      description: 'Building beautiful user interfaces',
      skills: [
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26', level: 95 },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', level: 90 },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', level: 85 },
        { name: 'React', icon: FaReact, color: '#61DAFB', level: 80 },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4', level: 85 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 70 },
      ],
    },
    {
      title: 'Backend',
      description: 'Server-side development',
      skills: [
        { name: 'Node.js', icon: FaNodeJs, color: '#339933', level: 80 },
        { name: 'Python', icon: FaPython, color: '#3776AB', level: 80 },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 70 },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 75 },
      ],
    },
    {
      title: 'Tools & Others',
      description: 'Development ecosystem',
      skills: [
        { name: 'Git', icon: FaGitAlt, color: '#F05032', level: 85 },
        { name: 'Figma', icon: FaFigma, color: '#F24E1E', level: 80 },
        { name: 'C++', icon: SiCplusplus, color: '#00599C', level: 75 },
        { name: 'Vite', icon: SiVite, color: '#646CFF', level: 80 },
         { name: 'C', icon: SiC, color: '#101bf2', level: 90 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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
    <section id="skills" className="relative py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
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
                          bg-gradient-to-r from-cyan-500/10 to-purple-500/10 
                          border border-cyan-500/20 text-cyan-300">
              My Expertise
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold font-display">
              Skills & <span className="gradient-text">Technologies</span>
            </h2>
            <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
              I've worked with a variety of technologies in web development. 
              Here's a quick overview of my technical skills.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-cyan-600/20 
                              rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card Content */}
                <div className="relative h-full p-8 rounded-3xl glass border border-white/10 
                              group-hover:border-purple-500/30 transition-all duration-300">
                  {/* Category Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-500 text-sm">{category.description}</p>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        className="relative"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <skill.icon 
                              className="w-5 h-5" 
                              style={{ color: skill.color }}
                            />
                            <span className="text-gray-300 font-medium">{skill.name}</span>
                          </div>
                          <span className="text-gray-500 text-sm">{skill.level}%</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ 
                              background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})` 
                            }}
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ 
                              duration: 1, 
                              delay: (categoryIndex * 0.2) + (skillIndex * 0.1),
                              ease: [0.22, 1, 0.36, 1]
                            }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Icons Floating Display */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 relative"
          >
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-white">Technologies I Work With</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: FaHtml5, color: '#E34F26', name: 'HTML5' },
                { icon: FaCss3Alt, color: '#1572B6', name: 'CSS3' },
                { icon: FaJs, color: '#F7DF1E', name: 'JavaScript' },
                { icon: FaReact, color: '#61DAFB', name: 'React' },
                { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind' },
                { icon: FaNodeJs, color: '#339933', name: 'Node.js' },
                { icon: FaPython, color: '#3776AB', name: 'Python' },
                { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
                { icon: FaGitAlt, color: '#F05032', name: 'Git' },
                { icon: FaFigma, color: '#F24E1E', name: 'Figma' },
              ].map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="group relative"
                  whileHover={{ y: -8, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute inset-0 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity"
                       style={{ backgroundColor: tech.color }} />
                  <div className="relative p-5 rounded-2xl bg-white/5 border border-white/10 
                                group-hover:border-white/20 transition-all duration-300">
                    <tech.icon 
                      className="w-10 h-10 transition-all duration-300" 
                      style={{ color: tech.color }}
                    />
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 
                                group-hover:opacity-100 transition-opacity duration-300
                                text-sm text-gray-400 whitespace-nowrap">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
