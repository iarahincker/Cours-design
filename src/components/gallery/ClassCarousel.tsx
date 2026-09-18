import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import GalleryClassCard from './GalleryClassCard'
import type { SchoolClass } from '../../data/classes'
import './ClassCarousel.css'

interface ClassCarouselProps {
  items: SchoolClass[]
}

function getSpacing(width: number) {
  if (width <= 640) return 150
  if (width <= 900) return 190
  return 235
}

function ClassCarousel({ items }: ClassCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [spacing, setSpacing] = useState(() =>
    getSpacing(typeof window === 'undefined' ? 1280 : window.innerWidth),
  )
  const stageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleResize() {
      setSpacing(getSpacing(window.innerWidth))
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)
  const springConfig = { stiffness: 60, damping: 20 }
  const stageRotateY = useSpring(useTransform(px, [0, 1], [5, -5]), springConfig)
  const stageRotateX = useSpring(useTransform(py, [0, 1], [-3, 3]), springConfig)

  const itemsKey = items.map((i) => i.id).join('|')

  useEffect(() => {
    setActiveIndex(0)
  }, [itemsKey])

  function handleStageMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = stageRef.current?.getBoundingClientRect()
    if (!bounds) return
    px.set((event.clientX - bounds.left) / bounds.width)
    py.set((event.clientY - bounds.top) / bounds.height)
  }

  function handleStageMouseLeave() {
    px.set(0.5)
    py.set(0.5)
  }

  if (items.length === 0) return null

  const safeIndex = Math.min(activeIndex, items.length - 1)

  return (
    <div className="class-carousel">
      <div className="class-carousel__scene">
        <motion.div
          ref={stageRef}
          className="class-carousel__stage"
          style={{ rotateX: stageRotateX, rotateY: stageRotateY }}
          onMouseMove={handleStageMouseMove}
          onMouseLeave={handleStageMouseLeave}
        >
          <div className="class-carousel__glow" aria-hidden="true" />
          {items.map((schoolClass, index) => (
            <GalleryClassCard
              key={schoolClass.id}
              schoolClass={schoolClass}
              offset={index - safeIndex}
              spacing={spacing}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </motion.div>
      </div>

      <div className="class-carousel__controls">
        <button
          type="button"
          className="class-carousel__arrow"
          onClick={() => setActiveIndex((i) => Math.max(i - 1, 0))}
          disabled={safeIndex === 0}
          aria-label="Classe précédente"
        >
          ←
        </button>

        <div className="class-carousel__progress">
          <span>{String(safeIndex + 1).padStart(2, '0')}</span>
          <span className="class-carousel__progress-track">
            <motion.span
              className="class-carousel__progress-fill"
              animate={{ width: `${((safeIndex + 1) / items.length) * 100}%` }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
          <span>{String(items.length).padStart(2, '0')}</span>
        </div>

        <button
          type="button"
          className="class-carousel__arrow"
          onClick={() => setActiveIndex((i) => Math.min(i + 1, items.length - 1))}
          disabled={safeIndex === items.length - 1}
          aria-label="Classe suivante"
        >
          →
        </button>
      </div>
    </div>
  )
}

export default ClassCarousel
