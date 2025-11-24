import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectFilteredMovies,
  selectLoading,
  fetchMovies
} from '../store/moviesSlice';

import MovieCard from './MovieCard';

function MovieGrid() {
  const movies = useSelector(selectFilteredMovies);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('MovieGrid mounted, fetching movies...');
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log('MovieGrid render - loading:', loading, 'movies count:', movies.length);

  if (loading) {
    return <div className="loading">🎬 Chargement des films...</div>;
  }

  if (movies.length === 0) {
    return <div className="no-results">😕 Aucun film trouvé</div>;
  }

  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
