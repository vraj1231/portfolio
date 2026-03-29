import { useRef, useState } from 'react'

export function Avatar() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glare, setGlare] = useState({ x: 50, y: 50 })
  const [hovered, setHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2)
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2)
    setTilt({ x: -dy * 20, y: dx * 20 })
    setGlare({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGlare({ x: 50, y: 50 })
    setHovered(false)
  }

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center w-64 h-64 md:w-72 md:h-72"
      style={{ perspective: '900px', cursor: 'pointer' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* 3D tilt wrapper */}
      <div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${hovered ? 1.06 : 1})`,
          transition: hovered ? 'transform 0.08s ease-out' : 'transform 0.55s cubic-bezier(0.23,1,0.32,1)',
          filter: hovered
            ? 'drop-shadow(0 20px 48px rgba(0,212,255,0.45)) drop-shadow(0 4px 16px rgba(0,0,0,0.7))'
            : 'drop-shadow(0 8px 32px rgba(0,212,255,0.25)) drop-shadow(0 2px 8px rgba(0,0,0,0.6))',
        }}
      >
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 220">
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#00d4ff" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>

            {/* Dynamic glare driven by mouse */}
            <radialGradient id="light3d" cx={`${glare.x}%`} cy={`${glare.y}%`} r="60%">
              <stop offset="0%"   stopColor="#ffffff" stopOpacity={hovered ? 0.22 : 0.14} />
              <stop offset="50%"  stopColor="#ffffff" stopOpacity="0.0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.30" />
            </radialGradient>

            <radialGradient id="rimLight" cx="50%" cy="50%" r="50%">
              <stop offset="78%" stopColor="transparent" />
              <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.15" />
            </radialGradient>

            <clipPath id="circleClip">
              <circle cx="110" cy="110" r="95" />
            </clipPath>
          </defs>

          {/* Outer rings */}
          <circle cx="110" cy="110" r="105" fill="none" stroke="url(#ringGrad)" strokeWidth="0.8" opacity="0.20" />
          <circle cx="110" cy="110" r="100" fill="none" stroke="url(#ringGrad)" strokeWidth="2.5"
            opacity={hovered ? 1 : 0.9}
            style={{ transition: 'opacity 0.3s' }}
          />

          <g clipPath="url(#circleClip)">
            {/* Avatar image */}
            <image
              href={`${import.meta.env.BASE_URL}avatar.png`}
              x="15" y="15" width="190" height="190"
              preserveAspectRatio="xMidYMid meet"
            />

            {/* Dynamic 3D lighting overlay */}
            <circle cx="110" cy="110" r="95" fill="url(#light3d)" />
            <circle cx="110" cy="110" r="95" fill="url(#rimLight)" />

            {/* ── Meta Ray-Ban Gen 2 Wayfarer — Blue frames ── */}
            <path d="M75 107 L73 93 L77 88 L101 89 L99 107Z" fill="#050d1a" opacity="0.88" />
            <path d="M75 107 L73 93 L77 88 L101 89 L99 107Z"
              fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinejoin="miter" />

            <path d="M119 107 L119 89 L143 88 L147 93 L145 107Z" fill="#050d1a" opacity="0.88" />
            <path d="M119 107 L119 89 L143 88 L147 93 L145 107Z"
              fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinejoin="miter" />

            <path d="M77 88 L101 89" stroke="#1d4ed8" strokeWidth="3.5" strokeLinecap="square" />
            <path d="M119 89 L143 88" stroke="#1d4ed8" strokeWidth="3.5" strokeLinecap="square" />

            <path d="M99 98 Q109 96 119 98" stroke="#1d4ed8" strokeWidth="2" fill="none" />

            <line x1="73" y1="99" x2="63" y2="99" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="147" y1="99" x2="157" y2="99" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />

            <path d="M76 106 L74 94 L78 89 L100 90 L98 106Z" fill="#1d4ed8" opacity="0.10" />
            <path d="M120 106 L120 90 L142 89 L146 94 L144 106Z" fill="#1d4ed8" opacity="0.10" />

            <path d="M78 93 L85 92 L83 97 L76 97Z" fill="#ffffff" opacity="0.10" />
            <path d="M123 92 L130 92 L128 97 L121 97Z" fill="#ffffff" opacity="0.10" />

            <circle cx="155" cy="97" r="2.5" fill="#00d4ff" opacity="0.95" />
            <circle cx="155" cy="97" r="5"   fill="#00d4ff" opacity="0.18" />
            <circle cx="155" cy="97" r="1"   fill="#ffffff"  opacity="0.90" />
          </g>

          <ellipse cx="110" cy="208" rx="55" ry="8" fill="#00d4ff" opacity="0.05" />
        </svg>

        {/* Moving glare shine overlay */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.12) 0%, transparent 55%)`,
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
            borderRadius: '50%',
          }}
        />

        {/* Glow ring */}
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            boxShadow: hovered
              ? '0 0 48px rgba(0,212,255,0.40), 0 0 96px rgba(168,85,247,0.20)'
              : '0 0 32px rgba(0,212,255,0.22), 0 0 64px rgba(168,85,247,0.10)',
            transition: 'box-shadow 0.3s',
          }}
        />
      </div>
    </div>
  )
}
