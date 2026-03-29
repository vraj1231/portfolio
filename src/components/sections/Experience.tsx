import { useRef } from 'react'
import { motion } from 'framer-motion'
import { experience } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'
import type { ExperienceEntry } from '../../data/content'

function ExperienceCard({ entry }: { entry: ExperienceEntry }) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -7
    const rotateY = ((x - cx) / cx) * 7
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`
    const pct = (x / rect.width) * 100
    card.style.background = `linear-gradient(${100 + rotateY}deg, rgba(0,212,255,0.08) 0%, rgba(13,27,53,1) ${pct - 20}%, rgba(168,85,247,0.10) ${pct}%, rgba(13,27,53,1) ${pct + 20}%)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    card.style.background = ''
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-surface border border-cyan/10 rounded-xl p-6 hover:border-cyan/30 cursor-default"
      style={{ transition: 'transform 0.12s ease, border-color 0.3s ease' }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 className="font-bold text-text text-lg leading-tight">{entry.title}</h3>
          <p className="text-cyan font-mono text-sm mt-1">{entry.company}</p>
        </div>
        <span className="text-muted text-xs font-mono whitespace-nowrap shrink-0">{entry.period}</span>
      </div>

      {entry.metrics && (
        <div className="flex gap-3 flex-wrap mb-4">
          {entry.metrics.map(m => (
            <span
              key={m.label}
              className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold"
            >
              {m.value}
            </span>
          ))}
        </div>
      )}

      <ul className="flex flex-col gap-2">
        {entry.bullets.map((b, bi) => (
          <li key={bi} className="text-muted text-sm flex gap-2">
            <span className="text-cyan mt-1 shrink-0">›</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex gap-2 flex-wrap mt-4">
        {entry.skills.map(s => (
          <span key={s} className="text-xs text-purple font-mono bg-purple/10 border border-purple/20 px-2 py-0.5 rounded">
            {s}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan font-mono text-sm tracking-widest uppercase mb-16 text-center"
        >
          — Experience —
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-transparent hidden md:block" />

          <div className="flex flex-col gap-16">
            {experience.map((entry, i) => (
              <motion.div
                key={entry.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? 'md:self-start md:pr-8' : 'md:self-end md:pl-8'
                }`}
              >
                {/* Timeline dot */}
                <div className={`hidden md:block absolute top-6 w-3 h-3 rounded-full bg-cyan glow-cyan ${
                  i % 2 === 0 ? '-right-[calc(2rem+6px)]' : '-left-[calc(2rem+6px)]'
                }`} />

                <ExperienceCard entry={entry} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
