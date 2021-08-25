import React from 'react';

import DottedGrid from 'components/dottedGrid';

import { HamburgerContainer } from './styles';

const HamburgerMenu = () => {
  return (
    <HamburgerContainer>
      <DottedGrid cols="3" rows="3" cellSize="8" />
    </HamburgerContainer>
  );
};

export default HamburgerMenu;
