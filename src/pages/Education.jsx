import { useSiteContent } from '../hooks/useSiteContent'
import SectionHeading from '../components/ui/SectionHeading'
import FadeIn from '../components/motion/FadeIn'

export default function Education() {
  const { content } = useSiteContent()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="Learning" title="Education" />

      <div className="space-y-4">
        {content.education.map((edu, i) => (
          <FadeIn key={edu.degree} delay={i * 0.06}>
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] p-5 sm:p-6">
              <p className="font-mono text-xs text-amber-400/90">{edu.period}</p>
              <h3 className="mt-1 text-lg font-semibold text-white">{edu.degree}</h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">{edu.school}</p>
            </div>
          </FadeIn>
        ))}
      </div>

      <div className="mt-16">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <ul className="space-y-3">
          {content.certifications.map((cert, i) => (
            <FadeIn key={cert} delay={i * 0.04}>
              <li className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-elevated)] px-4 py-3 text-sm text-slate-300">
                {cert}
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </div>
  )
}
