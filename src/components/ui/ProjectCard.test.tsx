import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ProjectCard } from './ProjectCard'

const mockProject = {
  title: 'Test Project',
  description: 'A test description',
  stack: ['Python', 'SQL'],
  impact: 'Big impact',
  impactMetric: '2x faster',
}

describe('ProjectCard', () => {
  it('renders project title', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Test Project')).toBeInTheDocument()
  })

  it('renders impact metric', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('2x faster')).toBeInTheDocument()
  })

  it('renders all stack tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('Python')).toBeInTheDocument()
    expect(screen.getByText('SQL')).toBeInTheDocument()
  })
})
