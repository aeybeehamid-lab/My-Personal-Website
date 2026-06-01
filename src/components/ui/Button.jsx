import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const base =
  'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-400'

const variants = {
  primary: `${base} bg-cyan-400 text-[var(--color-ink)] hover:bg-cyan-300`,
  secondary: `${base} border border-[var(--color-border)] bg-[var(--color-panel)] text-slate-200 hover:border-cyan-400/40 hover:bg-[var(--color-panel-elevated)]`,
  ghost: `${base} text-slate-300 hover:text-white`,
}

export default function Button({ variant = 'primary', href, external, children, className = '' }) {
  const classes = `${variants[variant]} ${className}`

  if (href && external) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    )
  }

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
        <Link to={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type="button"
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  )
}
