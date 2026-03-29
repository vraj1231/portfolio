import React from 'react'
import { vi } from 'vitest'

export const Canvas = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="r3f-canvas">{children}</div>
)
export const useFrame = vi.fn()
export const useThree = vi.fn(() => ({
  size: { width: 800, height: 600 },
  camera: { position: { x: 0, y: 0, z: 5 } },
}))
