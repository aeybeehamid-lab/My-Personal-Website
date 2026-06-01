import { motion } from 'framer-motion'
import FadeIn from '../motion/FadeIn'

export default function StatsStrip({ stats }) {
  if (!stats?.length) return null

  return (
    <section className="border-b border-[var(--color-border)] bg-[var(--color-panel)]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px bg-[var(--color-border)] sm:grid-cols-4">
        {stats.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.05} className="bg-[var(--color-panel)]">
            <motion.div
              className="flex flex-col items-center justify-center px-4 py-8 text-center"
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <span className="text-2xl font-bold tracking-tight text-cyan-300 sm:text-3xl">
                {item.value}
              </span>
              <span className="mt-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)]">
                {item.label}
              </span>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
