import useMoviesStore from '../store/useCharactersStore';

function FilterBar() {
  const selectedGenre = useMoviesStore(state => state.selectedGenre);
  const setGenre = useMoviesStore(state => state.setGenre);
  const genres = useMoviesStore(state => state.genres);
  const searchQuery = useMoviesStore(state => state.searchQuery);
  const setSearchQuery = useMoviesStore(state => state.setSearchQuery);

  return (
    <div className="filter-section">
      <div className="search-bar">
        <input
          type="text"
          placeholder="🔍 Rechercher un film par titre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-bar">
        <button
          className={`filter-btn ${selectedGenre === 'all' ? 'active' : ''}`}
          onClick={() => setGenre('all')}
        >
          Tous les genres
        </button>
        {genres.map(genre => (
          <button
            key={genre.id}
            className={`filter-btn ${selectedGenre === genre.id.toString() ? 'active' : ''}`}
            onClick={() => setGenre(genre.id.toString())}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
