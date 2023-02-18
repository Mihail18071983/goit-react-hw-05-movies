import React from 'react';

import { Grid } from 'react-loader-spinner';
import { LoadWrapper } from './Loader.styled';


const Loader = () => {
    return (
      <LoadWrapper >
     <Grid
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="grid-loading"
      radius="12.5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />       
      </LoadWrapper>
    
  );
};
export default Loader;
