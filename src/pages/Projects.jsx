import { useSiteContent } from '../hooks/useSiteContent'
import SectionHeading from '../components/ui/SectionHeading'
import FadeIn from '../components/motion/FadeIn'

export default function Projects() {
  const { content } = useSiteContent()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects & research"
        description="Hardware, power, embedded systems, fintech, and ongoing research."
      />

      <div className="space-y-8">
        {content.projects.map((project, i) => (
          <FadeIn key={project.slug} delay={i * 0.05}>
            <article
              id={project.slug}
              className="scroll-mt-24 rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-400/80">
                    {project.status}
                  </span>
                  <h3 className="mt-1 text-2xl font-semibold text-white">{project.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-[10px] text-slate-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{project.description}</p>

              {project.highlights?.length > 0 && (
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((h) => (
                    <li key={h} className="flex gap-2 text-sm text-slate-300">
                      <span className="text-amber-400">—</span>
                      {h}
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-5 flex flex-wrap gap-3">
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-cyan-400 hover:text-cyan-300"
                  >
                    Live demo ↗
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-cyan-400 hover:text-cyan-300"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.links.writeup && (
                  <a
                    href={project.links.writeup}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-cyan-400 hover:text-cyan-300"
                  >
                    Write-up ↗
                  </a>
                )}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
