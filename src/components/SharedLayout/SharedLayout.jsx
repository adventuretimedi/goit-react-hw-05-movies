import { NavLink, Outlet } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';
import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';
import Container from 'components/Container/Container';
import s from './SharedLayout.module.css';

export const SharedLayout = () => {
  const linkClassName = ({ isActive }) =>
    isActive ? s.navItem + ' ' + s.active : s.navItem;

  return (
    <div>
      <header>
        <div className={s.container}>
          <nav className={s.nav}>
            <NavLink
              to="/goit-react-hw-05-movies"
              className={linkClassName}
              end
            >
              <GiFilmProjector className={s.svg} />
              Home
            </NavLink>
            <NavLink
              to="/goit-react-hw-05-movies/movies"
              className={linkClassName}
            >
              Movies
            </NavLink>
          </nav>
        </div>
      </header>
      <Container>
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
      </Container>
    </div>
  );
};
