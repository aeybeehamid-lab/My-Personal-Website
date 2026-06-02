import { Link } from 'react-router-dom'
import { useSiteContent } from '../../hooks/useSiteContent'

export default function Footer() {
  const { content } = useSiteContent()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-panel)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">{content.personal.fullName}</p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{content.personal.title}</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href={`mailto:${content.personal.email}`}
            className="text-cyan-400 hover:text-cyan-300"
          >
            {content.personal.email}
          </a>
          <Link to="/contact" className="text-slate-400 hover:text-white">
            Contact page
          </Link>
        </div>
        <div className="text-right">
          <p className="font-mono text-xs text-[var(--color-muted)]">© {year}</p>
          {content.site.deployTag && (
            <p className="mt-1 font-mono text-[10px] text-[var(--color-muted)]/70">
              build {content.site.deployTag}
            </p>
          )}
        </div>
      </div>
    </footer>
  )
}
