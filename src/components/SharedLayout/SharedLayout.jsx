import Container from 'components/Container/Container';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Outlet />
    </Container>
  );
};
