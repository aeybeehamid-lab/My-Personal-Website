import { useSiteContent } from '../hooks/useSiteContent'
import SectionHeading from '../components/ui/SectionHeading'
import FadeIn from '../components/motion/FadeIn'

export default function Skills() {
  const { content } = useSiteContent()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Capabilities"
        title="Skills & tools"
        description="Technical, field, and collaboration strengths."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {content.skills.map((group, i) => (
          <FadeIn key={group.category} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6">
              <h3 className="font-mono text-sm text-cyan-400">{group.category}</h3>
              <ul className="mt-4 space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-sm text-slate-300 before:content-['']"
                  >
                    <span className="text-cyan-500/60">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
