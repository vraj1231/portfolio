import { Navbar } from './components/ui/Navbar'
import { SectionWrapper } from './components/layout/SectionWrapper'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <SectionWrapper id="contact"><div className="text-cyan text-2xl">Contact</div></SectionWrapper>
      </main>
    </>
  )
}
