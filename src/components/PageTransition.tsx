import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const variants = {
  initial: { opacity: 0, y: 18 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -14,
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.main variants={variants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.main>
  )
}

export default PageTransition
