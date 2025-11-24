import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectGenres, 
  selectSelectedGenre, 
  selectSearchQuery,
  setGenreFilter,
  setSearchQuery,
  fetchGenres 
} from '../store/moviesSlice';

function FilterBar() {
  const genres = useSelector(selectGenres);
  const selectedGenre = useSelector(selectSelectedGenre);
  const searchQuery = useSelector(selectSearchQuery);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <div className="filter-bar">
      {/* Barre de recherche */}
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍 Rechercher un film par titre..."
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
          className="search-input"
        />
      </div>

      {/* Filtres par genre */}
      <div className="genre-filters">
        <button
          className={`filter-btn ${selectedGenre === 'all' ? 'active' : ''}`}
          onClick={() => dispatch(setGenreFilter('all'))}
        >
          Tous les genres
        </button>
        {genres.map(genre => (
          <button
            key={genre.id}
            className={`filter-btn ${selectedGenre === genre.id.toString() ? 'active' : ''}`}
            onClick={() => dispatch(setGenreFilter(genre.id.toString()))}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
