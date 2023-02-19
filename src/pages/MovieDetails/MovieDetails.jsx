import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {  Outlet } from 'react-router-dom';

import { fetchMovieById } from 'shared/services/fetch-api';
import NotFoundPage from 'pages/NotFound/NotFoundPage';

import { Main } from './MovieDetails.styled';
import { MovieWrapper } from './MovieDetails.styled';
import { Wrapper } from './MovieDetails.styled';
import { InfoWrapper } from './MovieDetails.styled';
import { OverviewWrapper } from './MovieDetails.styled';
import { OverviewTitle } from './MovieDetails.styled';
import { GoBack } from './MovieDetails.styled';
import { Image } from './MovieDetails.styled';
import { MovieTitle } from './MovieDetails.styled'; 
import { MovieInfoText } from './MovieDetails.styled';
import { Genres } from './MovieDetails.styled';
import { GenresTitle } from './MovieDetails.styled';
import { StyledLink } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        const result = await fetchMovieById(id);
        setMovieInfo(result);
      } catch ({ response }) {
        console.log(response.data.message);
        setError(true);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  const goBack = () => navigate(from);

  return (
    <Main>
      <GoBack onClick={goBack}>Go Back</GoBack>
      {error && <NotFoundPage />}
      {movieInfo && (
        <MovieWrapper>
          <Image
            src={
              movieInfo.poster_path
                ? `https://image.tmdb.org/t/p/w200/${movieInfo.poster_path}`
                : 'https://via.placeholder.com/200'
            }
            alt={movieInfo.tagline}
          />
          <InfoWrapper>
            <MovieTitle>
              <span>{movieInfo.title}</span>
              <span>{`(${movieInfo.release_date.slice(0, 4)})`}</span>
            </MovieTitle>
            <MovieInfoText>Popularity: {Math.ceil(movieInfo.popularity)}</MovieInfoText>
            <OverviewWrapper>
              <OverviewTitle>Overview</OverviewTitle>
              {movieInfo.overview}
            </OverviewWrapper>
            <Genres>
              <GenresTitle>Genre:</GenresTitle>
              <span>
                {movieInfo.genres &&
                  movieInfo.genres.map(genre => genre.name).join(', ')}
              </span>
            </Genres>
          </InfoWrapper>
        </MovieWrapper>
      )}

      <Wrapper>
        <StyledLink to="cast" state={{ from}}>
          Cast
        </StyledLink>
        <StyledLink to="reviews" state={{ from }}>
          Reviews
        </StyledLink>
      </Wrapper>

      <Outlet />
    </Main>
  );
};

export default MovieDetails;
