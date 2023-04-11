import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const GhostBox = lazy(() => import('../pages/NotFound/GhostBox'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* помітка для себе */}
        <Route path="/goit-react-hw-05-movies" element={<Home />} />

        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      {/* <Route path="*" element={<Navigate to="/" />} /> */}
      <Route path="*" element={<GhostBox />} />
    </Routes>
  );
};

export default App;
