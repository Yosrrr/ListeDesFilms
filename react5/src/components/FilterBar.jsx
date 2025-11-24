import { useMovies } from '../context/CharactersContext';

function FilterBar() {
  const { selectedGenre, setSelectedGenre, searchQuery, setSearchQuery, genres } = useMovies();

  return (
    <div className="filter-bar">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un film par titre..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <div className="genre-filters">
        <button
          className={`filter-btn ${selectedGenre === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedGenre('all')}
        >
          Tous les genres
        </button>
        {genres.map(genre => (
          <button
            key={genre.id}
            className={`filter-btn ${selectedGenre === genre.id.toString() ? 'active' : ''}`}
            onClick={() => setSelectedGenre(genre.id.toString())}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
