import React from 'react';

const DetailedMoviePage = ({ movie }) => {
  return (
    <div className='movie-detail'>
      <img src={movie?.imageURL} alt={movie.title} width={500} height={300} />
      <h2>{movie?.title}</h2>
      <p>{movie?.summary}</p>
     <p>Year : {movie?.year}</p>
     <p>Genere : {movie?.genre}</p>
     <p>Rating : {movie?.rating}</p>
     <p>Director : {movie?.director}</p>
     <p>Cast : {movie?.cast}</p>
     <div className='btn-container'>
                <button className='btn-secondary'>Star</button>
                <button className='btn-secondary'>Add to Watchlist</button>
              </div>
    </div>
  );
};

export default DetailedMoviePage;
