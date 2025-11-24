import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YTk1Yzc1NmU3MTZjZjhjOTMxMmQwMWExYTk5ZTI1ZiIsInN1YiI6IjY0MjkyZDM4MzJhODUwMDA5NGQ0YmNiNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0KLK7dkfXVq8uMPQwjXWzJfKKJPp8gOz4_5-nzSjXgc';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// Thunk pour charger les films populaires
export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async () => {
    console.log('Fetching movies...');
    const response = await fetch(`${BASE_URL}/movie/popular?language=fr-FR`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log('Movies received:', data);
    return data.results;
  }
);

// Thunk pour charger les genres
export const fetchGenres = createAsyncThunk(
  'movies/fetchGenres',
  async () => {
    console.log('Fetching genres...');
    const response = await fetch(`${BASE_URL}/genre/movie/list?language=fr-FR`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log('Genres received:', data);
    return data.genres;
  }
);

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    genres: [],
    favoriteIds: [],
    selectedGenre: 'all',
    searchQuery: '',
    loading: false
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const id = action.payload;

      if (state.favoriteIds.includes(id)) {
        state.favoriteIds = state.favoriteIds.filter(favId => favId !== id);
      } else {
        state.favoriteIds.push(id);
      }
    },
    setGenreFilter: (state, action) => {
      state.selectedGenre = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        console.log('Movies loading...');
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        console.log('Movies loaded:', action.payload);
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        console.error('Error loading movies:', action.error);
        state.loading = false;
      })
      .addCase(fetchGenres.fulfilled, (state, action) => {
        console.log('Genres loaded:', action.payload);
        state.genres = action.payload;
      });
  }
});

export const { toggleFavorite, setGenreFilter, setSearchQuery } = moviesSlice.actions;

// Selectors
export const selectMovies = (state) => state.movies.movies;
export const selectGenres = (state) => state.movies.genres;
export const selectFavoriteIds = (state) => state.movies.favoriteIds;
export const selectSelectedGenre = (state) => state.movies.selectedGenre;
export const selectSearchQuery = (state) => state.movies.searchQuery;
export const selectLoading = (state) => state.movies.loading;

export const selectFavoriteMovies = (state) => {
  return state.movies.movies.filter(movie =>
    state.movies.favoriteIds.includes(movie.id)
  );
};

export const selectFilteredMovies = (state) => {
  const { movies, selectedGenre, searchQuery } = state.movies;
  
  let filtered = movies;

  // Filtrer par genre
  if (selectedGenre !== 'all') {
    filtered = filtered.filter(movie =>
      movie.genre_ids.includes(parseInt(selectedGenre))
    );
  }

  // Filtrer par recherche
  if (searchQuery.trim()) {
    filtered = filtered.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return filtered;
};

export default moviesSlice.reducer;
