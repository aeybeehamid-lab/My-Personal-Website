import { motion } from 'framer-motion'

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  y = 24,
  as: Tag = 'div',
}) {
  const MotionTag = motion[Tag] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
