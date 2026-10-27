'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import { Music, Pause } from 'lucide-react'
import { HeartShape, SparkleShape, StarShape } from './heart-shape'

type Kind = 'heart' | 'sparkle' | 'star' | 'orb'

type Drop = {
  id: number
  kind: Kind
  left: number
  size: number
  dx: number
  rotate: number
  delay: number
  duration: number
  color: string
  scale: number
}

type ExperienceContextValue = {
  rain: (amount?: number) => void
  isPlaying: boolean
  toggleMusic: () => void
}

const ExperienceContext = createContext<ExperienceContextValue | null>(null)

export function useExperience() {
  const ctx = useContext(ExperienceContext)
  if (!ctx) throw new Error('useExperience must be used inside <Experience>')
  return ctx
}

const RAIN_COLORS = ['#e2a63c', '#f3c26b', '#e57a9b', '#f4a3bd', '#a98be6', '#c86a74']
const KINDS: Kind[] = ['heart', 'heart', 'sparkle', 'star', 'star', 'orb']

let dropId = 0

export function Experience({ children }: { children: React.ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [drops, setDrops] = useState<Drop[]>([])

  useEffect(() => {
    document.body.style.overflow = isOpen ? '' : 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const rain = useCallback((amount = 50) => {
    const batch: Drop[] = Array.from({ length: amount }, () => ({
      id: dropId++,
      kind: KINDS[Math.floor(Math.random() * KINDS.length)],
      left: Math.random() * 100,
      size: 12 + Math.random() * 22,
      dx: (Math.random() - 0.5) * 160,
      rotate: (Math.random() - 0.5) * 360,
      delay: Math.random() * 1.4,
      duration: 2.8 + Math.random() * 2,
      color: RAIN_COLORS[Math.floor(Math.random() * RAIN_COLORS.length)],
      scale: 0.8 + Math.random() * 0.5,
    }))
    const ids = new Set(batch.map((d) => d.id))
    setDrops((prev) => [...prev, ...batch].slice(-140))
    window.setTimeout(() => {
      setDrops((prev) => prev.filter((d) => !ids.has(d.id)))
    }, 6500)
  }, [])

  const toggleMusic = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [])

  const openSurprise = () => {
    setIsOpen(true)
    audioRef.current?.play().catch(() => setIsPlaying(false))
    rain(45)
  }

  return (
    <ExperienceContext.Provider value={{ rain, isPlaying, toggleMusic }}>
      <audio
        ref={audioRef}
        src="/futile-devices.mp3"
        loop
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {children}

      {!isOpen && <IntroOverlay onOpen={openSurprise} />}

      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        {drops.map((d) => {
          const style = {
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            color: d.color,
            filter: `drop-shadow(0 0 6px ${d.color}aa)`,
            '--dx': `${d.dx}px`,
            '--r': `${d.rotate}deg`,
            '--delay': `${d.delay}s`,
            '--d': `${d.duration}s`,
            '--s': d.scale,
          } as React.CSSProperties
          const className = 'animate-rain absolute -top-10 opacity-0'
          if (d.kind === 'heart') return <HeartShape key={d.id} className={className} style={style} />
          if (d.kind === 'sparkle') return <SparkleShape key={d.id} className={className} style={style} />
          if (d.kind === 'star') return <StarShape key={d.id} className={className} style={style} />
          return (
            <span
              key={d.id}
              className={`${className} rounded-full`}
              style={{ ...style, width: d.size / 2.5, height: d.size / 2.5, background: d.color }}
            />
          )
        })}
      </div>

      {isOpen && (
        <button
          type="button"
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Pausar canción' : 'Reproducir canción'}
          aria-pressed={isPlaying}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full border border-white/90 bg-white/90 py-2 pl-2 pr-2 text-foreground shadow-[0_14px_40px_-12px_rgba(176,79,122,0.55)] transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:pr-5"
        >
          <span className="btn-magic relative flex size-11 items-center justify-center rounded-full">
            {isPlaying && (
              <span className="animate-spin-slow absolute inset-[-5px] rounded-full border-2 border-dashed border-primary/70" />
            )}
            {isPlaying ? <Pause className="size-5" fill="currentColor" /> : <Music className="size-5" />}
          </span>
          <span className="hidden flex-col text-left leading-tight sm:flex">
            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
              {isPlaying ? 'Sonando ahora' : 'Nuestra canción'}
            </span>
            <span className="text-sm font-medium">Futile Devices (Doveman Remix)</span>
          </span>
          {isPlaying && (
            <span className="hidden h-4 items-end gap-0.5 sm:flex" aria-hidden="true">
              <span className="animate-twinkle h-full w-0.5 origin-bottom rounded bg-primary [--d:0.9s]" />
              <span className="animate-twinkle h-full w-0.5 origin-bottom rounded bg-primary [--d:1.2s] [--delay:0.2s]" />
              <span className="animate-twinkle h-full w-0.5 origin-bottom rounded bg-primary [--d:0.7s] [--delay:0.4s]" />
            </span>
          )}
        </button>
      )}
    </ExperienceContext.Provider>
  )
}

function IntroOverlay({ onOpen }: { onOpen: () => void }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="intro-title"
      className="fixed inset-0 z-[60] flex items-center justify-center p-6"
    >
      <div className="sky-gradient absolute inset-0" />
      <div className="relative flex max-w-sm flex-col items-center text-center">
        <div className="animate-bob relative mb-10">
          <div className="animate-pulse-glow absolute inset-0 -m-14 soft-glow-gold" />
          <div className="relative flex h-36 w-52 items-end justify-center overflow-hidden rounded-2xl border border-white bg-[#fff7f9] shadow-[0_24px_60px_-18px_rgba(150,70,110,0.55)]">
            <div className="absolute inset-x-0 top-0 h-0 w-0 border-x-[104px] border-t-[78px] border-x-transparent border-t-[#f7d2dc]" />
            <div className="absolute inset-x-0 bottom-0 h-0 w-0 border-x-[104px] border-b-[70px] border-x-transparent border-b-[#fbe3e9]" />
            <span className="btn-magic animate-heartbeat relative mb-12 flex size-12 items-center justify-center rounded-full">
              <HeartShape className="size-6" />
            </span>
          </div>
          <SparkleShape className="animate-twinkle absolute -right-6 -top-4 size-5 text-gold" />
          <SparkleShape className="animate-twinkle absolute -left-5 bottom-2 size-3.5 text-accent [--delay:1s]" />
        </div>
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-accent">Tienes una carta</p>
        <h1 id="intro-title" className="text-glow font-script text-5xl text-primary text-balance sm:text-6xl">
          Para mi Nananim{' '}
          <HeartShape className="inline-block size-[0.8em] align-middle" />
          <span className="sr-only">corazón</span>
        </h1>
        <p className="mt-4 text-pretty leading-relaxed text-foreground/75">
          Sube el volumen, busca un rinconcito tranquilo y ábrela cuando estés lista.
        </p>
        <button
          type="button"
          onClick={onOpen}
          className="btn-magic mt-9 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <SparkleShape className="size-4" />
          Abrir sorpresa
        </button>
      </div>
    </div>
  )
}
