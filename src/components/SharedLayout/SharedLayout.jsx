import Container from 'components/Container/Container';
import { NavLink, Outlet } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';
import s from './SharedLayout.module.css';

export const SharedLayout = () => {
  const linkClassName = ({ isActive }) =>
    isActive ? s.navItem + ' ' + s.active : s.navItem;

  return (
    <div>
      <header>
        <div className={s.container}>
          <nav id="topbar" className={s.nav}>
            <NavLink to="/" className={linkClassName}>
              <GiFilmProjector className={s.svg} />
              Home
            </NavLink>
            <NavLink to="/movies" className={linkClassName}>
              Movies
            </NavLink>
          </nav>
        </div>
      </header>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};
