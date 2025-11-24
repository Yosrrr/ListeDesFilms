import { useMovies } from '../context/CharactersContext';

function Header() {
  const { favoriteIds } = useMovies();

  return (
    <header className="header">
      <h1>🎬 Application Films Populaires</h1>
      <div className="favorites-badge">
        ⭐ {favoriteIds.length} film{favoriteIds.length > 1 ? 's' : ''} favori{favoriteIds.length > 1 ? 's' : ''}
      </div>
    </header>
  );
}

export default Header;
