import { useSiteContent } from '../hooks/useSiteContent'
import SectionHeading from '../components/ui/SectionHeading'
import FadeIn from '../components/motion/FadeIn'

export default function Experience() {
  const { content } = useSiteContent()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Career"
        title="Work experience"
        description="Installations, internships, training, and product co-founding."
      />

      <div className="relative border-l border-[var(--color-border)] pl-6 sm:pl-8">
        {content.experience.map((job, i) => (
          <FadeIn key={`${job.role}-${i}`} delay={i * 0.07} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[calc(1.5rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-cyan-400 bg-[var(--color-ink)] sm:-left-[calc(2rem+5px)]" />
            <p className="font-mono text-xs text-cyan-400/90">{job.period}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{job.role}</h3>
            <p className="mt-1 text-sm text-[var(--color-muted)]">{job.company}</p>
            <ul className="mt-4 space-y-2">
              {job.bullets.map((b) => (
                <li key={b} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                  <span className="shrink-0 text-amber-400/80">▸</span>
                  {b}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
