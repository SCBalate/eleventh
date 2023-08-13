import React, { useState } from 'react';
import { movies } from '../Const/movies';
import { useSearchContext } from '../SearchContext';
import DetailedMoviePage from './DetailedMoviePage';
import { GenreFilter } from './GenereFilter';
import './style.css';

const ListingPage = ({ searchResults }) => {
  const { searchQuery } = useSearchContext();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState('');
//   const [selectedYear, setSelectedYear] = useState('');
//   const [selectedRating, setSelectedRating] = useState('');

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

//   const handleYearChange = (year) => {
//     setSelectedYear(year);
//   };

//   const handleRatingChange = (rating) => {
//     setSelectedRating(rating);
//   };


  const filteredMovies = movies.filter((movie) => {
    const isSearchMatch =
      !searchQuery ||
      movie.title.toLowerCase().includes(searchQuery) ||
      movie.cast.some((actor) => actor.toLowerCase().includes(searchQuery)) ||
      movie.director.toLowerCase().includes(searchQuery);

    const isGenreMatch = selectedGenre ? movie.genre === selectedGenre : true;
    // const isYearMatch = selectedYear ? movie.year === selectedYear : true;
    // const isRatingMatch = selectedRating ? movie.rating === selectedRating : true;

    return isSearchMatch && isGenreMatch 
    // && isYearMatch && isRatingMatch;
  });

  const openMovieDetail = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieDetail = () => {
    setSelectedMovie(null);
  };

  return (
    
    <div className='card-container'>
        <div className='filter-container'>
  <GenreFilter genres={['Action', 'Drama', 'Crime', 'Comedy','Fantasy']} selectedGenre={selectedGenre} onGenreChange={handleGenreChange} />
  {/* Render Release Year and Rating filters similarly */}
</div>
      {filteredMovies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        filteredMovies.map((movie) => (
          <div key={movie.id} className='card' onClick={() => openMovieDetail(movie)}>
            <div className='card-body'>
              <img src={movie.imageURL} className='card-img' alt={movie.title} />
              <h3>{movie.title}</h3>
              <p className='description'>{movie.summary}</p>
              <div className='btn-container'>
                <button className='btn-secondary'>Star</button>
                <button className='btn-secondary'>Add to Watchlist</button>
              </div>
            </div>
          </div>
        ))
      )}

      {selectedMovie && (
        <div className='overlay' onClick={closeMovieDetail}>
          <DetailedMoviePage movie={selectedMovie} />
        </div>
      )}
    </div>
  );
};

export default ListingPage;
