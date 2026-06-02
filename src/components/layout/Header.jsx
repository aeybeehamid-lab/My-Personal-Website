import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useSiteContent } from '../../hooks/useSiteContent'
import { useResumeReader } from '../../context/ResumeReaderContext'

export default function Header() {
  const { content } = useSiteContent()
  const { pathname } = useLocation()
  const { folded } = useResumeReader()
  const [open, setOpen] = useState(false)
  const hideForReading = pathname === '/resume' && folded

  return (
    <motion.header
      initial={false}
      animate={{ y: hideForReading ? '-100%' : 0 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="site-header sticky top-0 z-50 border-b border-[var(--color-border)]/80 bg-[var(--color-ink)]/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="group flex flex-col">
          <span className="text-sm font-semibold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
            {content.personal.fullName.split(' ')[0]}
            <span className="text-cyan-400">.</span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
            {content.personal.title}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {content.navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `rounded-full px-3 py-1.5 text-sm transition-colors ${
                  isActive
                    ? 'bg-cyan-400/10 text-cyan-300'
                    : 'text-slate-400 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-medium text-[var(--color-ink)] hover:bg-cyan-300 transition-colors"
          >
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm text-slate-300"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          {open ? 'Close' : 'Menu'}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-[var(--color-border)] lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {content.navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `rounded-lg px-3 py-2 text-sm ${isActive ? 'bg-cyan-400/10 text-cyan-300' : 'text-slate-400'}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
