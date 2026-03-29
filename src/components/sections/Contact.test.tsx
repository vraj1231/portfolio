import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Contact } from './Contact'

vi.mock('@emailjs/browser', () => ({
  default: {
    sendForm: vi.fn(() => Promise.resolve({ status: 200 })),
    init: vi.fn(),
  },
}))

describe('Contact', () => {
  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText(/Your name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your@email.com/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Your message/i)).toBeInTheDocument()
  })

  it('shows error when submitting empty form', async () => {
    render(<Contact />)
    fireEvent.click(screen.getByRole('button', { name: /Send/i }))
    await waitFor(() => {
      expect(screen.getByText(/Please fill in all fields/i)).toBeInTheDocument()
    })
  })

  it('renders social links', () => {
    render(<Contact />)
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Medium')).toBeInTheDocument()
  })
})
