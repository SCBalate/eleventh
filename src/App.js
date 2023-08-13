
import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ListingPage from './Components/ListingPage';
import StarredMovies from './Components/StarredMovies';
import WatchList from './Components/WatchList';
import Navbar from './Components/Navbar';
import DetailedMoviePage from './Components/DetailedMoviePage';
import { SearchProvider } from './SearchContext';
function App() {
  const [searchResults, setSearchResults] = useState('');
  return (
    <div className="App">
    
<Router>
<SearchProvider>
<Navbar setSearchResults={setSearchResults} />
        <Routes>
          <Route path="/" element={<ListingPage searchResults={searchResults} />} />
    <Route path="/Starred movies" element={<StarredMovies/>}/>
    <Route path="/watch list" element={<WatchList/>}/>
    <Route path="/movie/:id" element={<DetailedMoviePage/>} />
  </Routes>
  </SearchProvider>
</Router>
     
    </div>
  );
}

export default App;
