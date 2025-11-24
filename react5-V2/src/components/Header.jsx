import { useSelector } from 'react-redux';
import { selectFavoriteIds } from '../store/moviesSlice';

function Header() {
  const favoriteIds = useSelector(selectFavoriteIds);

  return (
    <header className="header">
      <h1>🎬 Application Films</h1>
      <div className="favorites-badge">
        ⭐ {favoriteIds.length} films favoris
      </div>
    </header>
  );
}

export default Header;
