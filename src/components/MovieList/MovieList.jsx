import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import s from './MovieList.module.css';
import { useLocation } from 'react-router-dom';
import loadming from '../../images/loadming.jpg';

const MovieList = ({ movies }) => {
  const location = useLocation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex(prevIndex => prevIndex + 3);
  };

  const handlePrev = () => {
    setCurrentIndex(prevIndex => prevIndex - 3);
  };

  const visibleMovies = movies.slice(currentIndex, currentIndex + 3);

  return (
    <div className={s.container}>
      <div className={s.buttonContainer}>
        {currentIndex > 0 && (
          <button className={s.arrowButton} onClick={handlePrev}>
            <FaArrowLeft />
          </button>
        )}
        <h2 className={s.title}>Trending today</h2>
        {currentIndex + 3 < movies.length && (
          <button className={s.arrowButton} onClick={handleNext}>
            <FaArrowRight />
          </button>
        )}
      </div>
      <ul className={s.list}>
        {visibleMovies.map((movie, index) => {
          const posterPath =
            movie.poster_path !== null
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : loadming;
          return (
            <li key={movie.id} className={s.item}>
              <Link
                to={`/goit-react-hw-05-movies/movies/${movie.id}`}
                state={{ from: location }}
                className={s.link}
              >
                <div className={s.filmCardWrapper}>
                  <img
                    className={s.imgFilm}
                    src={posterPath}
                    alt={'poster'}
                    width={75}
                  />
                  <div className={s.descriptioWrapper}>
                    <div className={s.description}>
                      <p className={s.movieTitle}>
                        {index + 1}. {movie.title}
                      </p>
                      <p>Rating: {movie.vote_average.toFixed(1)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;
