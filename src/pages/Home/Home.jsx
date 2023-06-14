import { getTrendingMovies } from 'servises/Api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';
import s from './Home.module.css';

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();
        console.log(data);
        setTopMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className={s.wrapper}>
      {/* <h2 className={s.title}>Trending today</h2> */}
      <MovieList movies={topMovies} />
    </div>
  );
};

export default Home;
