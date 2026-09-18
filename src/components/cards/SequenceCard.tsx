import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Sequence } from '../../data/sequences'

interface SequenceCardProps {
  sequence: Sequence
  index: number
}

function SequenceCard({ sequence, index }: SequenceCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.article
      layout
      className="sequence-card"
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="sequence-card__top">
        <span className="sequence-card__duree">{sequence.duree}</span>
        <ul className="sequence-card__competences">
          {sequence.competences.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <h3 className="sequence-card__title">{sequence.title}</h3>
      <p className="sequence-card__problematique">{sequence.problematique}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="details"
            className="sequence-card__details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="sequence-card__block">
              <span className="sequence-card__label">Objectifs</span>
              <ul>
                {sequence.objectifs.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>

            <div className="sequence-card__block">
              <span className="sequence-card__label">Consignes</span>
              <ul>
                {sequence.consignes.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="sequence-card__block">
              <span className="sequence-card__label">Références</span>
              <ul className="sequence-card__references">
                {sequence.references.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        className="sequence-card__toggle"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? 'Réduire' : 'Ouvrir la séquence'}
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 135 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          +
        </motion.span>
      </button>
    </motion.article>
  )
}

export default SequenceCard
