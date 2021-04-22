import React from 'react';
import PropTypes from 'prop-types';

import { StyledLink } from './styles';

const NavLink = ({ label, href }) => {
  return <StyledLink href={href}>{label}</StyledLink>;
};

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default NavLink;
