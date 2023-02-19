import PropTypes from 'prop-types';
import { StyledList } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

import { MovieLink } from './MovieList.styled';


const MovieList = ({ results }) => {
  const location = useLocation();
  const elements = results.map(({ id, title }) => (
    <li key={id}>
      <MovieLink  to={`/movies/${id}`}state={{ from: location }}>
        <p>{title}</p>
      </MovieLink>
    </li>
  ));
  return <StyledList>{elements}</StyledList>;
};

export default MovieList;

MovieList.defaultProps = {
  results: [],
};

MovieList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })),
};
