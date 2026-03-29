// src/components/three/NeuralNet.test.tsx
import { render } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { NeuralNet } from './NeuralNet'

vi.mock('@react-three/fiber', () => ({
  useFrame: vi.fn(),
  useThree: vi.fn(() => ({ size: { width: 800, height: 600 } })),
}))

describe('NeuralNet', () => {
  it('renders without crashing', () => {
    const { container } = render(<NeuralNet />)
    expect(container).toBeTruthy()
  })
})
