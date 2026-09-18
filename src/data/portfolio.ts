export type PortfolioCategory =
  | 'Mode'
  | 'Design'
  | 'Objet'
  | 'Graphisme'
  | 'Textile'
  | 'Projets collectifs'

export type PortfolioFormat = 'featured' | 'vertical' | 'horizontal' | 'square'

export interface PortfolioProject {
  id: string
  title: string
  classLabel: string
  domain: string
  year: string
  category: PortfolioCategory
  description: string
  format: PortfolioFormat
  /** CSS gradient placeholder — replace with `image` once real photos are available. */
  gradient: string
  /** Optional real photo URL. When set, it is used instead of `gradient`. */
  image?: string
  classId?: string
  context?: string
  problematique?: string
  demarche?: string
  recherches?: string[]
  competences?: string[]
  /** Extra photos for the immersive project page. Leave empty until you have real images. */
  gallery?: { src: string; alt: string }[]
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'tous-les-chemins-menent-a-rome',
    title: 'Tous les chemins mènent à Rome',
    classLabel: 'Terminale / Projet collectif',
    domain: 'Design textile · Installation · Voyage',
    year: '2025',
    category: 'Projets collectifs',
    description:
      "Une installation textile collective retraçant un carnet de voyage sensible, du croquis de rue à la trame tissée.",
    format: 'featured',
    gradient: 'linear-gradient(155deg, #f1e6d8 0%, #c17a4f 55%, #5c3a1f 100%)',
    classId: 'terminale-mode',
    context:
      "Projet de fin d'année mené collectivement par la classe de Terminale, à l'occasion d'un voyage d'étude en Italie.",
    problematique: 'Comment traduire une mémoire de voyage partagée en une écriture textile commune ?',
    demarche:
      "Chaque élève a documenté un fragment du voyage (couleur, architecture, matière) avant une mise en commun collective sous forme de trame tissée à plusieurs mains.",
    recherches: [
      "Carnets de croquis individuels sur site",
      'Nuanciers photographiques des façades romaines',
      'Étude des pavements et de la mosaïque antique',
    ],
    competences: ['Enquêter', 'Concevoir en groupe', 'Tisser', 'Synthétiser'],
  },
  {
    id: 'banquet-romain',
    title: 'Banquet romain',
    classLabel: 'Bac Pro Mode',
    domain: 'Textile · Costume · Arts de la table',
    year: '2024',
    category: 'Textile',
    description:
      "Une collection de costumes et d'arts de la table inspirée des banquets antiques, entre drapé et ornement.",
    format: 'vertical',
    gradient: 'linear-gradient(165deg, #f3e8df 0%, #b5673e 60%, #47281a 100%)',
    classId: 'terminale-mode',
    context: "Projet interdisciplinaire croisant histoire de l'art antique et pratique du costume.",
    problematique: 'Comment le drapé antique peut-il nourrir une silhouette contemporaine ?',
    demarche:
      "Étude des drapés antiques en atelier, expérimentations sur mannequin, puis réalisation d'une silhouette complète et d'une mise en scène de table associée.",
    recherches: ['Fresques de Pompéi', 'Sculpture grecque archaïque', 'Techniques de drapé classique'],
    competences: ['Analyser une référence historique', 'Draper', 'Mettre en scène'],
  },
  {
    id: 'objet-et-matiere',
    title: 'Objet & matière',
    classLabel: 'Maintenance & Usinage',
    domain: "Design d'objet · Fabrication",
    year: '2025',
    category: 'Objet',
    description:
      "Une série d'objets utilitaires façonnés en atelier, où la contrainte technique devient un parti pris esthétique.",
    format: 'horizontal',
    gradient: 'linear-gradient(155deg, #eceae4 0%, #6c6a63 55%, #2e2c28 100%)',
    classId: 'terminale-maintenance-usinage',
    context: "Projet d'atelier associant précision d'usinage et recherche formelle.",
    problematique: 'Comment un procédé de fabrication industriel peut-il devenir un langage formel ?',
    demarche:
      "Prototypage successif sur machine, avec documentation systématique des essais ratés comme matière de recherche à part entière.",
    recherches: ['Design industriel scandinave', 'Objets outils Bauhaus', 'Carnets de prototypage'],
    competences: ['Usiner', 'Prototyper', 'Documenter un procédé'],
  },
  {
    id: 'alphabet-souple',
    title: 'Alphabet Souple',
    classLabel: '1ère Mode',
    domain: 'Graphisme · Typographie · Édition',
    year: '2024',
    category: 'Graphisme',
    description:
      'Une famille typographique variable dessinée à partir de plis de tissu photographiés puis vectorisés.',
    format: 'square',
    gradient: 'linear-gradient(155deg, #f1e9da 0%, #a5713f 55%, #5c3a1f 100%)',
    classId: 'premiere-mode',
    problematique: 'Le textile peut-il devenir une source légitime de dessin de caractère ?',
    demarche: 'Photographie macro de plis de tissu, relevé de courbes, vectorisation et test en corps de texte.',
    recherches: ['Typographies organiques contemporaines', 'Photographie macro'],
    competences: ['Dessiner un caractère', 'Vectoriser', 'Tester en contexte'],
  },
  {
    id: 'trame-vivante',
    title: 'Trame Vivante',
    classLabel: '2nde Mode',
    domain: 'Design textile · Motif génératif',
    year: '2025',
    category: 'Textile',
    description: 'Un motif génératif tissé, inspiré des structures cellulaires observées au microscope.',
    format: 'square',
    gradient: 'linear-gradient(155deg, #eef2ea 0%, #6f8f7a 55%, #233029 100%)',
    classId: 'seconde-mode',
    problematique: 'Comment la biologie cellulaire peut-elle générer une grammaire de motif ?',
    demarche: "Observation au microscope, extraction de motifs, programmation d'une trame paramétrique.",
    recherches: ['Photographies microscopiques', 'Motifs génératifs textiles contemporains'],
    competences: ['Observer', 'Générer un motif', 'Tisser'],
  },
  {
    id: 'revue-contrepoint',
    title: 'Revue Contrepoint',
    classLabel: 'Terminale Agora',
    domain: 'Graphisme · Édition · Critique',
    year: '2023',
    category: 'Graphisme',
    description: 'Une revue critique semestrielle sur les pratiques du design contemporain, conçue de A à Z.',
    format: 'horizontal',
    gradient: 'linear-gradient(155deg, #e6e9ef 0%, #3d4c63 55%, #171e2b 100%)',
    classId: 'terminale-agora',
    problematique: 'Comment construire un objet éditorial critique et autonome ?',
    demarche: "Comité de rédaction, commande de textes, direction artistique et fabrication d'un numéro complet.",
    recherches: ['Revues de design indépendantes', 'Histoire de la presse critique'],
    competences: ['Diriger artistiquement', 'Éditer', 'Maquetter'],
  },
  {
    id: 'signaletique-nord',
    title: 'Signalétique Nord',
    classLabel: '1ère Agora',
    domain: 'Design graphique · Signalétique',
    year: '2025',
    category: 'Design',
    description: 'Un système signalétique modulaire conçu pour un campus des arts appliqués.',
    format: 'vertical',
    gradient: 'linear-gradient(155deg, #efe6d8 0%, #b55a34 55%, #5c2c15 100%)',
    classId: 'premiere-agora',
    problematique: "Comment orienter sans uniformiser l'identité de chaque atelier ?",
    demarche: "Audit des parcours existants, création d'une grammaire modulaire déclinable par département.",
    recherches: ['Signalétiques muséales', 'Systèmes modulaires suisses'],
    competences: ['Concevoir un système', 'Prototyper en volume'],
  },
]

export function getPortfolioProjectById(id: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.id === id)
}
