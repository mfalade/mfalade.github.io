import React from 'react';

import NavLink from 'components/navLink';
import HamburgerMenu from 'components/hamburgerMenu';
import Logo from 'assets/images/logo-white.png';

import { StyledHeader, StyledNav, StyledImage } from './styles';

const Navbar = () => {
  const navLinks = ['About', 'Projects', 'Contact'];
  return (
    <StyledHeader>
      <StyledImage src={Logo} alt="mfalade logo" />
      <StyledNav>
        {navLinks.map((link) => (
          <li key={link}>
            <NavLink href={link.toLowerCase()} label={link} />
          </li>
        ))}
        <li>
          <HamburgerMenu />
        </li>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
