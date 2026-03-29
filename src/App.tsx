import { Navbar } from './components/ui/Navbar'
import { SectionWrapper } from './components/layout/SectionWrapper'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="bg-bg text-text">
        <Hero />
        <About />
        <Experience />
        <SectionWrapper id="skills"><div className="text-cyan text-2xl">Skills</div></SectionWrapper>
        <SectionWrapper id="projects"><div className="text-cyan text-2xl">Projects</div></SectionWrapper>
        <SectionWrapper id="contact"><div className="text-cyan text-2xl">Contact</div></SectionWrapper>
      </main>
    </>
  )
}
