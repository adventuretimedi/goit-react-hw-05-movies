import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  return (
    <ul className={s.list}>
      {movies.map((movie, index) => (
        <li key={movie.id} className={s.item}>
          <Link to={`movies/${movie.id}`} className={s.link}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={'poster'}
              width={75}
            />
            <div>
              <p className={s.title}>
                {index + 1}. {movie.title}
              </p>
              <p>Rating: {movie.vote_average.toFixed(1)}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
