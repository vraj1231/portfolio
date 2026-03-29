// src/components/sections/Hero.test.tsx
import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { Hero } from './Hero'

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  useFrame: vi.fn(),
  useThree: vi.fn(() => ({ size: { width: 800, height: 600 } })),
}))
vi.mock('../three/NeuralNet', () => ({ NeuralNet: () => null }))

describe('Hero', () => {
  it('renders name', () => {
    render(<Hero />)
    expect(screen.getByText(/Vraj Mistry/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/View My Work/i)).toBeInTheDocument()
    expect(screen.getByText(/Let's Connect/i)).toBeInTheDocument()
  })
})
