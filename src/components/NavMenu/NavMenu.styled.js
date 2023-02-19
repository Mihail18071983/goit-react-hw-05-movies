import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #000;
  text-decoration: none;
  display: inline-block;
  padding: 10px 15px;

   &.active {
    color: white;
    background-color: orangered;
    border-radius:5px;
  }
`;

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;
