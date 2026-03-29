import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { DataSphere } from '../three/DataSphere'
import { Avatar } from '../ui/Avatar'
import { bio, links } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan font-mono text-sm tracking-widest uppercase mb-12 text-center"
        >
          — About Me —
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Avatar + 3D sphere */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="relative">
              <Avatar />
              {/* Orbiting sphere */}
              <div className="absolute -top-8 -right-8 w-24 h-24 pointer-events-none">
                <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
                  <Suspense fallback={null}>
                    <DataSphere />
                  </Suspense>
                </Canvas>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-4 flex-wrap justify-center">
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer"
                className="text-muted hover:text-cyan transition-colors text-sm font-mono">LinkedIn</a>
              <a href={links.github} target="_blank" rel="noopener noreferrer"
                className="text-muted hover:text-cyan transition-colors text-sm font-mono">GitHub</a>
              <a href={links.medium} target="_blank" rel="noopener noreferrer"
                className="text-muted hover:text-cyan transition-colors text-sm font-mono">Medium</a>
              <a href={`mailto:${links.email}`}
                className="text-muted hover:text-cyan transition-colors text-sm font-mono">Email</a>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold text-text">{bio.name}</h3>
            <p className="text-cyan font-mono text-sm tracking-wide">{bio.title}</p>
            <p className="text-muted leading-relaxed">{bio.about}</p>

            {/* Value tags */}
            <div className="flex gap-3 flex-wrap mt-2">
              {bio.tags.map(tag => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-cyan/30 text-cyan text-sm font-mono bg-cyan/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
