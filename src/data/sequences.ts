export interface Sequence {
  id: string
  classId: string
  title: string
  problematique: string
  objectifs: string[]
  competences: string[]
  duree: string
  consignes: string[]
  references: string[]
}

export const sequences: Sequence[] = [
  {
    id: 'seq-2mode-matiere-premiere',
    classId: 'seconde-mode',
    title: 'Matière première',
    problematique: 'Comment une matière brute oriente-t-elle une intention créative ?',
    objectifs: [
      "Observer et manipuler des matières textiles variées",
      "Développer un vocabulaire sensible et précis",
      'Produire un premier nuancier de matières et de sensations',
    ],
    competences: ['Analyser', 'Expérimenter', 'Communiquer à l\'oral'],
    duree: '3 semaines',
    consignes: [
      'Constituer une collecte de 10 échantillons de matières',
      'Rédiger une fiche sensorielle par échantillon',
      "Présenter oralement trois pièces à la classe",
    ],
    references: ['Issey Miyake — Pleats Please', 'Sheila Hicks, sculptures textiles'],
  },
  {
    id: 'seq-2mode-silhouette',
    classId: 'seconde-mode',
    title: 'Première silhouette',
    problematique: "Comment le vêtement construit-il une posture et une identité ?",
    objectifs: [
      'Comprendre les bases du patronage à plat',
      'Réaliser une silhouette simple sur mannequin',
      "Articuler intention et contrainte technique",
    ],
    competences: ['Concevoir', 'Réaliser', 'Analyser'],
    duree: '4 semaines',
    consignes: [
      'Choisir une référence artistique de départ',
      'Réaliser trois croquis de recherche',
      'Monter une toile d\'essai à échelle réduite',
    ],
    references: ['Yohji Yamamoto', 'Rei Kawakubo, Comme des Garçons'],
  },
  {
    id: 'seq-2mu-lecture-plan',
    classId: 'seconde-maintenance-usinage',
    title: 'Lire et comprendre un plan',
    problematique: "Comment un dessin technique transmet-il une intention de fabrication ?",
    objectifs: [
      'Identifier les conventions du dessin technique',
      'Relever des cotes et des tolérances',
      'Associer plan et pièce réelle',
    ],
    competences: ['Analyser', 'Mesurer', 'Communiquer techniquement'],
    duree: '2 semaines',
    consignes: [
      'Relever cinq cotes sur le plan fourni',
      'Identifier les erreurs sur une pièce non conforme',
      'Rédiger un compte-rendu de contrôle',
    ],
    references: ['Norme ISO de dessin technique', 'Atelier Renault — carnets de conception'],
  },
  {
    id: 'seq-1mu-diagnostic',
    classId: 'premiere-maintenance-usinage',
    title: 'Diagnostic de panne',
    problematique: "Comment organiser une démarche de diagnostic fiable et méthodique ?",
    objectifs: [
      'Structurer une démarche de diagnostic',
      "Utiliser les appareils de mesure adaptés",
      'Documenter une intervention de A à Z',
    ],
    competences: ['Diagnostiquer', 'Organiser', 'Rédiger un rapport'],
    duree: '5 semaines',
    consignes: [
      "Compléter la fiche de diagnostic normalisée",
      'Proposer deux hypothèses de panne argumentées',
      'Présenter la solution retenue en atelier',
    ],
    references: ['Méthode SMART de maintenance industrielle'],
  },
  {
    id: 'seq-2agora-affiche',
    classId: 'seconde-agora',
    title: "L'affiche engagée",
    problematique: 'Comment convaincre par une image simple et forte ?',
    objectifs: [
      "Comprendre les mécanismes de la communication visuelle",
      'Articuler texte et image dans une composition',
      'Défendre un point de vue par le design',
    ],
    competences: ['Concevoir', "S'exprimer à l'oral", 'Analyser une image'],
    duree: '3 semaines',
    consignes: [
      'Choisir une cause à défendre',
      'Produire trois pistes graphiques distinctes',
      "Présenter le projet final en classe",
    ],
    references: ['Alain Le Quernec', 'Käthe Kollwitz'],
  },
  {
    id: 'seq-1agora-recit',
    classId: 'premiere-agora',
    title: "Design et récit collectif",
    problematique: "Comment le design peut-il raconter une histoire commune ?",
    objectifs: [
      "Mener une enquête de terrain",
      'Construire une narration visuelle',
      'Travailler en groupe sur un temps long',
    ],
    competences: ['Enquêter', 'Concevoir en groupe', 'Synthétiser'],
    duree: '6 semaines',
    consignes: [
      "Interroger trois personnes ressources",
      "Produire un support de restitution collectif",
      'Documenter le processus dans un carnet de bord',
    ],
    references: ['Ateliers populaires de mai 1968', 'Design des communs'],
  },
  {
    id: 'seq-tmu-projet-final',
    classId: 'terminale-maintenance-usinage',
    title: "Projet industriel complet",
    problematique: "Comment mener un projet de remise en service du diagnostic à la validation ?",
    objectifs: [
      'Piloter un projet technique de bout en bout',
      "Respecter un cahier des charges industriel",
      "Valider la conformité d'une remise en service",
    ],
    competences: ['Piloter un projet', 'Diagnostiquer', 'Valider et documenter'],
    duree: '8 semaines',
    consignes: [
      'Rédiger le cahier des charges du projet',
      'Tenir un journal de bord technique',
      'Soutenir le projet devant un jury professionnel',
    ],
    references: ['Référentiel Bac Pro MEI'],
  },
  {
    id: 'seq-tmode-collection',
    classId: 'terminale-mode',
    title: 'Collection de fin de cursus',
    problematique: 'Comment affirmer une écriture personnelle sur une collection cohérente ?',
    objectifs: [
      'Développer une identité créative singulière',
      'Construire une collection de trois pièces minimum',
      'Préparer un dossier professionnel complet',
    ],
    competences: ['Concevoir', 'Réaliser', 'Présenter un dossier professionnel'],
    duree: '10 semaines',
    consignes: [
      'Constituer un moodboard directeur',
      "Réaliser les trois pièces jusqu'au prototype final",
      'Préparer une soutenance de quinze minutes',
    ],
    references: ['Martin Margiela', 'Ann Demeulemeester'],
  },
  {
    id: 'seq-tagora-portfolio',
    classId: 'terminale-agora',
    title: 'Portfolio et oral de synthèse',
    problematique: "Comment donner à voir trois années de recherche en design ?",
    objectifs: [
      'Sélectionner et hiérarchiser ses travaux',
      "Construire un portfolio éditorial cohérent",
      "S'exprimer avec assurance à l'oral",
    ],
    competences: ['Synthétiser', 'Mettre en page', "S'exprimer à l'oral"],
    duree: '5 semaines',
    consignes: [
      'Sélectionner dix projets représentatifs',
      'Rédiger une note d\'intention par projet',
      "Répéter l'oral de synthèse en conditions réelles",
    ],
    references: ['Portfolios de fin d\'études — ENSCI, ENSAD'],
  },
  {
    id: 'seq-3pm-decouverte',
    classId: '3pm',
    title: 'Découverte des filières',
    problematique: "Comment choisir une orientation en connaissance de cause ?",
    objectifs: [
      'Explorer plusieurs univers professionnels',
      "Restituer une expérience de stage",
      "Affiner un projet d'orientation",
    ],
    competences: ['Observer', 'Restituer', "S'orienter"],
    duree: '4 semaines',
    consignes: [
      'Réaliser un carnet de stage illustré',
      "Interviewer un professionnel du secteur choisi",
      'Restituer devant la classe',
    ],
    references: ['Onisep — parcours métiers'],
  },
  {
    id: 'seq-btsesf-habitat',
    classId: 'bts-esf',
    title: 'Habitat et cadre de vie',
    problematique: "Comment l'aménagement d'un espace influence-t-il le bien-être ?",
    objectifs: [
      "Analyser un espace domestique existant",
      'Proposer des aménagements adaptés',
      "Argumenter des choix centrés sur l'usager",
    ],
    competences: ['Analyser un usage', 'Concevoir', 'Argumenter'],
    duree: '4 semaines',
    consignes: [
      "Réaliser un diagnostic d'usage sur un cas concret",
      'Proposer deux scénarios d\'aménagement',
      'Présenter une préconisation argumentée',
    ],
    references: ['Ergonomie de l\'habitat — CSTB'],
  },
]

export function getSequencesByClass(classId: string): Sequence[] {
  return sequences.filter((s) => s.classId === classId)
}
