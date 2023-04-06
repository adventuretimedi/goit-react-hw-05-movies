// import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import GhostBox from './Pages/GhostBox';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route />
        <Route />
        <Route />
        <Route path="*" element={<GhostBox />} />
      </Routes>
    </div>
  );
};

export default App;
