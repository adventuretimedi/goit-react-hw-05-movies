import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';
import { useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map((movie, index) => {
        const posterPath =
          movie.poster_path !== null
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : '';
        return (
          <li key={movie.id} className={s.item}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={s.link}
            >
              <img src={posterPath} alt={'poster'} width={75} />
              <div>
                <p className={s.title}>
                  {index + 1}. {movie.title}
                </p>
                <p>Rating: {movie.vote_average.toFixed(1)}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
