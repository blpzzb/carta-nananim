import { ChevronDown } from 'lucide-react'
import { HeartShape, SparkleShape, WithHearts } from './heart-shape'

export function Hero() {
  return (
    <header className="relative flex min-h-svh flex-col items-center justify-center px-6 py-20 text-center">
      <div className="relative mb-10">
        <div className="animate-pulse-glow absolute inset-0 -m-16 soft-glow-gold" />
        <div className="absolute inset-0 -m-4 rounded-full border border-dashed border-primary/30" />
        <div className="relative size-52 overflow-hidden rounded-full bg-white shadow-[0_0_60px_-5px_rgba(226,166,60,0.65)] ring-4 ring-white/80 sm:size-64">
          <img
            src="/images/sanrio-friends.gif"
            alt="Hello Kitty, My Melody, Cinnamoroll, Pompompurin y Keroppi abrazados entre estrellas"
            width={380}
            height={300}
            className="size-full object-contain p-4"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <SparkleShape className="animate-twinkle absolute -left-6 top-6 size-6 text-gold [--d:3s]" />
        <SparkleShape className="animate-twinkle absolute -right-5 bottom-10 size-4 text-accent [--d:4s] [--delay:1s]" />
        <HeartShape className="animate-heartbeat absolute -right-1 top-2 size-8 text-[#e57a9b] drop-shadow-[0_0_8px_rgba(229,122,155,0.7)]" />
      </div>

      <p className="mb-4 text-xs uppercase tracking-[0.4em] text-accent">Una carta bajo un cielo de ensueño</p>
      <h1 className="text-glow font-script text-6xl leading-[1.05] text-primary text-balance sm:text-7xl md:text-8xl">
        <WithHearts text="Para mi Nananim ♡" />
      </h1>
      <p className="mt-6 max-w-md text-pretty text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
        Sube el volumen, busca un rinconcito tranquilo y ábrela cuando estés lista.
      </p>

      <a
        href="#carta"
        className="mt-14 flex flex-col items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
      >
        Lee tu carta
        <ChevronDown className="animate-bob size-5" aria-hidden="true" />
      </a>
    </header>
  )
}
