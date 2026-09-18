import { useState } from 'react'
import { motion } from 'framer-motion'
import { NavLink, Link, useLocation } from 'react-router-dom'
import GlobalSearch from './GlobalSearch'
import './Navbar.css'

const LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Mes cours', to: '/mes-cours' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Projets', to: '/projets' },
  { label: 'Ressources', to: '/ressources' },
]

const DARK_ROUTES = ['/mes-cours', '/portfolio', '/mon-espace']

function Navbar() {
  const { pathname } = useLocation()
  const onDark = DARK_ROUTES.some((route) => pathname.startsWith(route))
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <>
      <motion.header
        className={onDark ? 'navbar navbar--on-dark' : 'navbar'}
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <Link to="/" className="navbar__brand">
          <span className="navbar__brand-title">Cours de design</span>
          <span className="navbar__brand-sub">Arts appliqués · Création · Transmission</span>
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

        <div className="navbar__actions">
          <button
            type="button"
            className="navbar__icon-button"
            onClick={() => setSearchOpen(true)}
            aria-label="Rechercher"
          >
            <svg viewBox="0 0 20 20" width="17" height="17" fill="none" aria-hidden="true">
              <circle cx="9" cy="9" r="6.2" stroke="currentColor" strokeWidth="1.4" />
              <line x1="13.6" y1="13.6" x2="18" y2="18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>

          <Link to="/mon-espace" className="navbar__cta">
            <svg viewBox="0 0 20 20" width="15" height="15" fill="none" aria-hidden="true" className="navbar__cta-icon">
              <circle cx="10" cy="6.6" r="3.2" stroke="currentColor" strokeWidth="1.4" />
              <path d="M3.6 17c.9-3.4 3.6-5.2 6.4-5.2s5.5 1.8 6.4 5.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <span className="navbar__cta-label">Mon espace</span>
          </Link>
        </div>
      </motion.header>

      <GlobalSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  )
}

export default Navbar
