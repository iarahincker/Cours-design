import { Suspense, lazy } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useTilt } from '../../hooks/useTilt'
import FiliereMotif from '../FiliereMotif'
import { FILIERE_META } from '../../data/filieres'
import type { SchoolClass } from '../../data/classes'

const ClassGlyph3D = lazy(() => import('../scene/ClassGlyph3D'))

interface ClassCardProps {
  schoolClass: SchoolClass
  index: number
}

function ClassCard({ schoolClass, index }: ClassCardProps) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt<HTMLDivElement>({
    strength: 4,
  })
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const meta = FILIERE_META[schoolClass.filiere]

  return (
    <motion.article
      className={
        schoolClass.spanFeatured ? 'class-card class-card--featured' : 'class-card'
      }
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={ref}
        className="class-card__frame"
        style={{ rotateX, rotateY, transformPerspective: 1000 }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        whileHover={{ y: -6 }}
      >
        <div className="class-card__visual" style={{ background: meta.gradient }}>
          {schoolClass.glyph3D ? (
            <Suspense fallback={null}>
              {inView && (
                <div className="class-card__glyph3d">
                  <ClassGlyph3D filiere={schoolClass.filiere} />
                </div>
              )}
            </Suspense>
          ) : (
            <FiliereMotif motif={meta.motif} className="class-card__motif" />
          )}
          <span className="class-card__level">{schoolClass.levelLabel}</span>
        </div>

        <div className="class-card__body">
          <span className="class-card__filiere">
            <span className="class-card__dot" style={{ background: meta.dot }} />
            {schoolClass.filiere}
          </span>

          <h3 className="class-card__title">{schoolClass.name}</h3>
          <p className="class-card__description">{schoolClass.description}</p>

          <Link to={`/mes-cours/${schoolClass.id}`} className="class-card__cta">
            Voir les cours <span aria-hidden="true">→</span>
          </Link>
        </div>
      </motion.div>
    </motion.article>
  )
}

export default ClassCard
