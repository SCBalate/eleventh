export const GenreFilter = ({ genres, selectedGenre, onGenreChange }) => (
    <div className='genre-filter'>
      <label>Genre:</label>
      <select value={selectedGenre} onChange={(e) => onGenreChange(e.target.value)}>
        <option value=''>All Genres</option>
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </select>
    </div>
  );
 
 
  
  
  
  
  
  