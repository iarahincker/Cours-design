import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, Navigate, useParams } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
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

const TABS = ['Séquences', 'Projets', 'Exercices', 'Ressources', 'Évaluations'] as const
type Tab = (typeof TABS)[number]

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
      <div className="class-detail">
        <Link to="/mes-cours" className="class-detail__back">
          ← Mes cours
        </Link>

        <PageHeader
          eyebrow={`${schoolClass.levelLabel} · ${schoolClass.filiere}`}
          title={schoolClass.name}
          lead={schoolClass.description}
        />

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
          {activeTab === 'Séquences' &&
            (sequences.length > 0 ? (
              <div className="class-detail__sequences">
                {sequences.map((sequence, index) => (
                  <SequenceCard key={sequence.id} sequence={sequence} index={index} />
                ))}
              </div>
            ) : (
              <EmptyState
                title="Aucune séquence publiée"
                hint="Les séquences de cette classe seront ajoutées prochainement dans src/data/sequences.ts."
              />
            ))}

          {activeTab === 'Projets' &&
            (projects.length > 0 ? (
              <div className="class-detail__projects">
                {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
                ))}
              </div>
            ) : (
              <EmptyState
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
                title="Aucun exercice publié"
                hint="Ajoutez des exercices courts pour cette classe dans src/data/exercises.ts."
              />
            ))}

          {activeTab === 'Ressources' &&
            (resources.length > 0 ? (
              <div className="class-detail__resources">
                {resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <EmptyState
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
                title="Aucune évaluation publiée"
                hint="Planifiez une évaluation pour cette classe dans src/data/evaluations.ts."
              />
            ))}
        </div>
      </div>
    </PageTransition>
  )
}

export default ClassDetail
