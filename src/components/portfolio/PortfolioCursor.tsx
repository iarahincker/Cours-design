import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import './PortfolioCursor.css'

interface PortfolioCursorProps {
  label: string | null
}

function PortfolioCursor({ label }: PortfolioCursorProps) {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 320, damping: 30 })
  const springY = useSpring(y, { stiffness: 320, damping: 30 })

  useEffect(() => {
    function handleMove(event: MouseEvent) {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  return (
    <motion.div className="portfolio-cursor-wrap" style={{ x: springX, y: springY }}>
      <motion.div
        className="portfolio-cursor"
        animate={{ scale: label ? 1 : 0, opacity: label ? 1 : 0 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      >
        {label}
      </motion.div>
    </motion.div>
  )
}

export default PortfolioCursor
