import type { Filiere } from './filieres'

export type Section = 'Seconde' | 'Première' | 'Terminale'

export const SECTIONS: Section[] = ['Seconde', 'Première', 'Terminale']

export interface SchoolClass {
  id: string
  section: Section
  levelLabel: string
  filiere: Filiere
  name: string
  description: string
  /** Spans two columns in the bento grid for visual rhythm. */
  spanFeatured?: boolean
  /** Gets a real React Three Fiber mini-scene instead of the flat graphic motif. */
  glyph3D?: boolean
}

export const classes: SchoolClass[] = [
  {
    id: 'seconde-maintenance-usinage',
    section: 'Seconde',
    levelLabel: '2nde',
    filiere: 'Maintenance & Usinage',
    name: '2nde Maintenance & Usinage',
    description:
      "Découverte des métiers de la maintenance industrielle : lecture de plans, outillage, premiers gestes techniques et culture de l'atelier.",
    spanFeatured: true,
  },
  {
    id: 'seconde-mode',
    section: 'Seconde',
    levelLabel: '2nde',
    filiere: 'Mode',
    name: '2nde Mode',
    description:
      "Initiation aux métiers de la mode : matières, patronage de base, croquis et premières recherches créatives.",
  },
  {
    id: 'seconde-agora',
    section: 'Seconde',
    levelLabel: '2nde',
    filiere: 'Agora',
    name: '2nde Agora',
    description:
      "Classe transversale de découverte : expression, culture générale et projets collectifs autour du design et de la communication.",
  },
  {
    id: '3pm',
    section: 'Seconde',
    levelLabel: '3PM',
    filiere: '3PM',
    name: '3PM',
    description:
      "Troisième prépa-métiers : exploration des filières professionnelles, stages découverte et construction du projet d'orientation.",
  },
  {
    id: 'bts-esf',
    section: 'Seconde',
    levelLabel: 'BTS',
    filiere: 'BTS ESF',
    name: 'BTS ESF',
    description:
      "BTS Économie Sociale Familiale : accompagnement des publics, habitat et cadre de vie, approche sensible de l'espace domestique.",
  },
  {
    id: 'premiere-maintenance-usinage',
    section: 'Première',
    levelLabel: '1ère',
    filiere: 'Maintenance & Usinage',
    name: '1ère Maintenance & Usinage',
    description:
      'Approfondissement des techniques d\'usinage et de maintenance, autonomie sur machine et premiers projets en conditions réelles.',
    spanFeatured: true,
  },
  {
    id: 'premiere-mode',
    section: 'Première',
    levelLabel: '1ère',
    filiere: 'Mode',
    name: '1ère Mode',
    description:
      "Construction d'une démarche de création : collections courtes, techniques de montage et affirmation d'un vocabulaire personnel.",
  },
  {
    id: 'premiere-agora',
    section: 'Première',
    levelLabel: '1ère',
    filiere: 'Agora',
    name: '1ère Agora',
    description:
      'Projets de design engagés, travail en groupe et prises de parole publiques autour de sujets de société.',
  },
  {
    id: 'terminale-maintenance-usinage',
    section: 'Terminale',
    levelLabel: 'Term.',
    filiere: 'Maintenance & Usinage',
    name: 'Terminale Maintenance & Usinage',
    description:
      "Année de certification : projets industriels complets, du diagnostic à la remise en service, préparation à l'insertion professionnelle.",
    spanFeatured: true,
    glyph3D: true,
  },
  {
    id: 'terminale-mode',
    section: 'Terminale',
    levelLabel: 'Term.',
    filiere: 'Mode',
    name: 'Terminale Mode',
    description:
      'Collection de fin de cursus, dossier professionnel et présentation devant un jury : le point d\'orgue du parcours mode.',
    glyph3D: true,
  },
  {
    id: 'terminale-agora',
    section: 'Terminale',
    levelLabel: 'Term.',
    filiere: 'Agora',
    name: 'Terminale Agora',
    description:
      "Projet de design final, oral de synthèse et mise en portfolio de trois années de travaux et de recherches.",
    glyph3D: true,
  },
]

export function getClassById(id: string): SchoolClass | undefined {
  return classes.find((c) => c.id === id)
}

export function getClassesBySection(section: Section): SchoolClass[] {
  return classes.filter((c) => c.section === section)
}
