import { Outlet } from 'react-router-dom';

import NavMenu from 'components/NavMenu/NavMenu';

import Container from './SharedLayot.styled';

const SharedLayout = () => {
  return (
    <Container>
      <NavMenu />
      <Outlet />
    </Container>
  );
};

export default SharedLayout