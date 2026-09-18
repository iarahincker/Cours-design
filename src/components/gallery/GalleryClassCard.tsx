import { Suspense, lazy, type KeyboardEvent } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import FiliereMotif from '../FiliereMotif'
import { FILIERE_META } from '../../data/filieres'
import type { SchoolClass } from '../../data/classes'

const ClassGlyph3D = lazy(() => import('../scene/ClassGlyph3D'))

interface GalleryClassCardProps {
  schoolClass: SchoolClass
  offset: number
  spacing: number
  onSelect: () => void
}

function GalleryClassCard({ schoolClass, offset, spacing, onSelect }: GalleryClassCardProps) {
  const navigate = useNavigate()
  const isActive = offset === 0
  const abs = Math.abs(offset)
  const meta = FILIERE_META[schoolClass.filiere]

  const scale = isActive ? 1.25 : Math.max(0.4, 0.8 - abs * 0.16)
  const clampedOffset = Math.max(-3, Math.min(3, offset))
  const rotateY = clampedOffset * -13
  const opacity = abs > 4 ? 0 : Math.max(0.18, 1 - abs * 0.24)
  const blur = Math.min(abs * 0.7, 3)
  const zIndex = 100 - abs

  function activate() {
    if (isActive) {
      navigate(`/mes-cours/${schoolClass.id}`)
    } else {
      onSelect()
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      activate()
    }
  }

  return (
    <motion.div
      className={isActive ? 'gallery-card gallery-card--active' : 'gallery-card'}
      style={{ zIndex }}
      animate={{
        x: offset * spacing,
        scale,
        rotateY,
        opacity,
        filter: `blur(${blur}px)`,
      }}
      transition={{ type: 'spring', stiffness: 220, damping: 30, mass: 0.7 }}
      whileHover={
        isActive
          ? { y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }
          : {
              scale: scale + 0.1,
              opacity: 1,
              filter: 'blur(0px)',
              y: -10,
              transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
            }
      }
      onClick={activate}
      onKeyDown={handleKeyDown}
      role="button"
      aria-label={isActive ? `Ouvrir ${schoolClass.name}` : `Centrer sur ${schoolClass.name}`}
      tabIndex={abs > 2 ? -1 : 0}
      aria-hidden={abs > 2}
    >
      <div className="gallery-card__visual" style={{ background: meta.gradient }}>
        {isActive ? (
          <Suspense fallback={<FiliereMotif motif={meta.motif} className="gallery-card__motif" />}>
            <div className="gallery-card__glyph3d">
              <ClassGlyph3D filiere={schoolClass.filiere} />
            </div>
          </Suspense>
        ) : (
          <FiliereMotif motif={meta.motif} className="gallery-card__motif" />
        )}
        <span className="gallery-card__level">{schoolClass.levelLabel}</span>
      </div>

      <div className="gallery-card__body">
        <span className="gallery-card__filiere">
          <span className="gallery-card__dot" style={{ background: meta.dot }} />
          {schoolClass.filiere}
        </span>
        <h3 className="gallery-card__title">{schoolClass.name}</h3>
        <p className="gallery-card__tagline">{schoolClass.tagline}</p>

        {isActive && (
          <motion.span
            className="gallery-card__cta"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            Voir les cours <span aria-hidden="true">→</span>
          </motion.span>
        )}
      </div>
    </motion.div>
  )
}

export default GalleryClassCard
