import { useState } from 'react'
import { useSiteContent } from '../hooks/useSiteContent'
import SectionHeading from '../components/ui/SectionHeading'
import FadeIn from '../components/motion/FadeIn'

function ProfilePhoto({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className="flex aspect-square w-full max-w-xs items-center justify-center rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-panel-elevated)]">
        <p className="px-4 text-center font-mono text-xs text-[var(--color-muted)]">
          Add photo: public/images/profile.jpg
        </p>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="aspect-square w-full max-w-xs rounded-2xl border border-[var(--color-border)] object-cover"
      onError={() => setFailed(true)}
    />
  )
}

export default function About() {
  const { content } = useSiteContent()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="About" title="Engineering with purpose" />

      <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
        <FadeIn>
          <ProfilePhoto src={content.personal.photo} alt={content.personal.fullName} />
          <ul className="mt-6 space-y-3">
            {content.about.highlights.map((h) => (
              <li
                key={h.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-3"
              >
                <p className="font-mono text-[10px] uppercase tracking-wider text-cyan-400/80">
                  {h.label}
                </p>
                <p className="mt-1 text-sm text-slate-200">{h.value}</p>
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="space-y-5">
          {content.about.paragraphs.map((para, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-[var(--color-muted)]">{para}</p>
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <p className="font-mono text-sm text-slate-400">
              Languages: {content.personal.languages.join(' · ')}
            </p>
          </FadeIn>
        </div>
      </div>

      <section className="mt-16">
        <SectionHeading
          eyebrow="Field experience"
          title="Practical exposure"
          description="Hands-on work beyond the classroom."
        />
        <ul className="grid gap-3 sm:grid-cols-2">
          {content.practicalExperience.map((item, i) => (
            <FadeIn key={item} delay={i * 0.04}>
              <li className="flex gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-3 text-sm text-slate-300">
                <span className="text-cyan-400">▸</span>
                {item}
              </li>
            </FadeIn>
          ))}
        </ul>
      </section>
    </div>
  )
}
