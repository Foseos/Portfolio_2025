# Portfolio - Lucas Dachez

Portfolio personnel de développeur web, construit avec React et Vite.

**(https://www.portfoliodachez.fr)**

## Stack technique

- **React 19** + **Vite 7**
- **Tailwind CSS 4** (via le plugin Vite)
- **Framer Motion** pour les animations
- **React Router** pour le routing
- **React Helmet Async** pour le SEO
- **Lucide React** pour les icones
- **Web3Forms** pour le formulaire de contact

## Fonctionnalites

- Design responsive (mobile, tablette, desktop)
- Theme sombre / clair
- Lazy loading des sections sous la ligne de flottaison
- SEO (meta tags, Open Graph, JSON-LD)
- Accessibilite (skip-to-content, semantique HTML)
- Error boundary pour la gestion d'erreurs
- Arriere-plan anime (etoiles)

## Installation

```bash
git clone https://github.com/Foseos/Portfolio_2025.git
cd Portfolio_2025
npm install
```

Creer un fichier `.env.local` :

```
VITE_WEB3FORMS_ACCESS_KEY=your_access_key
```

## Scripts

```bash
npm run dev       # Serveur de developpement
npm run build     # Build de production
npm run preview   # Preview du build
npm run lint      # Linting ESLint
```

## Structure du projet

```
src/
├── components/       # Composants React (Navbar, Hero, About, Skills, etc.)
├── data/             # Donnees statiques (projets, experiences, skills, config)
├── hooks/            # Hooks personnalises (pagination, section active)
├── lib/              # Utilitaires
├── pages/            # Pages (Home, 404)
└── index.css         # Styles globaux et theme
```

## Deploiement

Deploye sur **Vercel** avec deploiement automatique depuis la branche `main`.
