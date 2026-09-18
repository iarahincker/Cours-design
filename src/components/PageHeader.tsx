import { motion } from 'framer-motion'
import './PageHeader.css'

interface PageHeaderProps {
  eyebrow: string
  title: string
  lead: string
}

function PageHeader({ eyebrow, title, lead }: PageHeaderProps) {
  return (
    <header className="page-header">
      <motion.span
        className="page-header__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {eyebrow}
      </motion.span>

      <motion.h1
        className="page-header__title"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h1>

      <motion.p
        className="page-header__lead"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      >
        {lead}
      </motion.p>
    </header>
  )
}

export default PageHeader
