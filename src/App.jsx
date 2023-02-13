import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyle from 'globalStyles';

import NavMenu from 'components/NavMenu/NavMenu';
import Home from 'components/pages/Home/Home';
import Movies from 'components/pages/Movies/Movies';
import MovieDetails from 'components/pages/MovieDetails/MovieDetails';
import NotFoundPage from 'components/pages/NotFound/NotFoundPage';

export const App = () => {
  return (
  <BrowserRouter basename="/goit-react-hw-05-movies">
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
