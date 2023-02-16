import { Routes, Route } from 'react-router-dom';

import GlobalStyle from 'globalStyles';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import NotFoundPage from 'pages/NotFound/NotFoundPage';
import MovieCast from 'components/Cast/Cast';
import MovieRewiewers from 'components/MovieReviewers/MovieRewiewers';

import SharedLayout from 'shared/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <GlobalStyle />
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
    </>
  );
};
