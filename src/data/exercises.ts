export interface Exercise {
  id: string
  classId: string
  title: string
  description: string
  duree: string
}

export const exercises: Exercise[] = [
  {
    id: 'ex-2mode-nuancier',
    classId: 'seconde-mode',
    title: 'Nuancier express',
    description: "Constituer un nuancier de dix teintes à partir d'un seul vêtement.",
    duree: '1 heure',
  },
  {
    id: 'ex-2mu-cotation',
    classId: 'seconde-maintenance-usinage',
    title: 'Exercice de cotation',
    description: 'Coter correctement trois vues orthogonales à partir d\'une pièce réelle.',
    duree: '45 minutes',
  },
  {
    id: 'ex-tmode-croquis',
    classId: 'terminale-mode',
    title: 'Croquis rapides',
    description: "Dix croquis de silhouette en cinq minutes chacun, sans gomme.",
    duree: '1 heure',
  },
  {
    id: 'ex-2agora-logo',
    classId: 'seconde-agora',
    title: 'Logotype minute',
    description: "Concevoir un monogramme à partir de ses propres initiales.",
    duree: '30 minutes',
  },
]

export function getExercisesByClass(classId: string): Exercise[] {
  return exercises.filter((e) => e.classId === classId)
}
