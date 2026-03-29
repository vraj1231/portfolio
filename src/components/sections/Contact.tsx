import { useRef, useState, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { links } from '../../data/content'
import { SectionWrapper } from '../layout/SectionWrapper'
import { FloatingGeo } from '../three/FloatingGeo'

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: links.linkedin },
  { label: 'GitHub', href: links.github },
  { label: 'Medium', href: links.medium },
  { label: 'Email', href: `mailto:${links.email}` },
]

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')
  const [validationError, setValidationError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setValidationError('')

    const form = formRef.current
    if (!form) return

    const data = new FormData(form)
    const name = (data.get('user_name') as string)?.trim()
    const email = (data.get('user_email') as string)?.trim()
    const message = (data.get('message') as string)?.trim()

    if (!name || !email || !message) {
      setValidationError('Please fill in all fields.')
      return
    }

    setStatus('sending')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <SectionWrapper id="contact">
      <div className="max-w-2xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-cyan font-mono text-sm tracking-widest uppercase mb-4 text-center"
        >
          — Contact —
        </motion.h2>

        {/* 3D floating geo */}
        <div className="h-40 w-full pointer-events-none mb-2">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <Suspense fallback={null}>
              <FloatingGeo />
            </Suspense>
          </Canvas>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-surface/60 backdrop-blur-md border border-cyan/10 rounded-2xl p-8 glow-cyan"
        >
          <h3 className="text-2xl font-extrabold text-text mb-2 text-center">Let's Build Something</h3>
          <p className="text-muted text-sm text-center mb-8">Open to new opportunities, collaborations, and interesting conversations.</p>

          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            {SOCIAL_LINKS.map(l => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-muted hover:text-cyan transition-colors text-sm font-mono border-b border-transparent hover:border-cyan pb-0.5"
              >
                {l.label}
              </a>
            ))}
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="user_name"
              type="text"
              placeholder="Your name"
              className="bg-bg border border-cyan/10 rounded-lg px-4 py-3 text-text text-sm placeholder:text-muted focus:outline-none focus:border-cyan/50 transition-colors"
            />
            <input
              name="user_email"
              type="email"
              placeholder="your@email.com"
              className="bg-bg border border-cyan/10 rounded-lg px-4 py-3 text-text text-sm placeholder:text-muted focus:outline-none focus:border-cyan/50 transition-colors"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your message..."
              className="bg-bg border border-cyan/10 rounded-lg px-4 py-3 text-text text-sm placeholder:text-muted focus:outline-none focus:border-cyan/50 transition-colors resize-none"
            />

            {validationError && (
              <p className="text-red-400 text-sm">{validationError}</p>
            )}

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center">Message sent! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center">Something went wrong. Email me directly at mistryvraj3198@gmail.com</p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan to-purple text-bg font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>

        <p className="text-muted text-xs text-center mt-8 font-mono">
          © 2026 Vraj Mistry · Built with React & Three.js
        </p>
      </div>
    </SectionWrapper>
  )
}
