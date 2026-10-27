import { HeartShape, SparkleShape, WithHearts } from './heart-shape'

const SHORT_LINE = 110

export function Letter({ paragraphs }: { paragraphs: string[] }) {
  const [greeting, ...rest] = paragraphs
  const signature = rest.pop()
  const firstLongIndex = rest.findIndex((p) => p.length >= SHORT_LINE)

  return (
    <section id="carta" aria-labelledby="carta-title" className="relative scroll-mt-8 px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-2xl">
        <div className="glass-card relative rounded-[2rem] px-6 pb-12 pt-16 sm:px-14 sm:pb-16 sm:pt-20">
          <div className="absolute -top-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full btn-magic px-5 py-2">
            <SparkleShape className="size-3.5" />
            <span className="text-xs font-medium uppercase tracking-[0.3em]">Carta</span>
            <SparkleShape className="size-3.5" />
          </div>

          <h2 id="carta-title" className="sr-only">
            Carta para Nananim
          </h2>

          <p className="text-glow font-script text-4xl text-primary sm:text-5xl">
            <WithHearts text={greeting} />
          </p>

          <div className="mt-8 flex flex-col gap-6 text-[1.05rem] leading-8 text-foreground/90 sm:text-lg sm:leading-9">
            {rest.map((p, i) =>
              p.length < SHORT_LINE ? (
                <p
                  key={i}
                  className="my-3 text-center font-script text-2xl leading-snug text-primary text-balance sm:text-3xl"
                >
                  <WithHearts text={p} />
                </p>
              ) : (
                <p
                  key={i}
                  className={`text-pretty ${
                    i === firstLongIndex
                      ? 'first-letter:float-left first-letter:mr-3 first-letter:font-script first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-primary'
                      : ''
                  }`}
                >
                  {p}
                </p>
              ),
            )}
          </div>

          <div className="mt-14 flex items-center justify-center gap-3 text-accent" aria-hidden="true">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-accent/70" />
            <SparkleShape className="size-3" />
            <HeartShape className="size-5 text-[#e57a9b]" />
            <SparkleShape className="size-3" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-accent/70" />
          </div>

          {signature && (
            <p className="text-glow mt-10 text-right font-script text-3xl text-primary text-balance sm:text-4xl">
              <WithHearts text={signature} />
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
