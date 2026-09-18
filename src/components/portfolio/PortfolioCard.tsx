import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { PortfolioProject } from '../../data/portfolio'
import './PortfolioCard.css'

interface PortfolioCardProps {
  project: PortfolioProject
  index: number
  onHoverChange: (hovering: boolean) => void
}

function PortfolioCard({ project, index, onHoverChange }: PortfolioCardProps) {
  return (
    <motion.div
      className={`portfolio-card portfolio-card--${project.format}`}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.75, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        to={`/portfolio/${project.id}`}
        className="portfolio-card__link"
        onMouseEnter={() => onHoverChange(true)}
        onMouseLeave={() => onHoverChange(false)}
      >
        <div
          className="portfolio-card__cover"
          style={
            project.image
              ? { backgroundImage: `url(${project.image})` }
              : { background: project.gradient }
          }
        />

        <span className="portfolio-card__year">{project.year}</span>
        <span className="portfolio-card__category">{project.category}</span>

        <div className="portfolio-card__overlay">
          <span className="portfolio-card__class">{project.classLabel}</span>
          <h3 className="portfolio-card__title">{project.title}</h3>
          <p className="portfolio-card__domain">{project.domain}</p>
          <p className="portfolio-card__description">{project.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

export default PortfolioCard
