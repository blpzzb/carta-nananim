import { SparkleShape } from './heart-shape'

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
}) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center text-center">
      <p className="flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-accent">
        <SparkleShape className="size-3 text-gold" />
        {eyebrow}
        <SparkleShape className="size-3 text-gold" />
      </p>
      <h2 id={id} className="text-glow mt-4 font-script text-5xl leading-tight text-primary text-balance sm:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-pretty text-lg italic leading-relaxed text-foreground/80">{intro}</p>}
    </div>
  )
}
