export function Avatar() {
  return (
    <div className="relative flex items-center justify-center w-64 h-64 md:w-72 md:h-72">
      {/* Hexagon glow border */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 200 200"
        fill="none"
      >
        <polygon
          points="100,8 185,55 185,145 100,192 15,145 15,55"
          stroke="url(#hexGrad)"
          strokeWidth="2"
          fill="rgba(0,212,255,0.04)"
        />
        <defs>
          <linearGradient id="hexGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00d4ff" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
      </svg>

      {/* Stylized avatar SVG */}
      <svg
        viewBox="0 0 160 200"
        fill="none"
        className="w-44 h-44 md:w-52 md:h-52 z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background circle */}
        <circle cx="80" cy="85" r="70" fill="#0d1b35" />

        {/* Body / blazer */}
        <path d="M20 200 Q20 150 40 140 L60 135 L80 145 L100 135 L120 140 Q140 150 140 200Z" fill="#1a2a4a" />
        {/* Shirt collar */}
        <path d="M65 138 L80 155 L95 138 L80 145Z" fill="#2a3a5a" />
        {/* Tie / shirt hint */}
        <rect x="76" y="148" width="8" height="30" rx="2" fill="#00d4ff" opacity="0.6" />

        {/* Neck */}
        <rect x="70" y="118" width="20" height="22" rx="4" fill="#c8a882" />

        {/* Head */}
        <ellipse cx="80" cy="90" rx="34" ry="38" fill="#c8a882" />

        {/* Mid-fade hair — sides */}
        <path d="M46 82 Q44 60 52 52 Q60 44 80 42 Q100 44 108 52 Q116 60 114 82" fill="#2c1a0e" />
        {/* Hair top */}
        <path d="M52 64 Q58 44 80 40 Q102 44 108 64 Q104 54 80 52 Q56 54 52 64Z" fill="#3a2010" />
        {/* Fade sides */}
        <path d="M46 82 Q44 72 48 68 Q50 78 52 84Z" fill="#c8a882" />
        <path d="M114 82 Q116 72 112 68 Q110 78 108 84Z" fill="#c8a882" />

        {/* Ears */}
        <ellipse cx="46" cy="92" rx="5" ry="7" fill="#c8a882" />
        <ellipse cx="114" cy="92" rx="5" ry="7" fill="#c8a882" />

        {/* Ray-Ban Meta glasses frame */}
        <rect x="50" y="86" width="26" height="14" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
        <rect x="84" y="86" width="26" height="14" rx="4" fill="none" stroke="#1a1a1a" strokeWidth="2.5" />
        {/* Bridge */}
        <line x1="76" y1="93" x2="84" y2="93" stroke="#1a1a1a" strokeWidth="2" />
        {/* Temples */}
        <line x1="110" y1="91" x2="119" y2="89" stroke="#1a1a1a" strokeWidth="2" />
        <line x1="50" y1="91" x2="41" y2="89" stroke="#1a1a1a" strokeWidth="2" />
        {/* Lens tint */}
        <rect x="51" y="87" width="24" height="12" rx="3" fill="#1a1a2e" opacity="0.7" />
        <rect x="85" y="87" width="24" height="12" rx="3" fill="#1a1a2e" opacity="0.7" />
        {/* Meta camera dot */}
        <circle cx="112" cy="89" r="2" fill="#00d4ff" />
        <circle cx="112" cy="89" r="1" fill="#ffffff" opacity="0.8" />

        {/* Nose */}
        <path d="M77 100 Q80 108 83 100" stroke="#a8886a" strokeWidth="1.5" fill="none" />

        {/* Mouth */}
        <path d="M72 112 Q80 118 88 112" stroke="#a8886a" strokeWidth="1.5" fill="none" strokeLinecap="round" />

        {/* Eyebrows */}
        <path d="M52 83 Q63 80 74 83" stroke="#2c1a0e" strokeWidth="2" fill="none" strokeLinecap="round" />
        <path d="M86 83 Q97 80 108 83" stroke="#2c1a0e" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    </div>
  )
}
