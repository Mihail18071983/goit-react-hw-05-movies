import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { fetchMovieById } from 'shared/services/fetch-api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || '/';

  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        const result = await fetchMovieById(id);
        console.log(result)
        setMovie(result);
      } catch ({ response }) {
        console.log(response.data.message);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  const goBack = () => navigate(from);

  return (
    <section>
      <button onClick={goBack}>Go Back</button>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
            : 'https://via.placeholder.com/200'
        }
        alt={movie.tagline}
      />
      <div>
        <h2>
          <span>{movie.title}</span>
          <span>{movie.release_date}</span>
        </h2>
        {/* <p>
          <span>Genre:</span>
          <span>{movie.genres.map(genre => genre.name).join(',')}</span>
        </p> */}
        {/* <p>
          <span>Overview:</span>
          <span>{movie.overview}</span>
        </p> */}
      </div>
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </section>
  );
};

export default MovieDetails;
