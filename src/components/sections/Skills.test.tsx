import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Skills } from './Skills'

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useFrame: vi.fn(),
}))
vi.mock('@react-three/drei', () => ({
  Text: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
}))
vi.mock('../three/SkillOrbit', () => ({ SkillOrbit: () => null }))

describe('Skills', () => {
  it('renders section heading', () => {
    render(<Skills />)
    expect(screen.getByText(/Skills/i)).toBeInTheDocument()
  })

  it('renders all three category names', () => {
    render(<Skills />)
    expect(screen.getByText('Data Engineering')).toBeInTheDocument()
    expect(screen.getByText('AI / ML')).toBeInTheDocument()
    expect(screen.getByText('Cloud & Platforms')).toBeInTheDocument()
  })
})
