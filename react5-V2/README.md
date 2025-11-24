# 🎬 Liste des Films - Movie Browser App

Une application web moderne de navigation et gestion de films utilisant l'API TMDB (The Movie Database). Cette application permet de découvrir les films populaires, de les filtrer par genre, de les rechercher et de gérer vos favoris.

## 📋 Description

Cette application React offre une interface élégante pour explorer le monde du cinéma. Elle récupère les données en temps réel depuis l'API TMDB et permet aux utilisateurs de :

- **Parcourir** les films populaires du moment
- **Filtrer** les films par genre (Action, Comédie, Drame, etc.)
- **Rechercher** des films par titre
- **Gérer** une liste de films favoris
- **Consulter** les informations détaillées (note, date de sortie, affiche)

## ✨ Fonctionnalités

### 🎯 Fonctionnalités Principales

- **Affichage des Films Populaires** : Liste actualisée des films tendances avec leurs affiches
- **Système de Filtrage Avancé** : Filtrage par genres avec interface intuitive
- **Recherche en Temps Réel** : Recherche instantanée par titre de film
- **Gestion des Favoris** : Ajout/suppression de films à votre liste personnelle
- **Sidebar des Favoris** : Accès rapide à vos films préférés
- **Interface Responsive** : Design adaptatif pour tous les écrans
- **Informations Complètes** : Notes, dates de sortie et affiches haute qualité

### 🎨 Interface Utilisateur

- Design moderne et épuré
- Cartes de films avec affiches
- Boutons favoris interactifs (⭐/☆)
- Barre de filtres dynamique
- Sidebar dédiée aux favoris
- Indicateurs de chargement

## 🛠️ Technologies Utilisées

### Core
- **React 19.2.0** - Bibliothèque UI avec les dernières fonctionnalités
- **Vite 7.2.2** - Build tool ultra-rapide pour un développement optimal
- **Redux Toolkit 2.10.1** - Gestion d'état simplifiée et performante
- **React Redux 9.2.0** - Intégration React/Redux

### API
- **TMDB API** - The Movie Database pour les données de films
- **Fetch API** - Requêtes HTTP asynchrones

### Développement
- **ESLint** - Linting et qualité du code
- **Vite HMR** - Hot Module Replacement pour un développement fluide

## 📁 Structure du Projet

```
react5-V2/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/         # Composants React
│   │   ├── Header.jsx             # En-tête de l'application
│   │   ├── FilterBar.jsx          # Barre de filtres (genres + recherche)
│   │   ├── MovieGrid.jsx          # Grille d'affichage des films
│   │   ├── MovieCard.jsx          # Carte individuelle d'un film
│   │   └── FavoritesSidebar.jsx   # Sidebar des favoris
│   │
│   ├── store/              # Redux Store
│   │   ├── store.js               # Configuration du store
│   │   └── moviesSlice.js         # Slice Redux (état + actions + thunks)
│   │
│   ├── styles/             # Styles CSS
│   │   └── styles.css             # Styles globaux
│   │
│   ├── App.jsx             # Composant principal
│   ├── main.jsx            # Point d'entrée React
│   └── index.css           # Styles de base
│
├── index.html              # Template HTML
├── package.json            # Dépendances et scripts
├── vite.config.js          # Configuration Vite
└── eslint.config.js        # Configuration ESLint
```

## 🚀 Installation et Démarrage

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le projet**
```bash
git clone <repository-url>
cd react5-V2
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer l'API TMDB** (optionnel)
   - L'API key est déjà configurée dans `moviesSlice.js`
   - Pour utiliser votre propre clé : créez un compte sur [TMDB](https://www.themoviedb.org/)

4. **Lancer l'application**
```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev      # Lancer le serveur de développement
npm run build    # Créer un build de production
npm run preview  # Prévisualiser le build de production
npm run lint     # Vérifier la qualité du code
```

## 🔧 Architecture Redux

### State Structure
```javascript
{
  movies: [],           // Liste des films chargés
  genres: [],           // Liste des genres disponibles
  favoriteIds: [],      // IDs des films favoris
  selectedGenre: 'all', // Genre actuellement sélectionné
  searchQuery: '',      // Terme de recherche actuel
  loading: false        // État de chargement
}
```

### Actions Principales
- `fetchMovies()` - Récupère les films populaires depuis l'API
- `fetchGenres()` - Récupère la liste des genres
- `toggleFavorite(movieId)` - Ajoute/retire un film des favoris
- `setGenreFilter(genreId)` - Change le filtre de genre
- `setSearchQuery(query)` - Met à jour la recherche

### Selectors
- `selectFilteredMovies` - Films filtrés par genre et recherche
- `selectFavoriteMovies` - Films favoris uniquement
- `selectFavoriteIds` - IDs des favoris
- `selectLoading` - État de chargement

## 🎯 Utilisation

1. **Parcourir les films** : Les films populaires s'affichent automatiquement au chargement
2. **Filtrer par genre** : Utilisez le menu déroulant pour sélectionner un genre
3. **Rechercher** : Tapez dans la barre de recherche pour filtrer par titre
4. **Ajouter aux favoris** : Cliquez sur l'étoile (☆) d'un film
5. **Voir les favoris** : Consultez la sidebar à droite pour vos films favoris
6. **Retirer des favoris** : Cliquez sur l'étoile pleine (⭐) pour retirer

## 🌐 API TMDB

Cette application utilise l'API The Movie Database (TMDB) :
- **Endpoint Films** : `/movie/popular`
- **Endpoint Genres** : `/genre/movie/list`
- **Images** : `https://image.tmdb.org/t/p/w500/`
- **Langue** : Français (fr-FR)

## 🎨 Personnalisation

### Modifier les styles
Les styles principaux se trouvent dans `src/styles/styles.css`

### Ajouter des fonctionnalités
1. Créer un nouveau composant dans `src/components/`
2. Ajouter des actions/reducers dans `src/store/moviesSlice.js`
3. Connecter avec Redux via `useSelector` et `useDispatch`

## 📝 Notes de Développement

- **React 19** : Utilise les dernières fonctionnalités de React
- **Vite** : Build extrêmement rapide avec HMR
- **Redux Toolkit** : Simplifie la gestion d'état avec moins de boilerplate
- **Async Thunks** : Gestion élégante des appels API asynchrones

## 🐛 Débogage

Des logs de console sont inclus pour le débogage :
- Chargement des films et genres
- État des favoris
- Rendu des composants

## 📄 Licence

Ce projet est à usage éducatif dans le cadre d'un cours MERN.

## 🤝 Contribution

Projet personnel - Suggestions et améliorations bienvenues !

---

**Développé avec ❤️ en utilisant React, Redux Toolkit et l'API TMDB**
