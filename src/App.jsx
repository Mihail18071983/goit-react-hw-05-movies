import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import GlobalStyle from 'globalStyles';
import SharedLayout from 'shared/SharedLayout/SharedLayout';
import Loader from 'shared/Loader/Loader';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('./components/Cast/Cast'));
const NotFoundPage = lazy(() => import('./pages/NotFound/NotFoundPage'));
const MovieRewiewers = lazy(() => import('./components/MovieReviewers/MovieRewiewers'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<Loader/>}>
        <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieRewiewers />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
</Suspense>
      
    </>
  );
};
