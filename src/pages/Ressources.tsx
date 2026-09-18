import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import ResourceCard from '../components/cards/ResourceCard'
import { RESOURCE_CATEGORIES, resources, type ResourceCategory } from '../data/resources'
import './Ressources.css'

const FILTERS: Array<ResourceCategory | 'Tout'> = ['Tout', ...RESOURCE_CATEGORIES]

function Ressources() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('Tout')

  const filtered = useMemo(
    () => (active === 'Tout' ? resources : resources.filter((r) => r.category === active)),
    [active],
  )

  return (
    <PageTransition>
      <PageHeader
        eyebrow="Bibliothèque"
        title="Ressources"
        lead="Vocabulaire, références historiques, figures du design, méthodes de travail et supports pédagogiques : une base commune pour nourrir vos projets."
      />

      <section className="resources">
        <div className="resources__filters" role="tablist" aria-label="Filtrer les ressources">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={active === filter}
              className="resources__filter"
              onClick={() => setActive(filter)}
            >
              {active === filter && (
                <motion.span
                  layoutId="resources-filter-active"
                  className="resources__filter-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="resources__filter-label">{filter}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="resources__grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </PageTransition>
  )
}

export default Ressources
