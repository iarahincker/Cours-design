export type EvaluationType = 'Formative' | 'Sommative' | 'Certificative'

export interface Evaluation {
  id: string
  classId: string
  title: string
  type: EvaluationType
  periode: string
  description: string
  competences: string[]
}

export const evaluations: Evaluation[] = [
  {
    id: 'eval-2mode-matiere',
    classId: 'seconde-mode',
    title: 'Fiche matière',
    type: 'Formative',
    periode: 'Fin de séquence 1',
    description: "Évaluation de la fiche sensorielle et de la présentation orale.",
    competences: ['Analyser', "S'exprimer à l'oral"],
  },
  {
    id: 'eval-tmode-oral',
    classId: 'terminale-mode',
    title: 'Oral blanc de soutenance',
    type: 'Sommative',
    periode: 'Avant les épreuves',
    description: "Simulation de l'oral de soutenance devant un jury d'enseignants.",
    competences: ['Présenter un dossier professionnel', "S'exprimer à l'oral"],
  },
  {
    id: 'eval-tmu-cap',
    classId: 'terminale-maintenance-usinage',
    title: 'CCF remise en service',
    type: 'Certificative',
    periode: 'Semestre 2',
    description: "Contrôle en cours de formation sur une remise en service complète.",
    competences: ['Diagnostiquer', 'Valider et documenter'],
  },
]

export function getEvaluationsByClass(classId: string): Evaluation[] {
  return evaluations.filter((e) => e.classId === classId)
}
