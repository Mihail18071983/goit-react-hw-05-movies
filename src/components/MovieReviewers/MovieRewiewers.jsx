import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import NotFoundPage from 'pages/NotFound/NotFoundPage';


import { fetchReviews } from 'shared/services/fetch-api';

const MovieRewiewers = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async id => {
      try {
          const {results} = await fetchReviews(movieId);
        setReviews(results);
      } catch ({ response }) {
        setError(true);
        console.log(response.data.message);
      }
    };
    fetchMovieReviews(movieId);
  }, [movieId]);

  return (
    <div>
      <h2>Review</h2>

      {error && <NotFoundPage />}

      <div>
        {reviews.length ? (
          <ul>
                      {reviews.map(({ id, author, content }) => (
              <li key={id}>
                <div>
                  <p>{author}</p>
                  <p>{content}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results</p>
        )}
      </div>
    </div>
  );
};

export default MovieRewiewers;
