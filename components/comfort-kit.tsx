'use client'

import { useState } from 'react'
import { ChevronDown, CloudRain, Smile, Sparkles } from 'lucide-react'
import { useExperience } from './experience'
import { SparkleShape } from './heart-shape'
import { SectionHeading } from './section-heading'

const notes = [
  {
    id: 'triste',
    label: 'Léeme si estás triste',
    icon: CloudRain,
    title: 'Puedes llorar, aquí te sostengo',
    body: [
      'No tienes que esconder tu tristeza ni ponerle buena cara a nadie, ni siquiera a mí. Siéntela, que también es parte de ti, y yo me quedo a tu lado el tiempo que haga falta.',
      'Acuérdate de todas esas veces que hablamos hasta tarde y, sin darnos cuenta, el día malo ya se había quedado atrás. Esta vez también va a pasar, mi niña.',
      'Las tormentas no duran para siempre. Y cuando pase esta, voy a estar ahí para ver el cielo despejarse contigo.',
    ],
    memory: 'Recuerdo compartido: cada conversación larga en la que me hiciste sentir que no estaba solo. Hoy me toca a mí acompañarte.',
  },
  {
    id: 'dudas',
    label: 'Léeme si dudas de ti',
    icon: Sparkles,
    title: 'Si pudieras verte con mis ojos',
    body: [
      'Verías a alguien valiente, inteligente y con un corazón enorme. Alguien que ha salido adelante de cosas que en su momento parecían imposibles.',
      'Tú fuiste quien me enseñó a perderle el miedo a abrirme. Si pudiste hacer eso por mí, imagina todo lo que puedes hacer por ti.',
      'Puedes dudar todo lo que quieras; yo voy a seguir creyendo en ti por los dos. Estoy muy, muy orgulloso de ti.',
    ],
    memory: 'Recuerdo compartido: la primera vez que me animé a contarte lo que sentía, y tú lo recibiste con tanta ternura.',
  },
  {
    id: 'sonreir',
    label: 'Léeme para sonreír',
    icon: Smile,
    title: 'Una sonrisita para ti',
    body: [
      'Dato importante: alguien por ahí está pensando en ti ahora mismo y sonriendo como tonto. Sí, ese soy yo.',
      'Piensa en nuestras risas sin sentido, en los mensajes a deshoras y en cómo una tontería nuestra puede alegrarme la semana entera.',
      'Si esta notita te sacó aunque sea una sonrisa pequeñita, misión cumplida. Y si no, pulsa el botón de “Te quiero” de abajo, que tengo más guardadas.',
    ],
    memory: 'Recuerdo compartido: cada vez que me reí contigo hasta olvidar lo que me preocupaba. Eres mi lugar feliz.',
  },
]

export function ComfortKit() {
  const { rain } = useExperience()
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    const willOpen = openId !== id
    setOpenId(willOpen ? id : null)
    if (willOpen) rain(18)
  }

  return (
    <section aria-labelledby="botiquin" className="relative px-4 py-20 sm:px-6">
      <div className="mx-auto mb-6 flex justify-center">
        <div className="animate-bob relative size-28 overflow-hidden rounded-full bg-white shadow-[0_0_40px_-6px_rgba(226,166,60,0.7)] ring-4 ring-white/80">
          <img
            src="/images/sanrio-friends.gif"
            alt=""
            width={380}
            height={300}
            loading="lazy"
            decoding="async"
            className="size-full object-contain p-2"
          />
        </div>
      </div>

      <SectionHeading
        id="botiquin"
        eyebrow="Apartado tres"
        title="Botiquín de ánimo para cuando lo necesites"
        intro="Abre la notita que vaya con lo que sientes ahora mismo. Puedes volver a leerlas todas las veces que quieras."
      />

      <div className="mx-auto mt-12 flex max-w-2xl flex-col gap-4">
        {notes.map(({ id, label, icon: Icon, title, body, memory }) => {
          const isOpen = id === openId
          const panelId = `nota-${id}`
          const buttonId = `boton-${id}`
          return (
            <div
              key={id}
              className={`overflow-hidden rounded-[1.75rem] border transition-shadow duration-300 ${
                isOpen
                  ? 'glass-card border-primary/30'
                  : 'border-white/80 bg-white/60 shadow-[0_18px_40px_-28px_rgba(150,70,110,0.55)]'
              }`}
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  onClick={() => toggle(id)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-white/50 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary sm:px-6 sm:py-5"
                >
                  <span
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isOpen ? 'btn-magic' : 'bg-[#fbe0e6] text-primary'
                    }`}
                  >
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="flex-1 font-script text-2xl leading-snug text-primary sm:text-3xl">{label}</span>
                  <ChevronDown
                    aria-hidden="true"
                    className={`size-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                  isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden" inert={!isOpen}>
                  <div className="relative px-6 pb-8 pt-2 sm:px-10">
                    <SparkleShape className="animate-twinkle absolute right-7 top-2 size-4 text-gold" />
                    <p className="text-xs uppercase tracking-[0.3em] text-accent">Una notita para ti</p>
                    <p className="text-glow mt-2 font-script text-3xl leading-tight text-primary text-balance sm:text-4xl">
                      {title}
                    </p>
                    <div className="mt-4 flex flex-col gap-4 text-[1.05rem] leading-8 text-foreground/85">
                      {body.map((p) => (
                        <p key={p} className="text-pretty">
                          {p}
                        </p>
                      ))}
                    </div>
                    <p className="mt-6 rounded-2xl bg-gradient-to-r from-[#efe5fb] via-[#fce1e4] to-[#ffecd4] px-5 py-4 text-pretty italic leading-relaxed text-foreground/80">
                      {memory}
                    </p>
                    <p className="mt-6 text-right font-script text-2xl text-primary">Con amor, siempre tuyo</p>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
