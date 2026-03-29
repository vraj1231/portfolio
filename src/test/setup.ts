import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock WebGL for Three.js
Object.defineProperty(HTMLCanvasElement.prototype, 'getContext', {
  value: vi.fn(() => ({
    canvas: {},
    drawingBufferWidth: 800,
    drawingBufferHeight: 600,
    getExtension: vi.fn(),
    getParameter: vi.fn(),
    createBuffer: vi.fn(),
    bindBuffer: vi.fn(),
    bufferData: vi.fn(),
    enable: vi.fn(),
    disable: vi.fn(),
    viewport: vi.fn(),
    clear: vi.fn(),
    clearColor: vi.fn(),
  })),
})
