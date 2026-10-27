import { HeartShape, SparkleShape } from './heart-shape'

function seeded(seed: number) {
  let s = seed
  return () => {
    s = (s * 16807) % 2147483647
    return (s - 1) / 2147483646
  }
}

const rand = seeded(20261026)
const round = (n: number, d = 2) => Number(n.toFixed(d))

const stars = Array.from({ length: 70 }, () => ({
  top: round(rand() * 100),
  left: round(rand() * 100),
  size: round(1 + rand() * 2.2),
  d: round(2.5 + rand() * 4),
  delay: round(rand() * 5),
  o: round(0.5 + rand() * 0.5),
}))

const shootingStars = Array.from({ length: 5 }, (_, i) => ({
  top: round(rand() * 35),
  left: round(45 + rand() * 55),
  len: Math.round(110 + rand() * 90),
  angle: round(140 + rand() * 25),
  travel: Math.round(700 + rand() * 500),
  d: round(10 + rand() * 8),
  delay: round(i * 3.1 + rand() * 2),
}))

const glints = Array.from({ length: 12 }, () => ({
  top: round(rand() * 95),
  left: round(rand() * 96),
  size: Math.round(8 + rand() * 12),
  d: round(3 + rand() * 3),
  delay: round(rand() * 6),
  warm: rand() > 0.35,
}))

const particles = Array.from({ length: 18 }, () => ({
  left: round(rand() * 100),
  size: round(3 + rand() * 6),
  d: round(16 + rand() * 14),
  delay: round(-rand() * 30),
  dx: Math.round((rand() - 0.5) * 120),
  o: round(0.25 + rand() * 0.4),
  heart: rand() > 0.75,
}))

const PHRASES = ['Te quiero bonito', 'Siempre tú', 'Orgulloso de ti', 'Mi Nananim', 'Eres mi paz', 'Te elijo']

const phrases = PHRASES.flatMap((text, i) => [
  {
    text,
    left: round(4 + ((i * 2 + 0) / (PHRASES.length * 2)) * 88 + rand() * 4),
    size: round(1.1 + rand() * 0.8),
    d: round(34 + rand() * 18),
    delay: round(-rand() * 50),
    dx: Math.round((rand() - 0.5) * 80),
    o: round(0.35 + rand() * 0.25),
  },
  {
    text,
    left: round(4 + ((i * 2 + 1) / (PHRASES.length * 2)) * 88 + rand() * 4),
    size: round(1 + rand() * 0.7),
    d: round(38 + rand() * 18),
    delay: round(-rand() * 50),
    dx: Math.round((rand() - 0.5) * 80),
    o: round(0.3 + rand() * 0.25),
  },
])

export function FloatingBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="sky-gradient absolute inset-0" />

      <div className="animate-pulse-glow absolute -bottom-40 left-1/2 h-80 w-[120%] -translate-x-1/2 soft-glow-ember" />

      {stars.map((s, i) => (
        <span
          key={`s${i}`}
          className="glow-star animate-twinkle absolute rounded-full"
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              '--d': `${s.d}s`,
              '--delay': `${s.delay}s`,
              '--o': s.o,
            } as React.CSSProperties
          }
        />
      ))}

      {shootingStars.map((s, i) => (
        <span
          key={`ss${i}`}
          className="shooting-star absolute"
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              '--len': `${s.len}px`,
              '--angle': `${s.angle}deg`,
              '--travel': `${s.travel}px`,
              '--d': `${s.d}s`,
              '--delay': `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {glints.map((g, i) => (
        <SparkleShape
          key={`g${i}`}
          className={`animate-twinkle absolute ${g.warm ? 'text-gold' : 'text-[#a98be6]'}`}
          style={
            {
              top: `${g.top}%`,
              left: `${g.left}%`,
              width: g.size,
              height: g.size,
              filter: g.warm
                ? 'drop-shadow(0 0 6px rgba(226,166,60,0.85))'
                : 'drop-shadow(0 0 6px rgba(169,139,230,0.85))',
              '--d': `${g.d}s`,
              '--delay': `${g.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}

      {particles.map((p, i) =>
        p.heart ? (
          <HeartShape
            key={`p${i}`}
            className="animate-drift-up absolute -bottom-6 text-[#ef9fb8]"
            style={
              {
                left: `${p.left}%`,
                width: p.size * 2,
                height: p.size * 2,
                '--d': `${p.d}s`,
                '--delay': `${p.delay}s`,
                '--dx': `${p.dx}px`,
                '--o': p.o,
              } as React.CSSProperties
            }
          />
        ) : (
          <span
            key={`p${i}`}
            className="animate-drift-up absolute -bottom-4 rounded-full bg-[#fff3dc]"
            style={
              {
                left: `${p.left}%`,
                width: p.size,
                height: p.size,
                boxShadow: '0 0 10px 3px rgba(226,166,60,0.45)',
                '--d': `${p.d}s`,
                '--delay': `${p.delay}s`,
                '--dx': `${p.dx}px`,
                '--o': p.o,
              } as React.CSSProperties
            }
          />
        ),
      )}

      {phrases.map((p, i) => (
        <span
          key={`ph${i}`}
          className="animate-drift-up absolute -bottom-10 whitespace-nowrap font-script text-primary"
          style={
            {
              left: `${p.left}%`,
              fontSize: `${p.size}rem`,
              textShadow: '0 0 14px rgba(255,255,255,0.9)',
              '--d': `${p.d}s`,
              '--delay': `${p.delay}s`,
              '--dx': `${p.dx}px`,
              '--o': p.o,
            } as React.CSSProperties
          }
        >
          {p.text}
        </span>
      ))}
    </div>
  )
}
