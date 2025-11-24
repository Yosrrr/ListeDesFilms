import useMoviesStore from '../store/useCharactersStore';

function Header() {
  const favoriteIds = useMoviesStore(state => state.favoriteIds);

  return (
    <header className="header">
      <h1>🎬 Collection de Films</h1>
      <div className="likes-badge">
        ⭐ {favoriteIds.length} films favoris
      </div>
    </header>
  );
}

export default Header;
