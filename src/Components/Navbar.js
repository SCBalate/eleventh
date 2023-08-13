import React from 'react';
import { useSearchContext } from '../SearchContext';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import { movies } from '../Const/movies';
import './style.css';

const Navbar =()=>{
const { searchQuery, setSearchQuery } = useSearchContext();
//   const navigate = useNavigate();

  const handleSearchInput = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
//   };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h1>IMDB</h1>
        </div>
        <div className="search">
          <input
            type="text"
            placeholder="Search by title, cast, or director..."
            value={searchQuery}
            onChange={handleSearchInput}
          />
        </div>
        <div className="menu">
          <Link to="/">
            Movies
          </Link>
          <Link to="/watch-list">Watch List</Link>
          <Link to="/starred-movies">Starred Movies</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
