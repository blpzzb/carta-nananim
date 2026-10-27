import { HandHeart, House, MessageCircleHeart, Sun } from 'lucide-react'
import { SectionHeading } from './section-heading'

const things = [
  {
    icon: MessageCircleHeart,
    title: 'Me enseñaste a decir lo que siento',
    text: 'Antes me daba miedo abrir el corazón, guardaba todo por miedo a ser demasiado. Contigo aprendí que lo que siento merece ser dicho, y que decirlo en voz alta no me hace débil, me hace libre.',
    tint: 'from-[#efe5fb] to-white',
    iconTint: 'bg-[#e6dafa] text-accent',
  },
  {
    icon: Sun,
    title: 'Eres mi paz en los días pesados',
    text: 'Hay días en los que todo pesa, y aun así basta un mensaje tuyo para que el mundo baje el volumen. No sé cómo lo haces, pero contigo el caos se vuelve más pequeño y el cielo un poquito más claro.',
    tint: 'from-[#fff1dc] to-white',
    iconTint: 'bg-[#ffe7c4] text-[#b9781f]',
  },
  {
    icon: House,
    title: 'Eres mi refugio',
    text: 'Contigo no necesito fingir que estoy bien ni ser alguien que no soy. Puedo llegar cansado, confundido o roto, y aun así siento que estoy en casa. Ese lugar seguro eres tú.',
    tint: 'from-[#fde3e8] to-white',
    iconTint: 'bg-[#fbd3dc] text-primary',
  },
  {
    icon: HandHeart,
    title: 'Haces que quiera ser mejor',
    text: 'No porque me lo pidas, sino porque a tu lado me dan ganas de crecer, de cuidarte bonito y de ser alguien de quien te sientas orgullosa. Me inspiras sin siquiera intentarlo.',
    tint: 'from-[#f3e6f7] to-white',
    iconTint: 'bg-[#ecd7f3] text-[#93549f]',
  },
]

export function ThingsYouDo() {
  return (
    <section aria-labelledby="sin-darte-cuenta" className="relative px-4 py-20 sm:px-6">
      <SectionHeading
        id="sin-darte-cuenta"
        eyebrow="Apartado uno"
        title="Lo que haces por mí sin darte cuenta"
        intro="Pequeñas cosas que para ti quizá son normales, pero que a mí me cambiaron la vida."
      />

      <ul className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
        {things.map(({ icon: Icon, title, text, tint, iconTint }, i) => (
          <li
            key={title}
            className={`group relative overflow-hidden rounded-[1.75rem] border border-white/80 bg-gradient-to-br ${tint} p-7 shadow-[0_24px_60px_-34px_rgba(150,70,110,0.55)] transition-transform duration-300 hover:-translate-y-1 sm:p-8`}
          >
            <span
              aria-hidden="true"
              className="absolute right-6 top-5 font-script text-5xl leading-none text-primary/15"
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className={`flex size-12 items-center justify-center rounded-2xl ${iconTint}`}>
              <Icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-script text-3xl leading-tight text-primary text-balance">{title}</h3>
            <p className="mt-3 text-pretty leading-relaxed text-foreground/85">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
