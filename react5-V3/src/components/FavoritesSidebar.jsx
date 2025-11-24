import useMoviesStore from '../store/useCharactersStore';

function FavoritesSidebar() {
  const movies = useMoviesStore(state => state.movies);
  const favoriteIds = useMoviesStore(state => state.favoriteIds);
  const toggleFavorite = useMoviesStore(state => state.toggleFavorite);

  const favoriteMovies = movies.filter(movie => favoriteIds.includes(movie.id));

  return (
    <div className="favorites-sidebar">
      <h2>⭐ Mes Favoris ({favoriteMovies.length})</h2>

      {favoriteMovies.length === 0 ? (
        <p style={{ color: '#95a5a6', textAlign: 'center', marginTop: '20px' }}>
          Aucun film favori
        </p>
      ) : (
        favoriteMovies.map(movie => {
          const posterUrl = movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : 'https://via.placeholder.com/200x300?text=No+Image';

          return (
            <div key={movie.id} className="favorite-item">
              <img src={posterUrl} alt={movie.title} />
              <div className="favorite-info">
                <span className="favorite-title">{movie.title}</span>
                <span className="favorite-rating">
                  ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'}
                </span>
              </div>

              <button
                onClick={() => toggleFavorite(movie.id)}
                className="remove-favorite-btn"
              >
                ❌
              </button>
            </div>
          );
        })
      )}
    </div>
  );
}

export default FavoritesSidebar;
