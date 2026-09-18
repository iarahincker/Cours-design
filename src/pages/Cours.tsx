import PageTransition from '../components/PageTransition'
import PageHeader from '../components/PageHeader'
import CourseCard from '../components/cards/CourseCard'
import { courses } from '../data/courses'
import './Cours.css'

function Cours() {
  return (
    <PageTransition>
      <PageHeader
        eyebrow="Programme"
        title="Cours de design"
        lead="Cinq disciplines complémentaires, pensées comme un parcours cohérent : des fondations plastiques à la culture critique, en passant par le graphisme, l'objet et le textile."
      />

      <section className="courses">
        <div className="courses__grid">
          {courses.map((course, index) => (
            <CourseCard
              key={course.id}
              course={course}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </section>
    </PageTransition>
  )
}

export default Cours
