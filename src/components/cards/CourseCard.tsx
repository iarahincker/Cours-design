import { motion } from 'framer-motion'
import type { Course } from '../../data/courses'

interface CourseCardProps {
  course: Course
  index: number
  featured?: boolean
}

function CourseCard({ course, index, featured }: CourseCardProps) {
  return (
    <motion.article
      className={featured ? 'course-card course-card--featured' : 'course-card'}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover="hover"
    >
      <motion.div
        className="course-card__swatch"
        style={{ background: course.accent }}
        variants={{ hover: { scale: 1.06 } }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      <div className="course-card__body">
        <div className="course-card__top">
          <span className="course-card__index">{course.index}</span>
          <ul className="course-card__tags">
            {course.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>

        <h3 className="course-card__title">{course.title}</h3>
        <p className="course-card__description">{course.description}</p>

        <motion.span
          className="course-card__cta"
          variants={{ hover: { x: 6 } }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          Voir le programme <span aria-hidden="true">→</span>
        </motion.span>
      </div>
    </motion.article>
  )
}

export default CourseCard
