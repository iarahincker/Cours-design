import { motion } from 'framer-motion'
import type { Evaluation } from '../../data/evaluations'

const TYPE_CLASS: Record<Evaluation['type'], string> = {
  Formative: 'evaluation-card--formative',
  Sommative: 'evaluation-card--sommative',
  Certificative: 'evaluation-card--certificative',
}

interface EvaluationCardProps {
  evaluation: Evaluation
  index: number
}

function EvaluationCard({ evaluation, index }: EvaluationCardProps) {
  return (
    <motion.article
      className={`evaluation-card ${TYPE_CLASS[evaluation.type]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
    >
      <div className="evaluation-card__top">
        <span className="evaluation-card__type">{evaluation.type}</span>
        <span className="evaluation-card__periode">{evaluation.periode}</span>
      </div>
      <h3 className="evaluation-card__title">{evaluation.title}</h3>
      <p className="evaluation-card__description">{evaluation.description}</p>
      <ul className="evaluation-card__competences">
        {evaluation.competences.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </motion.article>
  )
}

export default EvaluationCard
