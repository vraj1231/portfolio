interface SectionWrapperProps {
  id: string
  children: React.ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative min-h-screen w-full flex flex-col justify-center px-6 md:px-16 lg:px-24 py-20 ${className}`}
      style={{ background: 'rgba(5,10,24,0.82)' }}
    >
      {children}
    </section>
  )
}
