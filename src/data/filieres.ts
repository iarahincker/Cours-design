export type Filiere = 'Maintenance & Usinage' | 'Mode' | 'Agora' | '3PM' | 'BTS ESF'

export type Motif = 'gear' | 'ribbon' | 'circles' | 'chevrons' | 'arches'

export interface FiliereMeta {
  gradient: string
  dot: string
  motif: Motif
}

export const FILIERE_META: Record<Filiere, FiliereMeta> = {
  'Maintenance & Usinage': {
    gradient: 'linear-gradient(135deg, #eef0f2 0%, #4a5568 100%)',
    dot: '#4a5568',
    motif: 'gear',
  },
  Mode: {
    gradient: 'linear-gradient(135deg, #f3e6da 0%, #b55a34 100%)',
    dot: '#b55a34',
    motif: 'ribbon',
  },
  Agora: {
    gradient: 'linear-gradient(135deg, #eef2ea 0%, #52735f 100%)',
    dot: '#52735f',
    motif: 'circles',
  },
  '3PM': {
    gradient: 'linear-gradient(135deg, #f1ece0 0%, #8a7a5c 100%)',
    dot: '#8a7a5c',
    motif: 'chevrons',
  },
  'BTS ESF': {
    gradient: 'linear-gradient(135deg, #f2e8e6 0%, #9c6b62 100%)',
    dot: '#9c6b62',
    motif: 'arches',
  },
}

export const FILIERE_FILTERS: Filiere[] = ['Maintenance & Usinage', 'Mode', 'Agora']
