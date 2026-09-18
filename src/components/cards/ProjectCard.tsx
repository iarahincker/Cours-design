import { useRef, type MouseEvent } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { Project } from '../../data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)
  const springConfig = { stiffness: 200, damping: 22, mass: 0.4 }
  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), springConfig)
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), springConfig)
  const glareX = useTransform(x, [0, 1], ['0%', '100%'])
  const glareY = useTransform(y, [0, 1], ['0%', '100%'])

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = ref.current?.getBoundingClientRect()
    if (!bounds) return
    x.set((event.clientX - bounds.left) / bounds.width)
    y.set((event.clientY - bounds.top) / bounds.height)
  }

  function handleMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return (
    <motion.article
      className={project.featured ? 'project-card project-card--featured' : 'project-card'}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.75, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={ref}
        className="project-card__frame"
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.015 }}
      >
        <motion.div
          className="project-card__visual"
          style={{ background: project.gradient }}
        >
          <motion.div
            className="project-card__glare"
            style={{ left: glareX, top: glareY }}
          />
          <span className="project-card__year">{project.year}</span>
        </motion.div>

        <div className="project-card__overlay">
          <span className="project-card__category">{project.category}</span>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
          <span className="project-card__link">
            Voir le projet <span aria-hidden="true">→</span>
          </span>
        </div>
      </motion.div>
    </motion.article>
  )
}

export default ProjectCard
