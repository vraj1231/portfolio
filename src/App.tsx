import { lazy, Suspense } from 'react'
import { Navbar } from './components/ui/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Contact } from './components/sections/Contact'

const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })))
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })))

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text">
        <Hero />
        <About />
        <Experience />
        <Suspense fallback={<div className="min-h-screen bg-bg" />}>
          <Skills />
        </Suspense>
        <Suspense fallback={<div className="min-h-screen bg-bg" />}>
          <Projects />
        </Suspense>
        <Contact />
      </main>
    </>
  )
}
