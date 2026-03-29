import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Experience } from './Experience'

describe('Experience', () => {
  it('renders both job titles', () => {
    render(<Experience />)
    expect(screen.getByText(/Senior Data & Software Engineer I/i)).toBeInTheDocument()
    expect(screen.getByText(/Data and Software Engineer II/i)).toBeInTheDocument()
  })

  it('renders impact metrics', () => {
    render(<Experience />)
    expect(screen.getByText(/Minutes → Seconds/i)).toBeInTheDocument()
    expect(screen.getByText(/2 Weeks → 15 Min/i)).toBeInTheDocument()
  })
})
