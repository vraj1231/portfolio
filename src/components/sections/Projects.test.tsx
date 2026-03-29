import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders project titles', () => {
    render(<Projects />)
    expect(screen.getByText('Smart City Community Watch')).toBeInTheDocument()
    expect(screen.getByText('Conversational AI Platform')).toBeInTheDocument()
    expect(screen.getByText('Privacy-First Analytics Engine')).toBeInTheDocument()
  })
})
