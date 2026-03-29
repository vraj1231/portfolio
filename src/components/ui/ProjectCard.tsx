import { useRef } from 'react'
import type { Project } from '../../data/content'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -8
    const rotateY = ((x - cx) / cx) * 8
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(8px)`

    const pct = (x / rect.width) * 100
    card.style.background = project.featured
      ? `linear-gradient(${105 + rotateY}deg, rgba(0,212,255,0.12) 0%, rgba(13,27,53,1) ${pct - 20}%, rgba(168,85,247,0.15) ${pct}%, rgba(13,27,53,1) ${pct + 20}%)`
      : `linear-gradient(${105 + rotateY}deg, rgba(0,212,255,0.05) 0%, rgba(13,27,53,1) ${pct - 20}%, rgba(168,85,247,0.08) ${pct}%, rgba(13,27,53,1) ${pct + 20}%)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    card.style.background = ''
  }

  if (project.featured) {
    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-surface border-2 border-cyan/40 rounded-xl p-8 flex flex-col gap-4 cursor-default relative overflow-hidden"
        style={{
          transition: 'transform 0.1s ease, border-color 0.3s ease',
          boxShadow: '0 0 32px rgba(0,212,255,0.15), 0 0 8px rgba(0,212,255,0.08)',
        }}
      >
        {/* Featured glow bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan via-purple to-cyan" />

        {/* Badges row */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan to-purple text-bg text-xs font-mono font-bold">
            Published Research
          </span>
          {project.impactMetric && (
            <span className="px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold">
              {project.impactMetric}
            </span>
          )}
        </div>

        <h3 className="text-text font-bold text-xl gradient-text">{project.title}</h3>
        <p className="text-muted text-sm leading-relaxed flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.stack.map(tech => (
            <span key={tech} className="text-xs font-mono text-cyan bg-cyan/10 border border-cyan/20 px-2 py-0.5 rounded">
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start px-4 py-2 rounded-lg bg-gradient-to-r from-cyan to-purple text-bg text-xs font-mono font-bold hover:opacity-90 transition-opacity"
          >
            Read Publication →
          </a>
        )}
      </div>
    )
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-surface border border-cyan/10 rounded-xl p-6 flex flex-col gap-4 transition-[border-color] duration-300 hover:border-cyan/30 cursor-default"
      style={{ transition: 'transform 0.1s ease, border-color 0.3s ease' }}
    >
      {project.impactMetric && (
        <span className="self-start px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold">
          {project.impactMetric}
        </span>
      )}

      <h3 className="text-text font-bold text-lg">{project.title}</h3>
      <p className="text-muted text-sm leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map(tech => (
          <span key={tech} className="text-xs font-mono text-purple bg-purple/10 border border-purple/20 px-2 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan text-xs font-mono hover:underline self-start"
        >
          View Publication →
        </a>
      )}
    </div>
  )
}
