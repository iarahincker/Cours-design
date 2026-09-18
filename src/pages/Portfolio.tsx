import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import EmptyState from '../components/EmptyState'
import PortfolioCard from '../components/portfolio/PortfolioCard'
import PortfolioCursor from '../components/portfolio/PortfolioCursor'
import { portfolioProjects, type PortfolioCategory } from '../data/portfolio'
import './Portfolio.css'

const CATEGORIES: Array<PortfolioCategory | 'Tous'> = [
  'Tous',
  'Mode',
  'Design',
  'Objet',
  'Graphisme',
  'Textile',
  'Projets collectifs',
]

function Portfolio() {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('Tous')
  const [cursorActive, setCursorActive] = useState(false)

  const filtered = useMemo(
    () =>
      category === 'Tous'
        ? portfolioProjects
        : portfolioProjects.filter((p) => p.category === category),
    [category],
  )

  return (
    <PageTransition>
      <div className="gallery-theme portfolio-page">
        <PortfolioCursor label={cursorActive ? 'Voir' : null} />

        <PageHeader
          theme="dark"
          eyebrow="Créer · Expérimenter · Transformer"
          title="Portfolio"
          lead="Une sélection de projets réalisés en arts appliqués, design et création."
        />

        <div className="portfolio-page__filters" role="tablist" aria-label="Filtrer les projets">
          {CATEGORIES.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={category === item}
              className="portfolio-page__filter"
              onClick={() => setCategory(item)}
            >
              {category === item && (
                <motion.span
                  layoutId="portfolio-filter-active"
                  className="portfolio-page__filter-pill"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="portfolio-page__filter-label">{item}</span>
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="portfolio-page__empty">
            <EmptyState
              theme="dark"
              title="Aucun projet dans cette catégorie"
              hint="Ajoutez de nouveaux projets dans src/data/portfolio.ts pour les voir apparaître ici."
            />
          </div>
        ) : (
          <div className="portfolio-page__grid">
            {filtered.map((project, index) => (
              <PortfolioCard
                key={project.id}
                project={project}
                index={index}
                onHoverChange={setCursorActive}
              />
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  )
}

export default Portfolio
