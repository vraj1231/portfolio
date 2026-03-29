export function Avatar() {
  return (
    <div
      className="relative flex items-center justify-center w-64 h-64 md:w-72 md:h-72"
      style={{ filter: 'drop-shadow(0 8px 32px rgba(0,212,255,0.25)) drop-shadow(0 2px 8px rgba(0,0,0,0.6))' }}
    >
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 220">
        <defs>
          {/* Ring gradient */}
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>

          {/* 3D lighting: top-left specular, bottom-right shadow */}
          <radialGradient id="light3d" cx="32%" cy="28%" r="65%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="55%"  stopColor="#ffffff" stopOpacity="0.0" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0.30" />
          </radialGradient>

          {/* Inner rim highlight */}
          <radialGradient id="rimLight" cx="50%" cy="50%" r="50%">
            <stop offset="80%" stopColor="transparent" />
            <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.12" />
          </radialGradient>

          <clipPath id="circleClip">
            <circle cx="110" cy="110" r="95" />
          </clipPath>
        </defs>

        {/* Outer pulse rings */}
        <circle cx="110" cy="110" r="105" fill="none" stroke="url(#ringGrad)" strokeWidth="0.8" opacity="0.20" />
        <circle cx="110" cy="110" r="100" fill="none" stroke="url(#ringGrad)" strokeWidth="2.5" opacity="0.90" />

        {/* Avatar image clipped to circle */}
        <g clipPath="url(#circleClip)">
          <image
            href="/avatar.png"
            x="15" y="15" width="190" height="190"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* 3D lighting overlay */}
          <circle cx="110" cy="110" r="95" fill="url(#light3d)" />

          {/* Rim light */}
          <circle cx="110" cy="110" r="95" fill="url(#rimLight)" />

          {/* ── Meta Ray-Ban Gen 2 Wayfarer — Blue frames ── */}

          {/* Left lens */}
          <path d="M75 107 L73 93 L77 88 L101 89 L99 107Z" fill="#050d1a" opacity="0.88" />
          <path d="M75 107 L73 93 L77 88 L101 89 L99 107Z"
            fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinejoin="miter" />

          {/* Right lens */}
          <path d="M119 107 L119 89 L143 88 L147 93 L145 107Z" fill="#050d1a" opacity="0.88" />
          <path d="M119 107 L119 89 L143 88 L147 93 L145 107Z"
            fill="none" stroke="#1d4ed8" strokeWidth="2.5" strokeLinejoin="miter" />

          {/* Thick top bar */}
          <path d="M77 88 L101 89" stroke="#1d4ed8" strokeWidth="3.5" strokeLinecap="square" />
          <path d="M119 89 L143 88" stroke="#1d4ed8" strokeWidth="3.5" strokeLinecap="square" />

          {/* Bridge */}
          <path d="M99 98 Q109 96 119 98" stroke="#1d4ed8" strokeWidth="2" fill="none" />

          {/* Temples */}
          <line x1="73" y1="99" x2="63" y2="99" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="147" y1="99" x2="157" y2="99" stroke="#1d4ed8" strokeWidth="2.5" strokeLinecap="round" />

          {/* Blue tint */}
          <path d="M76 106 L74 94 L78 89 L100 90 L98 106Z" fill="#1d4ed8" opacity="0.10" />
          <path d="M120 106 L120 90 L142 89 L146 94 L144 106Z" fill="#1d4ed8" opacity="0.10" />

          {/* Lens glare */}
          <path d="M78 93 L85 92 L83 97 L76 97Z" fill="#ffffff" opacity="0.10" />
          <path d="M123 92 L130 92 L128 97 L121 97Z" fill="#ffffff" opacity="0.10" />

          {/* Meta camera dot — right temple */}
          <circle cx="155" cy="97" r="2.5" fill="#00d4ff" opacity="0.95" />
          <circle cx="155" cy="97" r="5"   fill="#00d4ff" opacity="0.18" />
          <circle cx="155" cy="97" r="1"   fill="#ffffff"  opacity="0.90" />
        </g>

        {/* Bottom ambient glow */}
        <ellipse cx="110" cy="208" rx="55" ry="8" fill="#00d4ff" opacity="0.05" />
      </svg>

      {/* Outer CSS glow pulse */}
      <div
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          boxShadow: '0 0 32px rgba(0,212,255,0.22), 0 0 64px rgba(168,85,247,0.10)',
        }}
      />
    </div>
  )
}
