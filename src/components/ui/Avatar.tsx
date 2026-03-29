export function Avatar() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-72 md:h-72">
      {/* Animated rotating gradient ring */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 220 220">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#00d4ff" />
          </linearGradient>
          <radialGradient id="bgGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0d1b35" />
            <stop offset="100%" stopColor="#050a18" />
          </radialGradient>
          <clipPath id="circleClip">
            <circle cx="110" cy="110" r="96" />
          </clipPath>
        </defs>

        {/* Outer glow ring */}
        <circle cx="110" cy="110" r="100" fill="none" stroke="url(#ringGrad)" strokeWidth="3" opacity="0.9" />
        <circle cx="110" cy="110" r="104" fill="none" stroke="url(#ringGrad)" strokeWidth="1" opacity="0.3" />

        {/* Background fill */}
        <circle cx="110" cy="110" r="96" fill="url(#bgGlow)" />

        {/* Subtle inner grid lines (synthwave) */}
        <g clipPath="url(#circleClip)" opacity="0.06">
          {[80, 100, 120, 140, 160].map(y => (
            <line key={y} x1="14" y1={y} x2="206" y2={y} stroke="#00d4ff" strokeWidth="1" />
          ))}
        </g>

        {/* ── Avatar illustration ── */}
        <g clipPath="url(#circleClip)">
          {/* Blazer / body */}
          <path d="M30 220 Q28 172 50 158 L72 148 L90 160 L110 148 L128 148 L148 158 Q172 172 190 220Z" fill="#111827" />
          {/* Blazer lapels */}
          <path d="M72 148 L90 160 L90 220" fill="#1a2438" />
          <path d="M128 148 L110 160 L110 220" fill="#1a2438" />
          {/* Shirt / inner */}
          <path d="M90 160 L110 160 L110 220 L90 220Z" fill="#1e2d45" />
          {/* Collar */}
          <path d="M86 148 L100 162 L110 148Z" fill="#e2e8f0" opacity="0.9" />
          <path d="M114 148 L100 162 L110 148Z" fill="#cbd5e1" opacity="0.9" />
          {/* Tie — cyan accent */}
          <path d="M97 162 L100 158 L103 162 L101 195 L99 195Z" fill="#00d4ff" opacity="0.85" />

          {/* Neck */}
          <rect x="88" y="132" width="24" height="20" rx="5" fill="#c4956a" />

          {/* Head */}
          <ellipse cx="100" cy="104" rx="38" ry="42" fill="#c4956a" />

          {/* Hair — dark with slight sheen */}
          {/* Top hair mass */}
          <path d="M62 98 Q60 68 70 56 Q80 44 100 42 Q120 44 130 56 Q140 68 138 98 Q132 78 100 74 Q68 78 62 98Z" fill="#1a0f0a" />
          {/* Fade gradient on sides */}
          <path d="M62 98 Q60 82 64 74 Q66 86 68 96Z" fill="#c4956a" />
          <path d="M138 98 Q140 82 136 74 Q134 86 132 96Z" fill="#c4956a" />
          {/* Hair texture highlight */}
          <path d="M78 56 Q100 50 122 56 Q110 52 100 51 Q90 52 78 56Z" fill="#2d1a10" opacity="0.6" />

          {/* Ears */}
          <ellipse cx="62" cy="106" rx="6" ry="8" fill="#c4956a" />
          <ellipse cx="138" cy="106" rx="6" ry="8" fill="#c4956a" />
          <ellipse cx="62" cy="106" rx="3" ry="4" fill="#b8845c" />
          <ellipse cx="138" cy="106" rx="3" ry="4" fill="#b8845c" />

          {/* Eyebrows — defined */}
          <path d="M68 94 Q80 90 92 93" stroke="#1a0f0a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M108 93 Q120 90 132 94" stroke="#1a0f0a" strokeWidth="2.5" fill="none" strokeLinecap="round" />

          {/* Eyes */}
          <ellipse cx="80" cy="102" rx="8" ry="6" fill="#fff" />
          <ellipse cx="120" cy="102" rx="8" ry="6" fill="#fff" />
          <ellipse cx="80" cy="103" rx="5" ry="5" fill="#3d2b1f" />
          <ellipse cx="120" cy="103" rx="5" ry="5" fill="#3d2b1f" />
          <ellipse cx="80" cy="103" rx="2.5" ry="2.5" fill="#0d0907" />
          <ellipse cx="120" cy="103" rx="2.5" ry="2.5" fill="#0d0907" />
          {/* Eye shine */}
          <circle cx="83" cy="101" r="1.5" fill="#fff" opacity="0.8" />
          <circle cx="123" cy="101" r="1.5" fill="#fff" opacity="0.8" />

          {/* Ray-Ban Meta glasses — modern rectangular */}
          {/* Left lens */}
          <rect x="64" y="99" width="30" height="16" rx="5" fill="#0d1020" opacity="0.88" />
          <rect x="64" y="99" width="30" height="16" rx="5" fill="none" stroke="#2a2a3a" strokeWidth="1.5" />
          {/* Right lens */}
          <rect x="100" y="99" width="30" height="16" rx="5" fill="#0d1020" opacity="0.88" />
          <rect x="100" y="99" width="30" height="16" rx="5" fill="none" stroke="#2a2a3a" strokeWidth="1.5" />
          {/* Bridge */}
          <path d="M94 107 Q97 105 100 107" stroke="#2a2a3a" strokeWidth="1.5" fill="none" />
          {/* Temples */}
          <line x1="64" y1="107" x2="56" y2="106" stroke="#2a2a3a" strokeWidth="1.5" />
          <line x1="130" y1="107" x2="138" y2="106" stroke="#2a2a3a" strokeWidth="1.5" />
          {/* Lens glare */}
          <path d="M67 102 L74 102 L72 105 L65 105Z" fill="#fff" opacity="0.06" />
          <path d="M103 102 L110 102 L108 105 L101 105Z" fill="#fff" opacity="0.06" />
          {/* Meta camera dot — cyan glow */}
          <circle cx="128" cy="102" r="2.5" fill="#00d4ff" opacity="0.9" />
          <circle cx="128" cy="102" r="4" fill="#00d4ff" opacity="0.2" />

          {/* Nose */}
          <path d="M96 112 Q100 120 104 112" stroke="#b07850" strokeWidth="1.5" fill="none" strokeLinecap="round" />

          {/* Mouth — slight smile */}
          <path d="M88 126 Q100 133 112 126" stroke="#b07850" strokeWidth="2" fill="none" strokeLinecap="round" />
          <path d="M90 126 Q100 130 110 126" stroke="#c4956a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.4" />
        </g>

        {/* Bottom glow accent */}
        <ellipse cx="110" cy="205" rx="60" ry="12" fill="#00d4ff" opacity="0.06" />
      </svg>

      {/* CSS pulse ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'transparent',
          boxShadow: '0 0 24px rgba(0,212,255,0.18), 0 0 48px rgba(168,85,247,0.08)',
          borderRadius: '50%',
        }}
      />
    </div>
  )
}
