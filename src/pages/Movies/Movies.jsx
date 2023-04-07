import { BiSearch } from 'react-icons/bi';
import s from './Movies.module.css';
import MovieList from 'components/MovieList/MovieList';
import { getSearchedMovie } from 'servises/Api';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
// import { useEffect } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const fetchSearchedMovies = async query => {
    if (query === null) {
      return;
    }
    try {
      const data = await getSearchedMovie(query);
      setMovies(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleMovieSubmit = e => {
    e.preventDefault();
    const input = e.currentTarget.elements.name.value;
    setSearchParams({ query: input });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    console.log(query);
    fetchSearchedMovies(query);
  }, [searchParams]);

  return (
    <div>
      <form action="" onSubmit={handleMovieSubmit} className={s.form}>
        <input
          type="text"
          name="name"
          placeholder="Search movie..."
          className={s.input}
        />
        <button type="submit" className={s.btn}>
          {' '}
          <BiSearch className={s.svg} />
        </button>
      </form>
      <MovieList movies={movies} />
    </div>
  );
};

export default Movies;
