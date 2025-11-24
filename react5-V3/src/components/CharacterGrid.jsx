import { useEffect } from 'react';
import useMoviesStore from '../store/useCharactersStore';
import MovieCard from './CharacterCard';

function MovieGrid() {
  const movies = useMoviesStore(state => state.movies);
  const selectedGenre = useMoviesStore(state => state.selectedGenre);
  const searchQuery = useMoviesStore(state => state.searchQuery);
  const loading = useMoviesStore(state => state.loading);
  const fetchMovies = useMoviesStore(state => state.fetchMovies);
  const fetchGenres = useMoviesStore(state => state.fetchGenres);

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  }, [fetchMovies, fetchGenres]);

  if (loading) {
    return <div className="loading">Chargement des films...</div>;
  }

  // Filtrage local
  let filteredMovies = movies;

  // Filtre par genre
  if (selectedGenre !== 'all') {
    filteredMovies = filteredMovies.filter(movie =>
      movie.genre_ids.includes(parseInt(selectedGenre))
    );
  }

  // Recherche par titre
  if (searchQuery.trim() !== '') {
    filteredMovies = filteredMovies.filter(movie =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  return (
    <div className="movie-grid">
      {filteredMovies.length === 0 ? (
        <div className="no-results">Aucun film trouvé</div>
      ) : (
        filteredMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))
      )}
    </div>
  );
}

export default MovieGrid;
