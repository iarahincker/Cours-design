import { motion } from 'framer-motion'
import { useTilt } from '../../hooks/useTilt'
import type { Project } from '../../data/projects'
import './ProjectCard.css'

interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const { ref, rotateX, rotateY, glareX, glareY, onMouseMove, onMouseLeave } =
    useTilt<HTMLDivElement>()

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
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
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
