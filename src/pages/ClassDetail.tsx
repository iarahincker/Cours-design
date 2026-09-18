import { Suspense, lazy, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import EmptyState from '../components/EmptyState'
import SequenceCard from '../components/cards/SequenceCard'
import ProjectCard from '../components/cards/ProjectCard'
import ResourceCard from '../components/cards/ResourceCard'
import ExerciseCard from '../components/cards/ExerciseCard'
import EvaluationCard from '../components/cards/EvaluationCard'
import { getClassById } from '../data/classes'
import { getSequencesByClass } from '../data/sequences'
import { getProjectsByClass } from '../data/projects'
import { getResourcesByClass } from '../data/resources'
import { getExercisesByClass } from '../data/exercises'
import { getEvaluationsByClass } from '../data/evaluations'
import { FILIERE_META } from '../data/filieres'
import './ClassDetail.css'

const ClassGlyph3D = lazy(() => import('../components/scene/ClassGlyph3D'))

const TABS = ['Séquences', 'Projets', 'Exercices', 'Ressources', 'Évaluations'] as const
type Tab = (typeof TABS)[number]

const panelVariants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] as const } },
}

function ClassDetail() {
  const { classId } = useParams<{ classId: string }>()
  const [activeTab, setActiveTab] = useState<Tab>('Séquences')

  const schoolClass = classId ? getClassById(classId) : undefined

  if (!schoolClass) {
    return <Navigate to="/mes-cours" replace />
  }

  const sequences = getSequencesByClass(schoolClass.id)
  const projects = getProjectsByClass(schoolClass.id)
  const resources = getResourcesByClass(schoolClass.id)
  const exercises = getExercisesByClass(schoolClass.id)
  const evaluations = getEvaluationsByClass(schoolClass.id)
  const meta = FILIERE_META[schoolClass.filiere]

  return (
    <PageTransition>
      <div className="gallery-theme class-detail">
        <section className="class-hero">
          <div className="class-hero__text">
            <Link to="/mes-cours" className="class-detail__back">
              ← Mes cours
            </Link>

            <motion.span
              className="class-hero__eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {schoolClass.levelLabel} · {schoolClass.filiere}
            </motion.span>

            <motion.h1
              className="class-hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              {schoolClass.name}
            </motion.h1>

            <motion.p
              className="class-hero__lead"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {schoolClass.description}
            </motion.p>
          </div>

          <motion.div
            className="class-hero__visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="class-hero__glyph" style={{ background: meta.gradient }}>
              <Suspense fallback={null}>
                <ClassGlyph3D filiere={schoolClass.filiere} />
              </Suspense>
            </div>
          </motion.div>
        </section>

        <div className="class-detail__tabs" role="tablist" aria-label="Contenus de la classe">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className="class-detail__tab"
              onClick={() => setActiveTab(tab)}
            >
              {tab}
              {activeTab === tab && (
                <motion.span
                  layoutId="classdetail-tab-active"
                  className="class-detail__tab-indicator"
                  style={{ background: meta.dot }}
                  transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="class-detail__panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={panelVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {activeTab === 'Séquences' &&
                (sequences.length > 0 ? (
                  <div className="class-detail__sequences">
                    {sequences.map((sequence, index) => (
                      <SequenceCard key={sequence.id} sequence={sequence} index={index} />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    theme="dark"
                    title="Aucune séquence publiée"
                    hint="Les séquences de cette classe seront ajoutées prochainement dans src/data/sequences.ts."
                  />
                ))}

              {activeTab === 'Projets' &&
                (projects.length > 0 ? (
                  <div className="class-detail__light-panel">
                    <div className="class-detail__projects">
                      {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <EmptyState
                    theme="dark"
                    title="Aucun projet publié"
                    hint="Associez un projet à cette classe en lui ajoutant son identifiant dans src/data/projects.ts."
                  />
                ))}

              {activeTab === 'Exercices' &&
                (exercises.length > 0 ? (
                  <div className="class-detail__exercises">
                    {exercises.map((exercise, index) => (
                      <ExerciseCard key={exercise.id} exercise={exercise} index={index} />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    theme="dark"
                    title="Aucun exercice publié"
                    hint="Ajoutez des exercices courts pour cette classe dans src/data/exercises.ts."
                  />
                ))}

              {activeTab === 'Ressources' &&
                (resources.length > 0 ? (
                  <div className="class-detail__light-panel">
                    <div className="class-detail__resources">
                      {resources.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))}
                    </div>
                  </div>
                ) : (
                  <EmptyState
                    theme="dark"
                    title="Aucune ressource associée"
                    hint="Associez une ressource existante à cette classe dans src/data/resources.ts."
                  />
                ))}

              {activeTab === 'Évaluations' &&
                (evaluations.length > 0 ? (
                  <div className="class-detail__evaluations">
                    {evaluations.map((evaluation, index) => (
                      <EvaluationCard key={evaluation.id} evaluation={evaluation} index={index} />
                    ))}
                  </div>
                ) : (
                  <EmptyState
                    theme="dark"
                    title="Aucune évaluation publiée"
                    hint="Planifiez une évaluation pour cette classe dans src/data/evaluations.ts."
                  />
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageTransition>
  )
}

export default ClassDetail
