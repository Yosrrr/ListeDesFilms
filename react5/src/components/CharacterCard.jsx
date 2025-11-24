import { useMovies } from '../context/CharactersContext';

function MovieCard({ movie }) {
  const { favoriteIds, toggleFavorite } = useMovies();
  const isFavorite = favoriteIds.includes(movie.id);

  return (
    <div className="movie-card">
      <button
        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
        onClick={() => toggleFavorite(movie.id)}
        title={isFavorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}
      >
        {isFavorite ? '⭐' : '☆'}
      </button>

      {movie.poster_path ? (
        <img src={movie.poster_path} alt={movie.title} />
      ) : (
        <div className="no-poster">Pas d'affiche</div>
      )}

      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-rating">
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
        </div>
        <div className="movie-date">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
