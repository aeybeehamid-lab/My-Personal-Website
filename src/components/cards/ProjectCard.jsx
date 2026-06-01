import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState } from 'react'

const statusStyles = {
  completed: 'bg-emerald-500/15 text-emerald-300',
  ongoing: 'bg-amber-500/15 text-amber-300',
  research: 'bg-violet-500/15 text-violet-300',
}

function ProjectImage({ src, alt }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div className="flex h-full min-h-[140px] items-center justify-center bg-[var(--color-panel-elevated)]">
        <span className="font-mono text-xs text-[var(--color-muted)]">Add image in public/images/projects/</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className="h-full w-full object-cover"
      onError={() => setFailed(true)}
    />
  )
}

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-panel)]"
    >
      <div className="aspect-[16/10] overflow-hidden border-b border-[var(--color-border)]">
        <ProjectImage src={project.image} alt={project.title} />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center justify-between gap-2">
          <span
            className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${statusStyles[project.status] ?? statusStyles.completed}`}
          >
            {project.status}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-[var(--color-border)] px-2 py-0.5 font-mono text-[10px] text-slate-400"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to="/projects"
          className="mt-4 inline-flex items-center text-sm font-medium text-cyan-400 hover:text-cyan-300"
        >
          View details →
        </Link>
      </div>
    </motion.article>
  )
}
