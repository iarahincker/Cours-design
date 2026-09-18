import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import ClassCard from '../components/cards/ClassCard'
import EmptyState from '../components/EmptyState'
import { classes, SECTIONS, type Section } from '../data/classes'
import { FILIERE_FILTERS, type Filiere } from '../data/filieres'
import './MesCours.css'

const LEVEL_FILTERS: Array<Section | 'Tout'> = ['Tout', ...SECTIONS]
const FILIERE_FILTER_OPTIONS: Array<Filiere | 'Tout'> = ['Tout', ...FILIERE_FILTERS]

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

function MesCours() {
  const [levelFilter, setLevelFilter] = useState<Section | 'Tout'>('Tout')
  const [filiereFilter, setFiliereFilter] = useState<Filiere | 'Tout'>('Tout')
  const [search, setSearch] = useState('')

  const visibleSections = levelFilter === 'Tout' ? SECTIONS : [levelFilter]

  const query = normalize(search.trim())

  const bySection = useMemo(() => {
    return visibleSections.map((section) => {
      const items = classes.filter((c) => {
        if (c.section !== section) return false
        if (filiereFilter !== 'Tout' && c.filiere !== filiereFilter) return false
        if (query && !normalize(`${c.name} ${c.description} ${c.filiere}`).includes(query)) {
          return false
        }
        return true
      })
      return { section, items }
    })
  }, [visibleSections, filiereFilter, query])

  const totalResults = bySection.reduce((sum, s) => sum + s.items.length, 0)

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Portail pédagogique"
        title="Mes cours"
        lead="Toutes les classes, du CAP au BTS : séquences, projets, exercices, ressources et évaluations, organisés par niveau et par filière."
      />

      <section className="mes-cours">
        <div className="mes-cours__filters">
          <div className="mes-cours__filter-row" role="tablist" aria-label="Filtrer par niveau">
            {LEVEL_FILTERS.map((level) => (
              <button
                key={level}
                type="button"
                role="tab"
                aria-selected={levelFilter === level}
                className="mes-cours__filter"
                onClick={() => setLevelFilter(level)}
              >
                {levelFilter === level && (
                  <motion.span
                    layoutId="mescours-level-active"
                    className="mes-cours__filter-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="mes-cours__filter-label">{level}</span>
              </button>
            ))}
          </div>

          <div className="mes-cours__filter-row" role="tablist" aria-label="Filtrer par filière">
            {FILIERE_FILTER_OPTIONS.map((filiere) => (
              <button
                key={filiere}
                type="button"
                role="tab"
                aria-selected={filiereFilter === filiere}
                className="mes-cours__filter mes-cours__filter--ghost"
                onClick={() => setFiliereFilter(filiere)}
              >
                {filiereFilter === filiere && (
                  <motion.span
                    layoutId="mescours-filiere-active"
                    className="mes-cours__filter-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="mes-cours__filter-label">{filiere}</span>
              </button>
            ))}
          </div>

          <input
            type="search"
            className="mes-cours__search"
            placeholder="Rechercher une classe…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Rechercher une classe"
          />
        </div>

        {totalResults === 0 ? (
          <EmptyState
            title="Aucune classe ne correspond"
            hint="Essayez un autre niveau, une autre filière, ou modifiez votre recherche."
          />
        ) : (
          bySection.map(
            ({ section, items }) =>
              items.length > 0 && (
                <div className="mes-cours__section" key={section}>
                  <motion.h2
                    className="mes-cours__section-title"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {section}
                  </motion.h2>
                  <div className="mes-cours__grid">
                    {items.map((schoolClass, index) => (
                      <ClassCard key={schoolClass.id} schoolClass={schoolClass} index={index} />
                    ))}
                  </div>
                </div>
              ),
          )
        )}
      </section>
    </PageTransition>
  )
}

export default MesCours
