import { useState, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import * as SearchBar from './Searchbar.styled';

import initialState from './initialState';

const Searchbar = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setState(prevState => {
      return { ...prevState, [name]: value };
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    if (state.search.trim().toLowerCase() === '') {
      return toast.warn('Enter correct search!');
    }

    onSubmit(state.search);
    setState({ ...initialState });
  };

  const { search } = state;

  return (
    <SearchBar.Header>
      <SearchBar.Form onSubmit={handleSubmit}>
        <SearchBar.SearchButton type="submit" aria-label="search-button">
          <SearchBar.Label>
            <ImSearch />
          </SearchBar.Label>
        </SearchBar.SearchButton>

        <SearchBar.Input
          name="search"
          value={search}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          required
          onChange={handleChange}
        />
      </SearchBar.Form>
    </SearchBar.Header>
  );
};

export default memo(Searchbar);

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
