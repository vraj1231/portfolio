import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { SectionWrapper } from './SectionWrapper'

describe('SectionWrapper', () => {
  it('renders children', () => {
    render(<SectionWrapper id="test"><p>hello</p></SectionWrapper>)
    expect(screen.getByText('hello')).toBeInTheDocument()
  })

  it('sets the id attribute', () => {
    const { container } = render(<SectionWrapper id="about"><p>x</p></SectionWrapper>)
    expect(container.querySelector('#about')).toBeInTheDocument()
  })
})
