import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Projects } from './Projects'

describe('Projects', () => {
  it('renders project titles', () => {
    render(<Projects />)
    expect(screen.getAllByText('Illegal Dumping Action Detection').length).toBeGreaterThan(0)
    expect(screen.getByText('AI Chatbot for Data Insights')).toBeInTheDocument()
    expect(screen.getByText('Ads Measurement Application')).toBeInTheDocument()
  })
})
