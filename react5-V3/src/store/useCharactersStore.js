import { create } from 'zustand';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = 'https://api.themoviedb.org/3';

const useMoviesStore = create((set, get) => ({
  movies: [],
  genres: [],
  favoriteIds: [],
  selectedGenre: 'all',
  searchQuery: '',
  loading: true,

  // Charger les genres
  fetchGenres: async () => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`
      );
      const data = await response.json();
      set({ genres: data.genres });
    } catch (error) {
      console.error('Erreur lors du chargement des genres:', error);
    }
  },

  // Charger les films populaires
  fetchMovies: async () => {
    set({ loading: true });

    try {
      const response = await fetch(
        `${API_BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`
      );
      const data = await response.json();

      set({
        movies: data.results,
        loading: false
      });
    } catch (error) {
      console.error('Erreur lors du chargement des films:', error);
      set({ loading: false });
    }
  },

  // Toggle Favori
  toggleFavorite: (id) => {
    set((state) => ({
      favoriteIds: state.favoriteIds.includes(id)
        ? state.favoriteIds.filter(favId => favId !== id)
        : [...state.favoriteIds, id]
    }));
  },

  // Changer le genre
  setGenre: (genreId) => set({ selectedGenre: genreId }),

  // Changer la recherche
  setSearchQuery: (query) => set({ searchQuery: query }),

  // Sélection des favoris
  getFavoriteMovies: () => {
    const { movies, favoriteIds } = get();
    return movies.filter(movie => favoriteIds.includes(movie.id));
  },

  // Filtrage et recherche
  getFilteredMovies: () => {
    const { movies, selectedGenre, searchQuery } = get();
    let filtered = movies;

    // Filtre par genre
    if (selectedGenre !== 'all') {
      filtered = filtered.filter(movie =>
        movie.genre_ids.includes(parseInt(selectedGenre))
      );
    }

    // Recherche par titre
    if (searchQuery.trim() !== '') {
      filtered = filtered.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filtered;
  }
}));

export default useMoviesStore;
