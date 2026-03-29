import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders all three project titles', () => {
    render(<Projects />)
    expect(screen.getByText('Semantic AI Chatbot')).toBeInTheDocument()
    expect(screen.getByText('Measurement App Overhaul')).toBeInTheDocument()
    expect(screen.getByText('Open-Python POC')).toBeInTheDocument()
  })
})
