import React from 'react';

import NavLink from 'components/navLink';
import Logo from 'assets/images/logo-white.png';

import { StyledHeader, StyledNav, StyledImage } from './styles';

function Navbar() {
  const navLinks = ['About', 'Projects', 'Contact'];
  return (
    <StyledHeader>
      <StyledImage src={Logo} alt="mfalade logo" />
      <StyledNav>
        <ul>
          {navLinks.map((link) => (
            <li key={link}>
              <NavLink href={link.toLowerCase()} label={link} />
            </li>
          ))}
        </ul>
      </StyledNav>
    </StyledHeader>
  );
}

export default Navbar;
