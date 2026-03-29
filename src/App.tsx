import { SectionWrapper } from './components/layout/SectionWrapper'

export default function App() {
  return (
    <main className="bg-bg text-text">
      <SectionWrapper id="home"><div className="text-cyan text-2xl">Hero</div></SectionWrapper>
      <SectionWrapper id="about"><div className="text-cyan text-2xl">About</div></SectionWrapper>
      <SectionWrapper id="experience"><div className="text-cyan text-2xl">Experience</div></SectionWrapper>
      <SectionWrapper id="skills"><div className="text-cyan text-2xl">Skills</div></SectionWrapper>
      <SectionWrapper id="projects"><div className="text-cyan text-2xl">Projects</div></SectionWrapper>
      <SectionWrapper id="contact"><div className="text-cyan text-2xl">Contact</div></SectionWrapper>
    </main>
  )
}
