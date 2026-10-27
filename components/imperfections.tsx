import { HeartShape, SparkleShape } from './heart-shape'
import { SectionHeading } from './section-heading'

const flaws = [
  {
    flaw: 'Cuando dudas de ti',
    love: 'Yo veo a alguien que se cuestiona porque le importa hacer las cosas bien. Tus dudas no te restan, solo demuestran lo mucho que te esfuerzas.',
  },
  {
    flaw: 'Cuando te sientes vulnerable',
    love: 'Que me dejes verte así es de las cosas más bonitas que me has regalado. Tu sensibilidad no es fragilidad: es tu forma de sentir el mundo con el corazón abierto.',
  },
  {
    flaw: 'Cuando tienes días difíciles',
    love: 'No tienes que estar bien siempre para que te quiera. En tus días grises te quiero igual, y si hace falta, me siento contigo a esperar que salga el sol.',
  },
  {
    flaw: 'Cuando crees que eres demasiado',
    love: 'Nunca eres demasiado para mí. Tus emociones, tus miedos, tus pensamientos a las 3 a. m.: todo cabe aquí, conmigo.',
  },
]

export function Imperfections() {
  return (
    <section aria-labelledby="defectos" className="relative px-4 py-20 sm:px-6">
      <SectionHeading
        id="defectos"
        eyebrow="Apartado dos"
        title="Tus “defectos” que yo amo"
        intro="No necesitas ser perfecta para merecer amor. Te quiero en todas tus versiones, incluso en las que tú no te quieres tanto."
      />

      <div className="glass-card mx-auto mt-14 max-w-3xl rounded-[2rem] p-6 sm:p-12">
        <ol className="flex flex-col">
          {flaws.map(({ flaw, love }, i) => (
            <li
              key={flaw}
              className="flex flex-col gap-3 border-b border-primary/10 py-7 first:pt-0 last:border-0 last:pb-0 sm:flex-row sm:gap-8"
            >
              <div className="flex shrink-0 items-center gap-3 sm:w-56 sm:flex-col sm:items-start sm:gap-2">
                <span className="flex size-9 items-center justify-center rounded-full bg-[#fbe0e6] text-primary">
                  <HeartShape className="size-4" />
                </span>
                <p className="font-script text-2xl leading-tight text-primary sm:text-[1.7rem]">
                  <span className="sr-only">{`${i + 1}. `}</span>
                  {flaw}
                </p>
              </div>
              <p className="text-pretty text-[1.05rem] leading-8 text-foreground/85">{love}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-[#efe5fb] via-[#fce1e4] to-[#ffecd4] p-6 text-center">
          <SparkleShape className="mx-auto size-5 text-gold" aria-hidden="true" />
          <p className="mt-2 font-script text-3xl leading-snug text-primary text-balance">
            Tu valor no cambia en tus días malos.
          </p>
          <p className="mt-2 text-pretty text-foreground/80">
            Sigues siendo la misma persona increíble de la que me enamoré.
          </p>
        </div>
      </div>
    </section>
  )
}
