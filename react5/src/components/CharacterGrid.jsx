import { useMovies } from '../context/CharactersContext';
import MovieCard from './CharacterCard';

function MovieGrid() {
  const { getFilteredMovies, loading } = useMovies();

  if (loading) {
    return <div className="loading">Chargement des films...</div>;
  }

  const filteredMovies = getFilteredMovies();

  if (filteredMovies.length === 0) {
    return <div className="no-results">Aucun film trouvé</div>;
  }

  return (
    <div className="movie-grid">
      {filteredMovies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
