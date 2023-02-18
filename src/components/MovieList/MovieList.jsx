// import PropTypes from 'prop-types';
import { StyledList } from './MovieList.styled';
import {NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const MovieList = ({ results }) => {
  const location = useLocation();
  const elements = results.map(({ id, title }) => (
    <li key={id}>
      <NavLink  to={`/movies/${id}`}state={{ from: location }}>
        <p>{title}</p>
      </NavLink>
    </li>
  ));
  return <StyledList>{elements}</StyledList>;
};

export default MovieList;

MovieList.defaultProps = {
  results: [],
};

// TrendingList.propTypes = {
//   results: PropTypes.arrayOf(PropTypes.string.isRequired),
// };
