import React from 'react';

import DottedGrid from 'components/dottedGrid';

import { HamburgerContainer } from './styles';

function HamburgerMenu() {
  return (
    <HamburgerContainer>
      <DottedGrid cols="3" rows="3" cellSize="8" />
    </HamburgerContainer>
  );
}

export default HamburgerMenu;
