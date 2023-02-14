import React from 'react';
import { PropTypes } from 'prop-types';

import Button from './LoadMoreBtn.styled';


const LoadMoreBtn = ({ onLoadMore, text }) => {
  return (
    <Button
      onClick={() => onLoadMore()}
      type="button"
      aria-label='load more'
    >
      {text}
    </Button>
  );
};

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
  text:PropTypes.string.isRequired,
}