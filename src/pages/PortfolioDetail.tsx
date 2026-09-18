import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { getPortfolioProjectById } from '../data/portfolio'
import { getClassById } from '../data/classes'
import './PortfolioDetail.css'

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
}

function PortfolioDetail() {
  const { projectId } = useParams<{ projectId: string }>()
  const project = projectId ? getPortfolioProjectById(projectId) : undefined

  if (!project) {
    return <Navigate to="/portfolio" replace />
  }

  const relatedClass = project.classId ? getClassById(project.classId) : undefined

  return (
    <PageTransition>
      <div className="gallery-theme portfolio-detail">
        <Link to="/portfolio" className="portfolio-detail__back">
          ← Portfolio
        </Link>

        <header className="portfolio-detail__hero">
          <motion.div
            className="portfolio-detail__cover"
            style={
              project.image
                ? { backgroundImage: `url(${project.image})` }
                : { background: project.gradient }
            }
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="portfolio-detail__intro">
            <motion.span
              className="portfolio-detail__category"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.category} · {project.year}
            </motion.span>
            <motion.h1
              className="portfolio-detail__title"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.title}
            </motion.h1>
            <motion.p
              className="portfolio-detail__meta"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.classLabel} — {project.domain}
            </motion.p>
          </div>
        </header>

        <div className="portfolio-detail__body">
          <motion.p className="portfolio-detail__description" {...fadeUp}>
            {project.description}
          </motion.p>

          <div className="portfolio-detail__sections">
            {project.context && (
              <motion.section className="portfolio-detail__section" {...fadeUp}>
                <h2>Contexte</h2>
                <p>{project.context}</p>
              </motion.section>
            )}

            {project.problematique && (
              <motion.section className="portfolio-detail__section" {...fadeUp}>
                <h2>Problématique</h2>
                <p className="portfolio-detail__problematique">{project.problematique}</p>
              </motion.section>
            )}

            {project.demarche && (
              <motion.section className="portfolio-detail__section" {...fadeUp}>
                <h2>Démarche de conception</h2>
                <p>{project.demarche}</p>
              </motion.section>
            )}

            {project.recherches && project.recherches.length > 0 && (
              <motion.section className="portfolio-detail__section" {...fadeUp}>
                <h2>Recherches &amp; expérimentations</h2>
                <ul>
                  {project.recherches.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.section>
            )}

            {project.gallery && project.gallery.length > 0 && (
              <motion.section className="portfolio-detail__section" {...fadeUp}>
                <h2>Réalisation finale</h2>
                <div className="portfolio-detail__gallery">
                  {project.gallery.map((img) => (
                    <img key={img.src} src={img.src} alt={img.alt} loading="lazy" />
                  ))}
                </div>
              </motion.section>
            )}
          </div>

          <motion.div className="portfolio-detail__footer" {...fadeUp}>
            {relatedClass && (
              <Link to={`/mes-cours/${relatedClass.id}`} className="portfolio-detail__class-link">
                Voir la classe : {relatedClass.name} →
              </Link>
            )}

            {project.competences && project.competences.length > 0 && (
              <div className="portfolio-detail__competences">
                <span className="portfolio-detail__competences-label">Compétences travaillées</span>
                <ul>
                  {project.competences.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}

export default PortfolioDetail
