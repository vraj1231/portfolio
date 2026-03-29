import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { About } from './About'

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useFrame: vi.fn(),
}))
vi.mock('../three/DataSphere', () => ({ DataSphere: () => null }))

describe('About', () => {
  it('renders name and bio', () => {
    render(<About />)
    expect(screen.getByText(/Vraj Mistry/i)).toBeInTheDocument()
  })

  it('renders value tags', () => {
    render(<About />)
    expect(screen.getByText('Builder')).toBeInTheDocument()
    expect(screen.getByText('Data-Driven')).toBeInTheDocument()
    expect(screen.getByText('AI-First')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<About />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(4)
  })
})
