// import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import GhostBox from '../pages/NotFound/GhostBox';
import { SharedLayout } from './SharedLayout/SharedLayout';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<GhostBox />} />
      </Routes>
    </div>
  );
};

export default App;
