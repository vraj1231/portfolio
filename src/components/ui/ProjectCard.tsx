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

    // Holographic sheen
    const pct = (x / rect.width) * 100
    card.style.background = `
      linear-gradient(
        ${105 + rotateY}deg,
        rgba(0,212,255,0.05) 0%,
        rgba(13,27,53,1) ${pct - 20}%,
        rgba(168,85,247,0.08) ${pct}%,
        rgba(13,27,53,1) ${pct + 20}%
      )
    `
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
    card.style.background = ''
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-surface border border-cyan/10 rounded-xl p-6 flex flex-col gap-4 transition-[border-color] duration-300 hover:border-cyan/30 cursor-default"
      style={{ transition: 'transform 0.1s ease, border-color 0.3s ease' }}
    >
      {/* Impact badge */}
      {project.impactMetric && (
        <span className="self-start px-3 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold">
          {project.impactMetric}
        </span>
      )}

      <h3 className="text-text font-bold text-lg">{project.title}</h3>
      <p className="text-muted text-sm leading-relaxed flex-1">{project.description}</p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {project.stack.map(tech => (
          <span key={tech} className="text-xs font-mono text-purple bg-purple/10 border border-purple/20 px-2 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>

      {/* Link */}
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
