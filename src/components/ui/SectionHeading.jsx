import FadeIn from '../motion/FadeIn'

export default function SectionHeading({ eyebrow, title, description }) {
  return (
    <FadeIn className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400/90">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-[var(--color-muted)]">
          {description}
        </p>
      )}
    </FadeIn>
  )
}
