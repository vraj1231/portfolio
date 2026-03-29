import { motion } from 'framer-motion'
import { experience } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'

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

                {/* Card */}
                <div className="bg-surface border border-cyan/10 rounded-xl p-6 hover:border-cyan/30 transition-colors">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-bold text-text text-lg leading-tight">{entry.title}</h3>
                      <p className="text-cyan font-mono text-sm mt-1">{entry.company}</p>
                    </div>
                    <span className="text-muted text-xs font-mono whitespace-nowrap shrink-0">{entry.period}</span>
                  </div>

                  {/* Metrics */}
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

                  {/* Bullets */}
                  <ul className="flex flex-col gap-2">
                    {entry.bullets.map((b, bi) => (
                      <li key={bi} className="text-muted text-sm flex gap-2">
                        <span className="text-cyan mt-1 shrink-0">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills */}
                  <div className="flex gap-2 flex-wrap mt-4">
                    {entry.skills.map(s => (
                      <span key={s} className="text-xs text-purple font-mono bg-purple/10 border border-purple/20 px-2 py-0.5 rounded">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
