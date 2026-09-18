import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import ProjectCard from '../components/cards/ProjectCard'
import { projects } from '../data/projects'
import './Projets.css'

function Projets() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Galerie"
        title="Projets d'atelier"
        lead="Une sélection de réalisations produites en cours d'année, tous niveaux et toutes disciplines confondus — du signe à l'objet, du textile à l'édition critique."
      />

      <section className="projects">
        <div className="projects__grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

export default Projets
