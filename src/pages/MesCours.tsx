import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'
import ClassCarousel from '../components/gallery/ClassCarousel'
import { classes, type SchoolClass } from '../data/classes'
import { FILIERE_FILTERS, type Filiere } from '../data/filieres'
import './MesCours.css'

const FILTERS = ['Toutes', 'Seconde', 'Première', 'Terminale', '3PM', 'BTS ESF'] as const
type FilterValue = (typeof FILTERS)[number]

const FILIERE_OPTIONS: Array<Filiere | 'Toutes'> = ['Toutes', ...FILIERE_FILTERS]

function matchesFilter(schoolClass: SchoolClass, filter: FilterValue) {
  if (filter === 'Toutes') return true
  if (filter === '3PM') return schoolClass.filiere === '3PM'
  if (filter === 'BTS ESF') return schoolClass.filiere === 'BTS ESF'
  return (
    schoolClass.section === filter &&
    schoolClass.filiere !== '3PM' &&
    schoolClass.filiere !== 'BTS ESF'
  )
}

function normalize(value: string) {
  return value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

function MesCours() {
  const [filter, setFilter] = useState<FilterValue>('Toutes')
  const [filiereFilter, setFiliereFilter] = useState<Filiere | 'Toutes'>('Toutes')
  const [search, setSearch] = useState('')

  const query = normalize(search.trim())

  const filtered = useMemo(() => {
    return classes.filter((c) => {
      if (!matchesFilter(c, filter)) return false
      if (filiereFilter !== 'Toutes' && c.filiere !== filiereFilter) return false
      if (query && !normalize(`${c.name} ${c.tagline} ${c.filiere}`).includes(query)) {
        return false
      }
      return true
    })
  }, [filter, filiereFilter, query])

  return (
    <PageTransition>
      <div className="gallery-theme mes-cours-gallery">
        <PageHeader
          theme="dark"
          eyebrow="Cours de design"
          title="Mes cours"
          lead="Explorer · Créer · Expérimenter · Transmettre"
        />

        <div className="mes-cours-gallery__controls">
          <div className="mes-cours-gallery__filter-rows">
            <div className="mes-cours-gallery__filters" role="tablist" aria-label="Filtrer par niveau">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={filter === item}
                  className="mes-cours-gallery__filter"
                  onClick={() => setFilter(item)}
                >
                  {filter === item && (
                    <motion.span
                      layoutId="mescours-gallery-filter"
                      className="mes-cours-gallery__filter-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="mes-cours-gallery__filter-label">{item}</span>
                </button>
              ))}
            </div>

            <div
              className="mes-cours-gallery__filters mes-cours-gallery__filters--ghost"
              role="tablist"
              aria-label="Filtrer par filière"
            >
              {FILIERE_OPTIONS.map((item) => (
                <button
                  key={item}
                  type="button"
                  role="tab"
                  aria-selected={filiereFilter === item}
                  className="mes-cours-gallery__filter mes-cours-gallery__filter--ghost"
                  onClick={() => setFiliereFilter(item)}
                >
                  {filiereFilter === item && (
                    <motion.span
                      layoutId="mescours-gallery-filiere"
                      className="mes-cours-gallery__filter-pill"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="mes-cours-gallery__filter-label">{item}</span>
                </button>
              ))}
            </div>
          </div>

          <input
            type="search"
            className="mes-cours-gallery__search"
            placeholder="Rechercher…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Rechercher une classe"
          />
        </div>

        {filtered.length === 0 ? (
          <div className="mes-cours-gallery__empty">
            <EmptyState
              theme="dark"
              title="Aucune classe ne correspond"
              hint="Essayez un autre filtre ou modifiez votre recherche."
            />
          </div>
        ) : (
          <ClassCarousel items={filtered} />
        )}
      </div>
    </PageTransition>
  )
}

export default MesCours
