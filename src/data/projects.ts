export interface Project {
  id: string
  title: string
  category: string
  year: string
  description: string
  gradient: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'signaletique-nord',
    title: 'Signalétique Nord',
    category: 'Design graphique',
    year: '2025',
    description: 'Système signalétique modulaire pour un campus des arts appliqués.',
    gradient: 'linear-gradient(155deg, #efe6d8 0%, #b55a34 60%, #7a3a20 100%)',
    featured: true,
  },
  {
    id: 'assise-plis',
    title: 'Assise Plis',
    category: "Design d'objet",
    year: '2024',
    description: 'Chaise pliée en tôle, structure minimale et geste unique.',
    gradient: 'linear-gradient(155deg, #e9e5dc 0%, #6c6a63 60%, #302f2b 100%)',
  },
  {
    id: 'trame-vivante',
    title: 'Trame Vivante',
    category: 'Design textile',
    year: '2025',
    description: 'Motif génératif tissé, inspiré des structures cellulaires.',
    gradient: 'linear-gradient(155deg, #eef2ea 0%, #6f8f7a 60%, #35473c 100%)',
  },
  {
    id: 'revue-contrepoint',
    title: 'Revue Contrepoint',
    category: 'Culture design',
    year: '2023',
    description: 'Revue critique semestrielle sur les pratiques du design contemporain.',
    gradient: 'linear-gradient(155deg, #e6e9ef 0%, #3d4c63 60%, #1b2434 100%)',
    featured: true,
  },
  {
    id: 'alphabet-souple',
    title: 'Alphabet Souple',
    category: 'Design graphique',
    year: '2024',
    description: 'Famille typographique variable pensée pour les interfaces éditoriales.',
    gradient: 'linear-gradient(155deg, #f1e9da 0%, #a5713f 60%, #5c3a1f 100%)',
  },
  {
    id: 'vaisselle-tacite',
    title: 'Vaisselle Tacite',
    category: "Design d'objet",
    year: '2025',
    description: 'Service en grès, formes sourdes et glaçures minérales.',
    gradient: 'linear-gradient(155deg, #ece8e0 0%, #8a8478 60%, #46433b 100%)',
  },
  {
    id: 'atlas-couleur',
    title: 'Atlas Couleur',
    category: 'Culture design',
    year: '2024',
    description: 'Cartographie sensible des palettes régionales, entre pigment et lumière.',
    gradient: 'linear-gradient(155deg, #f2e8e2 0%, #c17a4f 60%, #6d3f26 100%)',
  },
  {
    id: 'grain-brut',
    title: 'Grain Brut',
    category: 'Design textile',
    year: '2023',
    description: 'Série de tissages non-teints explorant la matière brute des fibres.',
    gradient: 'linear-gradient(155deg, #ece7dd 0%, #7c7568 60%, #3c382f 100%)',
  },
]
