import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './HomeExplore.css'

const DESTINATIONS = [
  {
    to: '/cours',
    index: '01',
    title: 'Cours',
    description: 'Cinq disciplines, des arts appliqués à la culture design.',
  },
  {
    to: '/projets',
    index: '02',
    title: 'Projets',
    description: 'Une galerie des réalisations produites en atelier.',
  },
  {
    to: '/ressources',
    index: '03',
    title: 'Ressources',
    description: 'Vocabulaire, références et méthodes pour aller plus loin.',
  },
]

function HomeExplore() {
  return (
    <section className="home-explore" id="explorer">
      <motion.span
        className="home-explore__eyebrow"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        Explorer le site
      </motion.span>

      <div className="home-explore__grid">
        {DESTINATIONS.map((item, i) => (
          <motion.div
            key={item.to}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{
              duration: 0.7,
              delay: i * 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <Link to={item.to} className="home-explore__card">
              <span className="home-explore__index">{item.index}</span>
              <span className="home-explore__title">{item.title}</span>
              <span className="home-explore__description">{item.description}</span>
              <span className="home-explore__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default HomeExplore
