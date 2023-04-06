import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'servises/Api';
import s from './Cast.module.css';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const data = await getMovieCast(movieId);
        console.log(data);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast(cast);
    // eslint-disable-next-line
  }, []);

  if (cast === null) {
    return null;
  }
  return (
    <ul className={s.list}>
      {cast.map(({ id, character, name, profile_path }) => {
        const profilePath =
          profile_path !== null
            ? `https://image.tmdb.org/t/p/w500${profile_path}`
            : '';
        return (
          <li key={id} className={s.listItem}>
            <div className={s.imageWrapper}>
              <img src={profilePath} alt={name} className={s.image} />
            </div>
            <div>
              <p className={s.name}>{name}</p>
              <p className={s.character}>{character}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Cast;
