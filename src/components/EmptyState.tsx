import { motion } from 'framer-motion'
import './EmptyState.css'

interface EmptyStateProps {
  title: string
  hint: string
}

function EmptyState({ title, hint }: EmptyStateProps) {
  return (
    <motion.div
      className="empty-state"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="empty-state__title">{title}</span>
      <p className="empty-state__hint">{hint}</p>
    </motion.div>
  )
}

export default EmptyState
