export interface Course {
  id: string
  index: string
  title: string
  description: string
  tags: string[]
  accent: string
}

export const courses: Course[] = [
  {
    id: 'arts-appliques',
    index: '01',
    title: 'Arts appliqués',
    description:
      "Dessin d'observation, couleur, volume et perception : les fondations plastiques de toute pratique du design.",
    tags: ['Fondamentaux', 'Atelier hebdomadaire'],
    accent: 'linear-gradient(135deg, #efe9df 0%, #b55a34 100%)',
  },
  {
    id: 'design-graphique',
    index: '02',
    title: 'Design graphique',
    description:
      'Typographie, identité visuelle et mise en page, appliquées à des projets éditoriaux et signalétiques.',
    tags: ['Identité', 'Édition'],
    accent: 'linear-gradient(135deg, #efe9df 0%, #16161a 100%)',
  },
  {
    id: 'design-objet',
    index: '03',
    title: "Design d'objet",
    description:
      "Ergonomie, matériaux et prototypage : de l'esquisse au volume, jusqu'au design industriel.",
    tags: ['Prototypage', 'Volume'],
    accent: 'linear-gradient(135deg, #efe9df 0%, #54544c 100%)',
  },
  {
    id: 'design-textile',
    index: '04',
    title: 'Design textile',
    description:
      'Matière, motif et tissage : une exploration sensible du textile comme surface et comme structure.',
    tags: ['Matière', 'Motif'],
    accent: 'linear-gradient(135deg, #efe9df 0%, #6f8f7a 100%)',
  },
  {
    id: 'culture-design',
    index: '05',
    title: 'Culture design',
    description:
      "Histoire, théorie et critique du design : lire les objets et les images pour mieux les concevoir.",
    tags: ['Histoire', 'Théorie'],
    accent: 'linear-gradient(135deg, #efe9df 0%, #213043 100%)',
  },
]
