import React from 'react'
import { vi } from 'vitest'

export const Text = ({ children }: { children: React.ReactNode }) => <span>{children}</span>
export const OrbitControls = () => null
export const Sphere = ({ children }: { children?: React.ReactNode }) => <mesh>{children}</mesh>
export const useGLTF = vi.fn()
