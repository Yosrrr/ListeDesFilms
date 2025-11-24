import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteIds, toggleFavorite } from '../store/moviesSlice';

function MovieCard({ movie }) {
  const favoriteIds = useSelector(selectFavoriteIds);
  const dispatch = useDispatch();

  const isFavorite = favoriteIds.includes(movie.id);
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : null;

  return (
    <div className="movie-card">
      <button
        className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
        onClick={() => dispatch(toggleFavorite(movie.id))}
      >
        {isFavorite ? '⭐' : '☆'}
      </button>

      {imageUrl ? (
        <img src={imageUrl} alt={movie.title} />
      ) : (
        <div className="no-poster">🎬 Pas d'affiche</div>
      )}

      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-rating">
          ⭐ {movie.vote_average.toFixed(1)} / 10
        </div>
        <div className="movie-date">
          {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
