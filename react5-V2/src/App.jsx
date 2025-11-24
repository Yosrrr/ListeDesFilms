import Header from './components/Header';
import FilterBar from './components/FilterBar';
import MovieGrid from './components/MovieGrid';
import FavoritesSidebar from './components/FavoritesSidebar';

function App() {
  console.log('App component rendering...');
  
  return (
    <div>
      <Header />

      <div className="main-container">
        <div>
          <FilterBar />
          <MovieGrid />
        </div>

        <FavoritesSidebar />
      </div>
    </div>
  );
}

export default App;
