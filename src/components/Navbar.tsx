import { motion } from 'framer-motion'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'

const LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Mes cours', to: '/mes-cours' },
  { label: 'Projets', to: '/projets' },
  { label: 'Ressources', to: '/ressources' },
]

function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
    >
      <Link to="/" className="navbar__mark">
        CDD.
      </Link>

      <nav className="navbar__links" aria-label="Navigation principale">
        {LINKS.map(({ label, to }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <Link to="/mes-cours" className="navbar__cta">
        Rejoindre
      </Link>
    </motion.header>
  )
}

export default Navbar
