type HeartShapeProps = {
  className?: string
  style?: React.CSSProperties
}

export function HeartShape({ className, style }: HeartShapeProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style} fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export function WithHearts({ text }: { text: string }) {
  const parts = text.split('♡')
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 && (
            <>
              <HeartShape className="inline-block size-[0.8em] -translate-y-[0.05em] align-middle text-primary" />
              <span className="sr-only">corazón</span>
            </>
          )}
        </span>
      ))}
    </>
  )
}

export function StarShape({ className, style }: HeartShapeProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style} fill="currentColor">
      <path d="M12 2l2.9 6.26 6.85.74-5.1 4.64 1.43 6.74L12 16.97l-6.08 3.41 1.43-6.74-5.1-4.64 6.85-.74L12 2z" />
    </svg>
  )
}

export function SparkleShape({ className, style }: HeartShapeProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} style={style} fill="currentColor">
      <path d="M12 0c.6 5.4 2.2 9.4 12 12-9.8 2.6-11.4 6.6-12 12-.6-5.4-2.2-9.4-12-12C9.8 9.4 11.4 5.4 12 0z" />
    </svg>
  )
}
