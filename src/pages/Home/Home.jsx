import { getTrendingMovies } from 'servises/Api';
import { useEffect, useState } from 'react';
import MovieList from 'components/MovieList/MovieList';

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
    <div>
      <h1>Trending today</h1>
      <MovieList movies={topMovies} />
    </div>
  );
};

export default Home;
