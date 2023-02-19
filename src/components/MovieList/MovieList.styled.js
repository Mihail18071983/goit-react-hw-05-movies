import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 5px;
  margin-left: 15px;
`;

export const MovieLink = styled(NavLink)`
  color: #00008b;
`;
