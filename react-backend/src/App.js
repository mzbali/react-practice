import React, { useCallback, useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);

  const getMovieHandler = useCallback(async () => {
    setIsLoading(true);
    setHasError(false);
    try {
      //const response = await fetch('https://swapi.dev/api/films');
      const response = await fetch(
        'https://react-http-d90c3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json'
      );
      if (!response.ok) {
        throw new Error('Something Went Wronggg');
      }
      const data = await response.json();
      const movielist = [];
      for (let key in data) {
        movielist.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(movielist);
    } catch (error) {
      setHasError(error.message);
    }
    setIsLoading(false);
  }, []);

  const addMovieHandler = async (movie) => {
    const response = await fetch(
      'https://react-http-d90c3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json',
      {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: { 'Content-Type': 'application/json' },
      }
    );
    const data = await response.json();

    console.log(data);
    getMovieHandler();
  };

  useEffect(() => {
    getMovieHandler();
  }, [getMovieHandler]);

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
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={getMovieHandler}>Fetch Movies</button>
      </section>
      <section>{movieDetails}</section>
    </React.Fragment>
  );
}

export default App;
