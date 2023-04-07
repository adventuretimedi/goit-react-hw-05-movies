import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'servises/Api';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import s from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  console.log(location.state);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getMovieDetails(movieId);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    // eslint-disable-next-line
  }, []);

  if (movie === null) {
    return null;
  }

  return (
    <section>
      <Link to={backLinkHref}>Back</Link>
      {/* <Link to="/movies">Back to movies</Link> */}
      <div className={s.movieCard}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={'poster'}
          width={200}
        />
        <div className={s.desctiptionCard}>
          <p className={s.title}>{movie.title}</p>
          <p>Rating: {movie.vote_average.toFixed(1)}</p>
          <p className={s.overview}>Overview</p>
          <p>{movie.overview}</p>
          <p className={s.genre}>Genres</p>
          <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
        </div>
      </div>
      <div>
        <p className={s.info}>Additional information</p>
        <ul>
          <li className={s.listItem}>
            <Link to="cast" className={s.infoItem}>
              Cast
            </Link>
          </li>
          <li className={s.listItem}>
            <Link to="reviews" className={s.infoItem}>
              Reviews
            </Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </section>
  );
};

export default MovieDetails;
