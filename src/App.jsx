import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { fetchGenres, fetchTrending } from 'shared/services/fetch-api';
// import {
//   fechMovie,
//   fetchMovieDetails,
//   fetchCredits,
//   fetchReviews,
// } from 'shared/services/fetch-api';

import GlobalStyle from 'globalStyles';

import NavMenu from 'modules/NavMenu/NavMenu';
import Home from 'pages/Home/Home';
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import NotFoundPage from 'pages/NotFound/NotFoundPage';


export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movie">
      <GlobalStyle/>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
