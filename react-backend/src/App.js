import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if (!response.ok) {
        throw new Error('Something Went Wronggg');
      }
      const data = await response.json();
      setMovies(
        data.results.map((item) => {
          return {
            id: item.episode_id,
            title: item.title,
            openingText: item.opening_crawl,
            releaseDate: item.release_date,
          };
        })
      );
    } catch (error) {
      setHasError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler]);

  let movieDetails = <MoviesList movies={movies} />;
  if (isLoading) {
    movieDetails = <p>Loading...</p>;
  } else if (hasError) {
    movieDetails = <p>Something went wrong.</p>;
  } else if (movies.length < 1) {
    movieDetails = <p>No movies to show</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{movieDetails}</section>
    </React.Fragment>
  );
}

export default App;
