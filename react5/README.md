# 🎬 Application Films Populaires

Une application React moderne pour découvrir les films populaires avec un système de favoris et de filtrage avancé.

## ✨ Fonctionnalités

- ⭐ **Système de favoris** : Ajoutez vos films préférés avec une étoile
- 🎭 **Filtrage par genre** : Filtrez les films par genre (Action, Comédie, Drame, etc.)
- 🔍 **Recherche par titre** : Recherchez facilement un film par son titre
- 📱 **Interface responsive** : Design adapté à tous les écrans
- 🎨 **Design moderne** : Interface élégante inspirée des plateformes de streaming
- 📊 **Sidebar des favoris** : Section dédiée pour vos films favoris

## 🚀 Installation

1. **Clonez le dépôt**
   ```bash
   cd react5
   ```

2. **Installez les dépendances**
   ```bash
   npm install
   ```

3. **Configurez la clé API TMDB**
   
   - Créez un compte sur [The Movie Database (TMDB)](https://www.themoviedb.org/)
   - Obtenez votre clé API gratuite sur [TMDB API Settings](https://www.themoviedb.org/settings/api)
   - Copiez le fichier `.env.example` en `.env`
   - Remplacez `votre_cle_api_ici` par votre clé API TMDB

   ```bash
   copy .env.example .env
   ```

   Puis éditez le fichier `.env` :
   ```
   VITE_TMDB_API_KEY=votre_vraie_cle_api_tmdb
   ```

4. **Lancez l'application**
   ```bash
   npm run dev
   ```

5. **Ouvrez votre navigateur**
   
   L'application sera disponible sur `http://localhost:5173`

## 📁 Structure du projet

```
react5/
├── src/
│   ├── components/
│   │   ├── CharacterCard.jsx      # Carte de film (MovieCard)
│   │   ├── CharacterGrid.jsx      # Grille de films (MovieGrid)
│   │   ├── FilterBar.jsx          # Barre de recherche et filtres
│   │   ├── FavoritesSidebar.jsx   # Sidebar des favoris
│   │   └── Header.jsx             # En-tête de l'application
│   ├── context/
│   │   └── CharactersContext.jsx  # Contexte global (MoviesContext)
│   ├── styles/
│   │   └── styles.css             # Styles CSS
│   ├── App.jsx                    # Composant principal
│   └── main.jsx                   # Point d'entrée
├── .env                           # Variables d'environnement (à créer)
├── .env.example                   # Exemple de configuration
├── package.json
└── README.md
```

## 🎯 Utilisation

1. **Parcourir les films** : Les films populaires s'affichent automatiquement
2. **Rechercher** : Utilisez la barre de recherche pour trouver un film par titre
3. **Filtrer** : Cliquez sur un genre pour filtrer les films
4. **Ajouter aux favoris** : Cliquez sur l'étoile ☆ pour ajouter un film à vos favoris
5. **Voir vos favoris** : Consultez la sidebar à droite pour voir tous vos films favoris
6. **Retirer des favoris** : Cliquez sur ❌ dans la sidebar ou sur ⭐ sur la carte du film

## 🛠️ Technologies utilisées

- **React 18** : Framework JavaScript
- **Vite** : Build tool ultra-rapide
- **Context API** : Gestion d'état globale
- **TMDB API** : Base de données de films
- **CSS moderne** : Styling avec Flexbox et Grid

## 🎨 Personnalisation

Vous pouvez personnaliser l'application en modifiant :

- Les couleurs dans `src/styles/styles.css`
- Le nombre de films chargés dans `CharactersContext.jsx`
- Les genres affichés en modifiant l'API TMDB

## 📝 Scripts disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile l'application pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## 🌐 API TMDB

Cette application utilise l'API de [The Movie Database (TMDB)](https://www.themoviedb.org/).

- Documentation : https://developers.themoviedb.org/3
- Endpoints utilisés :
  - `/movie/popular` : Films populaires
  - `/genre/movie/list` : Liste des genres

## 📄 Licence

Ce projet est libre d'utilisation pour l'apprentissage et les projets personnels.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
- Signaler des bugs
- Proposer des améliorations
- Soumettre des pull requests

## 📧 Contact

Pour toute question ou suggestion, n'hésitez pas à ouvrir une issue sur le dépôt.

---

**Bon visionnage ! 🍿**
