# Vos propres images

Ce dossier est prévu pour vos photos de travaux d'élèves. Il est vide pour
l'instant : le site utilise des dégradés de couleur à la place, le temps que
vous ajoutiez vos images.

## Comment ajouter une photo

1. Déposez le fichier dans le sous-dossier qui correspond (`portfolio/`,
   `mode/`, `maintenance/`, `agora/`, `3pm/`, `bts-esf/` ou `resources/`).
2. Importez-le en haut du fichier de données concerné, par exemple dans
   `src/data/portfolio.ts` :

   ```ts
   import banquetRomain from '../assets/portfolio/banquet-romain.jpg'
   ```

3. Renseignez le champ `image` de l'entrée correspondante :

   ```ts
   {
     id: 'banquet-romain',
     // ...
     image: banquetRomain,
   }
   ```

Dès qu'un `image` est renseigné, il remplace automatiquement le dégradé —
aucun composant à modifier.

## Sous-dossiers

- `portfolio/` — photos des réalisations présentées dans le Portfolio
- `mode/`, `maintenance/`, `agora/`, `3pm/`, `bts-esf/` — visuels propres à
  chaque filière (cartes de classe, pages de classe…)
- `resources/` — illustrations pour la bibliothèque de ressources
