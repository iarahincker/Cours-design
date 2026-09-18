export type Filiere = 'Maintenance & Usinage' | 'Mode' | 'Agora' | '3PM' | 'BTS ESF'

export type Motif = 'gear' | 'ribbon' | 'circles' | 'chevrons' | 'arches'

export interface FiliereMeta {
  /** Ivoire / pierre → teinte de filière, toujours désaturée. */
  gradient: string
  dot: string
  motif: Motif
}

export const FILIERE_META: Record<Filiere, FiliereMeta> = {
  // Anthracite · acier · gris bleuté
  'Maintenance & Usinage': {
    gradient: 'linear-gradient(135deg, #dde1e4 0%, #7b8894 45%, #363d44 100%)',
    dot: '#57626b',
    motif: 'gear',
  },
  // Ivoire · champagne · rose poudré
  Mode: {
    gradient: 'linear-gradient(135deg, #f2ede4 0%, #d7bfb6 50%, #a98a83 100%)',
    dot: '#a98a83',
    motif: 'ribbon',
  },
  // Gris minéral · vert très désaturé · verre
  Agora: {
    gradient: 'linear-gradient(135deg, #e6e7e2 0%, #9aa79c 45%, #52605a 100%)',
    dot: '#5f6f66',
    motif: 'circles',
  },
  // Bleu gris · lilas très désaturé
  '3PM': {
    gradient: 'linear-gradient(135deg, #e3e2e8 0%, #a6a3b4 45%, #5c5a70 100%)',
    dot: '#6b6880',
    motif: 'chevrons',
  },
  // Palette neutre, accent expérimental
  'BTS ESF': {
    gradient: 'linear-gradient(135deg, #e9e5df 0%, #b8a99c 45%, #6b5c50 100%)',
    dot: '#8a6f5c',
    motif: 'arches',
  },
}

export const FILIERE_FILTERS: Filiere[] = ['Maintenance & Usinage', 'Mode', 'Agora']
