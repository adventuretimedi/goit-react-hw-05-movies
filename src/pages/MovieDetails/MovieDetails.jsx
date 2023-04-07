import { Suspense, useEffect, useState } from 'react';
import { useParams, useLocation, Link, Outlet } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';
import { getMovieDetails } from 'servises/Api';
import { ColorRing } from 'react-loader-spinner';
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

  const posterPath =
    movie.poster_path !== null
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : '';

  return (
    <div>
      <Link to={backLinkHref} className={s.backBtn}>
        <div className={s.backBtnWrapper}>
          <IoChevronBack />
          <span>Back</span>
        </div>
      </Link>
      <div className={s.movieCard}>
        <img src={posterPath} alt={'poster'} width={200} />
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
        <Suspense
          fallback={
            <div>
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
              />
              <div>Loading...</div>
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
