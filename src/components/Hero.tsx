import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './Hero.css'

const Scene = lazy(() => import('./scene/Scene'))
const MotionLink = motion.create(Link)

const container = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.14,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
}

function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero__scene" aria-hidden="true">
        <Suspense fallback={<div className="hero__scene-fallback" />}>
          <Scene />
        </Suspense>
      </div>

      <div className="hero__fade" aria-hidden="true" />

      <motion.div
        className="hero__content"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero__eyebrow" variants={item}>
          Formation · Atelier · Studio
        </motion.span>

        <motion.h1 className="hero__title" variants={item}>
          COURS
          <br />
          DE DESIGN
        </motion.h1>

        <motion.p className="hero__subtitle" variants={item}>
          Arts appliqués · Design · Création
        </motion.p>

        <motion.p className="hero__lead" variants={item}>
          Un programme éditorial pensé comme un studio : exploration formelle,
          culture visuelle et pratique du détail, jusqu'à la troisième dimension.
        </motion.p>

        <motion.div className="hero__actions" variants={item}>
          <MotionLink
            to="/cours"
            className="hero__button"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Découvrir les cours
          </MotionLink>
          <Link to="/projets" className="hero__button hero__button--ghost">
            Voir les projets
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
      >
        <motion.span
          className="hero__scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <span className="hero__scroll-label">Défiler</span>
      </motion.div>
    </section>
  )
}

export default Hero
