import { lazy, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Navbar } from './components/ui/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'
import { BrainNeurons } from './components/three/BrainNeurons'

const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })))
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })))

export default function App() {
  return (
    <>
      {/* Site-wide 3D brain neuron background */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <Canvas camera={{ position: [0, 0, 14], fov: 60 }}>
          <Suspense fallback={null}>
            <BrainNeurons />
          </Suspense>
        </Canvas>
      </div>

      <Navbar />
      <main className="text-text" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Suspense fallback={<div className="min-h-screen" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen" />}>
          <Projects />
        </Suspense>
        <Contact />
      </main>
    </>
  )
}
