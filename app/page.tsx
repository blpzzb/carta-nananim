import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { Experience } from '@/components/experience'
import { FinalDedication } from '@/components/final-dedication'
import { FloatingBackground } from '@/components/floating-background'
import { Hero } from '@/components/hero'
import { Letter } from '@/components/letter'
import { ComfortKit } from '@/components/comfort-kit'
import { Imperfections } from '@/components/imperfections'
import { ThingsYouDo } from '@/components/things-you-do'

async function getLetterParagraphs() {
  const raw = await readFile(path.join(process.cwd(), 'content', 'carta.txt'), 'utf8')
  return raw
    .split(/\r?\n\s*\r?\n/)
    .map((p) => p.replace(/\s+/g, ' ').trim())
    .filter(Boolean)
}

export default async function Page() {
  const paragraphs = await getLetterParagraphs()

  return (
    <Experience>
      <FloatingBackground />
      <div
        aria-hidden="true"
        className="scroll-progress fixed inset-x-0 top-0 z-30 h-1 bg-gradient-to-r from-accent via-primary to-ember"
      />
      <main className="relative z-10">
        <Hero />
        <Letter paragraphs={paragraphs} />
        <ThingsYouDo />
        <Imperfections />
        <ComfortKit />
        <FinalDedication />
      </main>
    </Experience>
  )
}
