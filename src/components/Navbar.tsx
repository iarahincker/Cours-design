import { motion } from 'framer-motion'
import './Navbar.css'

const LINKS = ['Accueil', 'Cours', 'Projets', 'Ressources']

function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <span className="navbar__mark">CDD.</span>

      <nav className="navbar__links" aria-label="Navigation principale">
        {LINKS.map((label, index) => (
          <a
            key={label}
            href={index === 0 ? '#' : `#${label.toLowerCase()}`}
            className="navbar__link"
            aria-current={index === 0 ? 'page' : undefined}
          >
            {label}
          </a>
        ))}
      </nav>

      <a href="#cours" className="navbar__cta">
        Rejoindre
      </a>
    </motion.header>
  )
}

export default Navbar
