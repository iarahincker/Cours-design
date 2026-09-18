import { motion } from 'framer-motion'
import type { Resource } from '../../data/resources'
import './ResourceCard.css'

const CATEGORY_CLASS: Record<Resource['category'], string> = {
  Vocabulaire: 'resource-card--vocabulaire',
  Références: 'resource-card--references',
  'Artistes & designers': 'resource-card--artistes',
  Méthodes: 'resource-card--methodes',
  'Ressources pédagogiques': 'resource-card--pedagogie',
}

interface ResourceCardProps {
  resource: Resource
}

function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <motion.article
      layout
      className={`resource-card ${CATEGORY_CLASS[resource.category]}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
    >
      <span className="resource-card__dot" aria-hidden="true" />
      <span className="resource-card__category">{resource.category}</span>
      <h3 className="resource-card__title">{resource.title}</h3>
      <p className="resource-card__description">{resource.description}</p>
    </motion.article>
  )
}

export default ResourceCard
