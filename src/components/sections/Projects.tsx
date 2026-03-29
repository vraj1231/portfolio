import { motion } from 'framer-motion'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'

export function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan font-mono text-sm tracking-widest uppercase mb-12 text-center"
        >
          — Projects —
        </motion.h2>

        {/* Featured card — full width */}
        {featured.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="mb-6"
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}

        {/* Remaining cards — grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
