import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  padding: 10px 16px;
  background-color:#dedbcb; 
`;

export const MovieWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 20px;
`;

export const InfoWrapper = styled.div`
  max-width: 500px;
`;

export const OverviewWrapper = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`;

export const OverviewTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 20px;
  
`;

export const GoBack = styled.button`
  color: #f8f8ff;
  background-color: #556b2f;
  border: none;
  outline: none;
  border-radius: 5px;
  padding: 5px 10px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 200px;
`;
export const MovieTitle = styled.h1`
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
  font-size: 22px;
  font-weight: 700;
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: 700;
  color: #800000;
  &::before {
    background-color: #800000;
    display: block;
    content: '';
    width: 5px;
    height: 5px;
    border: 1px;
    border-radius: 50%;
  }
  &.active {
    color: #0000cd;
  }
`;

export const MovieInfoText = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
`;

export const Genres = styled.p`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const GenresTitle = styled.span`
  font-weight: 600;
  font-size: 18px;
`;


