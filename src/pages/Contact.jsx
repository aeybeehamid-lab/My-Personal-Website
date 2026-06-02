import { useSiteContent } from '../hooks/useSiteContent'
import SectionHeading from '../components/ui/SectionHeading'
import FadeIn from '../components/motion/FadeIn'
import Button from '../components/ui/Button'

export default function Contact() {
  const { content } = useSiteContent()
  const { personal, social, contact } = content

  const socialLinks = [
    { label: 'GitHub', url: social.github },
    { label: 'LinkedIn', url: social.linkedin },
    { label: 'Paychat', url: social.paychat },
  ].filter((s) => s.url)

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title={contact.headline}
        description={contact.subtext}
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <FadeIn>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6 glow-accent">
            <h3 className="font-semibold text-white">Direct</h3>
            <dl className="mt-4 space-y-4 text-sm">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                  Email
                </dt>
                <dd>
                  <a
                    href={`mailto:${personal.email}`}
                    className="text-cyan-400 hover:text-cyan-300"
                  >
                    {personal.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                  Location
                </dt>
                <dd className="text-slate-300">{personal.location}</dd>
              </div>
              {personal.showPhone && personal.phone && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                    Phone
                  </dt>
                  <dd className="text-slate-300">{personal.phone}</dd>
                </div>
              )}
            </dl>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href={`mailto:${personal.email}`} external>
                Send email
              </Button>
              <Button href={content.resume.viewPath}>{content.resume.viewLabel}</Button>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)] p-6">
            <h3 className="font-semibold text-white">Profiles</h3>
            {socialLinks.length > 0 ? (
              <ul className="mt-4 space-y-2">
                {socialLinks.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300"
                    >
                      {s.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-[var(--color-muted)]">
                Add your GitHub and LinkedIn URLs in{' '}
                <code className="rounded bg-[var(--color-panel-elevated)] px-1.5 py-0.5 font-mono text-xs text-cyan-300">
                  src/content/siteContent.js
                </code>{' '}
                under <code className="font-mono text-xs">social</code>.
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </div>
  )
}
