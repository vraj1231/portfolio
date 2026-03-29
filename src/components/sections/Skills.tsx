import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import { SkillOrbit } from '../three/SkillOrbit'
import { skills } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan font-mono text-sm tracking-widest uppercase mb-4 text-center"
        >
          — Skills —
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* 3D orbit canvas */}
          <div className="h-[400px] md:h-[500px]">
            <Canvas camera={{ position: [0, 3, 10], fov: 55 }}>
              <Suspense fallback={null}>
                <SkillOrbit />
              </Suspense>
            </Canvas>
          </div>

          {/* Fallback / legend */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            {skills.map(cat => (
              <div key={cat.name}>
                <h3 className="font-bold text-sm mb-3 font-mono" style={{ color: cat.color }}>
                  {cat.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-xs font-mono border bg-surface"
                      style={{ borderColor: `${cat.color}40`, color: cat.color }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
