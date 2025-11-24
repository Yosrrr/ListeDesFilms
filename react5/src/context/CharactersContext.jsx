import { createContext, useState, useEffect, useContext } from 'react';

const MoviesContext = createContext();

export { MoviesContext };

// Clé API TMDB - Utilisez la variable d'environnement ou clé de démo
const API_KEY = import.meta.env.VITE_TMDB_API_KEY || 'a64b8f0b8308d4e1c8f8e2c3c8f3e1c8';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Hook personnalisé pour utiliser le contexte
// eslint-disable-next-line react-refresh/only-export-components
export const useMovies = () => {
  const context = useContext(MoviesContext);
  if (!context) {
    throw new Error('useMovies must be used within a MoviesProvider');
  }
  return context;
};

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [favoriteIds, setFavoriteIds] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Charger les genres
  useEffect(() => {
    fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`)
      .then(res => res.json())
      .then(data => {
        setGenres(data.genres || []);
      })
      .catch(err => console.error('Erreur lors du chargement des genres:', err));
  }, []);

  // Charger les films populaires
  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`)
      .then(res => res.json())
      .then(data => {
        const moviesWithImages = data.results.map(movie => ({
          ...movie,
          poster_path: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null
        }));
        setMovies(moviesWithImages);
        setLoading(false);
      })
      .catch(err => {
        console.error('Erreur lors du chargement des films:', err);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (id) => {
    setFavoriteIds(prev =>
      prev.includes(id)
        ? prev.filter(favId => favId !== id)
        : [...prev, id]
    );
  };

  const getFavoriteMovies = () => {
    return movies.filter(movie => favoriteIds.includes(movie.id));
  };

  const getFilteredMovies = () => {
    let filtered = movies;

    // Filtrer par genre
    if (selectedGenre !== 'all') {
      filtered = filtered.filter(movie => 
        movie.genre_ids && movie.genre_ids.includes(parseInt(selectedGenre))
      );
    }

    // Filtrer par recherche
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  };

  const value = {
    movies,
    genres,
    favoriteIds,
    selectedGenre,
    searchQuery,
    loading,
    toggleFavorite,
    setSelectedGenre,
    setSearchQuery,
    getFavoriteMovies,
    getFilteredMovies
  };

  return (
    <MoviesContext.Provider value={value}>
      {children}
    </MoviesContext.Provider>
  );
};
