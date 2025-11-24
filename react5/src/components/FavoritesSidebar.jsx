import { useMovies } from '../context/CharactersContext';

function FavoritesSidebar() {
  const { getFavoriteMovies, toggleFavorite } = useMovies();
  const favoriteMovies = getFavoriteMovies();

  return (
    <div className="favorites-sidebar">
      <h2>⭐ Mes Favoris ({favoriteMovies.length})</h2>

      {favoriteMovies.length === 0 ? (
        <p style={{ color: '#95a5a6', textAlign: 'center', padding: '20px' }}>
          Aucun film favori.<br/>
          Cliquez sur ☆ pour ajouter des films !
        </p>
      ) : (
        <div className="favorites-list">
          {favoriteMovies.map(movie => (
            <div key={movie.id} className="favorite-item">
              {movie.poster_path ? (
                <img src={movie.poster_path} alt={movie.title} />
              ) : (
                <div className="no-poster-small">?</div>
              )}
              <div className="favorite-info">
                <span className="favorite-title">{movie.title}</span>
                <span className="favorite-rating">⭐ {movie.vote_average?.toFixed(1)}</span>
              </div>
              <button
                onClick={() => toggleFavorite(movie.id)}
                className="remove-favorite-btn"
                title="Retirer des favoris"
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesSidebar;
