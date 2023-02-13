

import { StyledLink } from '../NavMenu/NavMenu.styled'
import { NavStyled } from '../NavMenu/NavMenu.styled';

const NavMenu = () => {
  return (
    <NavStyled>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/Movies">Movies</StyledLink>     
    </NavStyled>
  );
};

export default NavMenu;
