

import { StyledLink } from '../NavMenu/NavMenu.styled'
import { NavStyled } from '../NavMenu/NavMenu.styled';

const NavMenu = () => {
  return (
    <NavStyled>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/movies">Movies</StyledLink>     
    </NavStyled>
  );
};

export default NavMenu;
