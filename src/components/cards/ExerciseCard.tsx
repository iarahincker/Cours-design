import { motion } from 'framer-motion'
import type { Exercise } from '../../data/exercises'

interface ExerciseCardProps {
  exercise: Exercise
  index: number
}

function ExerciseCard({ exercise, index }: ExerciseCardProps) {
  return (
    <motion.article
      className="exercise-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -3 }}
    >
      <span className="exercise-card__duree">{exercise.duree}</span>
      <h3 className="exercise-card__title">{exercise.title}</h3>
      <p className="exercise-card__description">{exercise.description}</p>
    </motion.article>
  )
}

export default ExerciseCard
