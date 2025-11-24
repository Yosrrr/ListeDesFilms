import useMoviesStore from '../store/useCharactersStore';

function MovieCard({ movie }) {
  const favoriteIds = useMoviesStore(state => state.favoriteIds);
  const toggleFavorite = useMoviesStore(state => state.toggleFavorite);

  const isFavorite = favoriteIds.includes(movie.id);
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/500x750?text=No+Image';

  return (
    <div className="movie-card">
      <button
        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
        onClick={() => toggleFavorite(movie.id)}
      >
        {isFavorite ? '⭐' : '☆'}
      </button>

      <img src={posterUrl} alt={movie.title} />

      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-rating">
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
        </div>
        <div className="movie-year">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
