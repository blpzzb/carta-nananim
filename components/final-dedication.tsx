'use client'

import { useState } from 'react'
import { useExperience } from './experience'
import { HeartShape, SparkleShape, WithHearts } from './heart-shape'

const replies = [
  'Y yo a ti, muchísimo.',
  'Una y otra vez.',
  'Hoy, mañana y siempre.',
  'Gracias por ser tú.',
  'Nunca serán suficientes.',
  'Mi Nananim ♡',
]

export function FinalDedication() {
  const { rain } = useExperience()
  const [count, setCount] = useState(0)

  const sendLove = () => {
    setCount((c) => c + 1)
    rain(60)
  }

  return (
    <section aria-labelledby="dedicatoria-title" className="relative px-6 pb-40 pt-8">
      <div className="mx-auto flex max-w-xl flex-col items-center text-center">
        <div className="relative">
          <div className="animate-pulse-glow absolute inset-0 -m-12 soft-glow-lavender" />
          <div className="animate-bob relative size-40 overflow-hidden rounded-full bg-white shadow-[0_0_50px_-6px_rgba(169,139,230,0.75)] ring-4 ring-white/80 sm:size-48">
            <img
              src="/images/my-melody.gif"
              alt="My Melody con alitas de ángel sosteniendo corazones"
              width={360}
              height={360}
              loading="lazy"
              decoding="async"
              className="size-full object-contain p-2"
            />
          </div>
        </div>

        <p className="mt-10 text-xs uppercase tracking-[0.4em] text-accent">Dedicatoria</p>
        <h2
          id="dedicatoria-title"
          className="text-glow mt-3 font-script text-5xl text-primary text-balance sm:text-6xl"
        >
          <WithHearts text="Para mi Nananim ♡" />
        </h2>
        <p className="mt-6 text-pretty text-lg italic leading-relaxed text-foreground/85">
          Que cada estrella de este cielo te recuerde lo valiosa que eres. Que nunca te falten motivos para sonreír,
          ni alguien que te abrace con ternura en los días difíciles. Aquí estaré, mi niña, queriéndote bonito.
        </p>

        <div className="glass-card mt-12 w-full rounded-[2rem] p-8 sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Te quiero</p>
          <p className="text-glow mt-2 font-script text-7xl leading-none text-primary" aria-hidden="true">
            {'∞'}
          </p>
          <p className="mt-3 text-pretty text-foreground/85">Así de grande, así de eterno, así de infinito.</p>

          <button
            type="button"
            onClick={sendLove}
            className="btn-magic mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-medium transition-transform hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <HeartShape className="animate-heartbeat size-4" />
            Te quiero
            <SparkleShape className="size-3.5" />
          </button>

          <p className="mt-6 min-h-6 text-sm text-muted-foreground" aria-live="polite">
            <WithHearts
              text={
                count === 0
                  ? 'Pulsa el botón y mira lo que pasa ♡'
                  : `${count} ${count === 1 ? '"te quiero" enviado' : '"te quiero" enviados'} · ${
                      replies[(count - 1) % replies.length]
                    }`
              }
            />
          </p>
        </div>

        <p className="text-glow mt-16 font-script text-3xl text-primary/90 text-balance">
          Volvería a elegir conocerte, una y otra vez.
        </p>
      </div>
    </section>
  )
}
