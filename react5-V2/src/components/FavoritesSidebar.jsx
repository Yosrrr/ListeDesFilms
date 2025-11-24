import { useSelector, useDispatch } from 'react-redux';
import { selectFavoriteMovies, toggleFavorite } from '../store/moviesSlice';

function FavoritesSidebar() {
  const favoriteMovies = useSelector(selectFavoriteMovies);
  const dispatch = useDispatch();

  return (
    <div className="favorites-sidebar">
      <h2>⭐ Mes Favoris ({favoriteMovies.length})</h2>

      <div className="favorites-list">
        {favoriteMovies.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', padding: '20px' }}>
            Aucun film favori
          </p>
        ) : (
          favoriteMovies.map(movie => {
            const imageUrl = movie.poster_path 
              ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
              : null;

            return (
              <div key={movie.id} className="favorite-item">
                {imageUrl ? (
                  <img src={imageUrl} alt={movie.title} />
                ) : (
                  <div className="no-poster-small">🎬</div>
                )}
                
                <div className="favorite-info">
                  <span className="favorite-title">{movie.title}</span>
                  <span className="favorite-rating">⭐ {movie.vote_average.toFixed(1)}</span>
                </div>

                <button
                  onClick={() => dispatch(toggleFavorite(movie.id))}
                  className="remove-favorite-btn"
                >
                  ❌
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default FavoritesSidebar;
