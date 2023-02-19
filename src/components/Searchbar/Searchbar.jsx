import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import * as SearchBar from './Searchbar.styled';

import initialState from './initialState';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState(prevState => {
      return { ...prevState, [name]: value.trim() };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (state.search.trim().toLowerCase() === '') {
      return toast.warn('Enter correct search!');
    }

    onSubmit(state.search);
    setState({ ...initialState });
  };

  const { query } = state;

  return (
    <SearchBar.Container>
      <SearchBar.Form onSubmit={handleSubmit}>
        <SearchBar.SearchButton type="submit" aria-label="search-button">
            <ImSearch />
        </SearchBar.SearchButton>

        <SearchBar.Input
          name="search"
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          required
          onChange={handleChange}
        />
      </SearchBar.Form>
    </SearchBar.Container>
  );
};

export default memo(Searchbar);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
