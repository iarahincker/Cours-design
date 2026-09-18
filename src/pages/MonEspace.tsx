import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import { classes } from '../data/classes'
import { sequences } from '../data/sequences'
import { projects } from '../data/projects'
import { portfolioProjects } from '../data/portfolio'
import { resources } from '../data/resources'
import './MonEspace.css'

const SECTIONS = [
  {
    title: 'Classes',
    count: classes.length,
    description: 'Niveaux, filières, descriptions et taglines de chaque classe.',
    file: 'src/data/classes.ts',
    action: 'Ajouter une classe',
    to: '/mes-cours',
  },
  {
    title: 'Séquences',
    count: sequences.length,
    description: 'Problématique, objectifs, compétences, consignes et références.',
    file: 'src/data/sequences.ts',
    action: 'Ajouter une séquence',
    to: '/mes-cours',
  },
  {
    title: 'Projets',
    count: projects.length,
    description: 'Réalisations d’atelier associées à une ou plusieurs classes.',
    file: 'src/data/projects.ts',
    action: 'Ajouter un projet',
    to: '/projets',
  },
  {
    title: 'Portfolio',
    count: portfolioProjects.length,
    description: 'Travaux d’élèves présentés en galerie, avec leur page immersive.',
    file: 'src/data/portfolio.ts',
    action: 'Ajouter une réalisation',
    to: '/portfolio',
  },
  {
    title: 'Ressources',
    count: resources.length,
    description: 'Vocabulaire, références, artistes, méthodes et outils.',
    file: 'src/data/resources.ts',
    action: 'Ajouter une ressource',
    to: '/ressources',
  },
]

function MonEspace() {
  return (
    <PageTransition>
      <div className="gallery-theme mon-espace">
        <PageHeader
          theme="dark"
          eyebrow="Espace enseignant"
          title="Mon espace"
          lead="Un aperçu de l'interface d'administration à venir. Aujourd'hui, chaque contenu se pilote directement depuis les fichiers de données du projet — sans jamais toucher aux composants."
        />

        <div className="mon-espace__grid">
          {SECTIONS.map((section, index) => (
            <motion.article
              key={section.title}
              className="mon-espace__card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mon-espace__card-top">
                <span className="mon-espace__count">{String(section.count).padStart(2, '0')}</span>
                <Link to={section.to} className="mon-espace__view">
                  Voir →
                </Link>
              </div>

              <h3 className="mon-espace__title">{section.title}</h3>
              <p className="mon-espace__description">{section.description}</p>
              <code className="mon-espace__file">{section.file}</code>

              <button type="button" className="mon-espace__add" disabled>
                + {section.action}
              </button>
            </motion.article>
          ))}
        </div>

        <motion.p
          className="mon-espace__note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Les boutons « + Ajouter » sont désactivés : ils préparent la place d'une future interface
          d'administration. En attendant, chaque fichier listé ci-dessus est un simple tableau
          TypeScript typé — l'ajouter à la main y suffit, aucune carte à recoder.
        </motion.p>
      </div>
    </PageTransition>
  )
}

export default MonEspace
