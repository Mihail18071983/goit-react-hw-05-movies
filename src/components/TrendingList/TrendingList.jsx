// import PropTypes from 'prop-types';
import { StyledList } from './TrendingList.styled';
import { Link } from 'react-router-dom';

const TrendingList = ({ results }) => {
  const elements = results.map(({ id, title }) => (
    <li key={id}>
      <Link  to={`/movie/${id}`}>
        <p>{title}</p>
      </Link>
    </li>
  ));
  return <StyledList>{elements}</StyledList>;
};

export default TrendingList;

TrendingList.defaultProps = {
  results: [],
};

// TrendingList.propTypes = {
//   results: PropTypes.arrayOf(PropTypes.string.isRequired),
// };
