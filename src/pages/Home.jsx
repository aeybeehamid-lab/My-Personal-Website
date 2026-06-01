import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useSiteContent } from '../hooks/useSiteContent'
import Button from '../components/ui/Button'
import SectionHeading from '../components/ui/SectionHeading'
import ProjectCard from '../components/cards/ProjectCard'
import FadeIn from '../components/motion/FadeIn'
import StatsStrip from '../components/home/StatsStrip'

export default function Home() {
  const { content, getFeaturedProjects } = useSiteContent()
  const featured = getFeaturedProjects()

  return (
    <>
      <section className="relative overflow-hidden border-b border-[var(--color-border)]">
        <div className="grid-bg pointer-events-none absolute inset-0" />
        <div className="glow-accent pointer-events-none absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          {content.hero.availableForWork && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/5 px-3 py-1"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
              <span className="font-mono text-xs text-cyan-300/90">
                {content.hero.availabilityText}
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            {content.hero.greeting}{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-teal-200 bg-clip-text text-transparent">
              {content.personal.fullName.split(' ')[0]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="mt-4 font-mono text-sm text-amber-400/90 sm:text-base"
          >
            {content.personal.title} · {content.personal.location}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]"
          >
            {content.personal.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Button href={content.hero.ctaPrimary.href}>{content.hero.ctaPrimary.label}</Button>
            <Button variant="secondary" href={content.hero.ctaSecondary.href}>
              {content.hero.ctaSecondary.label}
            </Button>
            {content.personal.cvPdf && (
              <Button
                variant="ghost"
                href={content.personal.cvPdf}
                external
                className="!px-3"
              >
                {content.personal.cvLabel}
              </Button>
            )}
          </motion.div>
        </div>
      </section>

      <StatsStrip stats={content.stats} />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects that define my practice"
          description={content.summary}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <FadeIn className="mt-10 text-center">
          <Link to="/projects" className="text-sm font-medium text-cyan-400 hover:text-cyan-300">
            View all projects →
          </Link>
        </FadeIn>
      </section>

      <section className="border-t border-[var(--color-border)] bg-[var(--color-panel)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Quick links" title="Explore the full profile" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Experience', path: '/experience', desc: 'Field & engineering roles' },
              { label: 'Skills', path: '/skills', desc: 'Technical & project toolkit' },
              { label: 'Education', path: '/education', desc: 'Degrees & certifications' },
              { label: 'About', path: '/about', desc: 'Background & focus areas' },
            ].map((item, i) => (
              <FadeIn key={item.path} delay={i * 0.06}>
                <Link
                  to={item.path}
                  className="block rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel-elevated)] p-5 transition-colors hover:border-cyan-400/40"
                >
                  <h3 className="font-semibold text-white">{item.label}</h3>
                  <p className="mt-1 text-sm text-[var(--color-muted)]">{item.desc}</p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
