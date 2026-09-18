export const RESOURCE_CATEGORIES = [
  'Vocabulaire',
  'Références',
  'Artistes & designers',
  'Méthodes',
  'Ressources pédagogiques',
] as const

export type ResourceCategory = (typeof RESOURCE_CATEGORIES)[number]

export interface Resource {
  id: string
  category: ResourceCategory
  title: string
  description: string
}

export const resources: Resource[] = [
  {
    id: 'v1',
    category: 'Vocabulaire',
    title: 'Empattement',
    description:
      "Petit trait terminal d'un caractère typographique, hérité de la gravure sur pierre.",
  },
  {
    id: 'v2',
    category: 'Vocabulaire',
    title: 'Gestalt',
    description: 'Principes de perception visuelle : proximité, similarité, clôture, continuité.',
  },
  {
    id: 'v3',
    category: 'Vocabulaire',
    title: 'Chromie',
    description: 'Étude et organisation des relations entre couleurs dans une composition.',
  },
  {
    id: 'v4',
    category: 'Vocabulaire',
    title: 'Modénature',
    description: 'Traitement des reliefs et profils qui structurent une surface ou un objet.',
  },
  {
    id: 'r1',
    category: 'Références',
    title: 'Bauhaus (1919–1933)',
    description: "École allemande fondatrice, réunion de l'art, de l'artisanat et de l'industrie.",
  },
  {
    id: 'r2',
    category: 'Références',
    title: "École d'Ulm",
    description: 'Méthode et rigueur : le design pensé comme discipline quasi scientifique.',
  },
  {
    id: 'r3',
    category: 'Références',
    title: 'Swiss Style',
    description: "Grille, objectivité typographique et clarté de l'information.",
  },
  {
    id: 'r4',
    category: 'Références',
    title: 'Memphis Group',
    description: 'Postmodernisme joyeux : couleur, motif et ironie des formes.',
  },
  {
    id: 'a1',
    category: 'Artistes & designers',
    title: 'Dieter Rams',
    description: 'Dix principes pour un bon design — « moins, mais mieux ».',
  },
  {
    id: 'a2',
    category: 'Artistes & designers',
    title: 'Charlotte Perriand',
    description: "L'art de vivre modernisé par l'architecture d'intérieur.",
  },
  {
    id: 'a3',
    category: 'Artistes & designers',
    title: 'Paul Rand',
    description: 'Identité visuelle et logotypes pensés comme des systèmes.',
  },
  {
    id: 'a4',
    category: 'Artistes & designers',
    title: 'Ray & Charles Eames',
    description: 'Le design comme réponse joyeuse à un problème réel.',
  },
  {
    id: 'm1',
    category: 'Méthodes',
    title: 'Moodboard',
    description: "Cartographie sensible d'une intention avant de dessiner la première ligne.",
  },
  {
    id: 'm2',
    category: 'Méthodes',
    title: 'Prototypage rapide',
    description: 'Tester une idée en volume ou en interface avant de la figer.',
  },
  {
    id: 'm3',
    category: 'Méthodes',
    title: 'Design thinking',
    description: 'Empathie, idéation, itération : une méthode centrée sur l’usage.',
  },
  {
    id: 'm4',
    category: 'Méthodes',
    title: 'Carnet de recherche',
    description: 'Trace continue du processus, des doutes et des trouvailles.',
  },
  {
    id: 'p1',
    category: 'Ressources pédagogiques',
    title: 'Bibliographie du cursus',
    description: 'Une sélection d’ouvrages de référence classés par semestre.',
  },
  {
    id: 'p2',
    category: 'Ressources pédagogiques',
    title: 'Outils numériques',
    description: 'Logiciels et plateformes utilisés en atelier, avec tutoriels associés.',
  },
  {
    id: 'p3',
    category: 'Ressources pédagogiques',
    title: 'Fiches techniques',
    description: 'Procédés, matériaux et normes utiles en atelier.',
  },
  {
    id: 'p4',
    category: 'Ressources pédagogiques',
    title: 'Glossaire visuel',
    description: 'Les notions clés illustrées, pour réviser en un coup d’œil.',
  },
]
