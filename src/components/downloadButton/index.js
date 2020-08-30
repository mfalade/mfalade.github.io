import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from '@styled-icons/boxicons-solid';

import ThemeContext from 'context/theme';

import { StyledButton, IconContainer, LabelContainer } from './styles';

const DownloadButton = ({ label, onClick, icon }) => {
  const theme = useContext(ThemeContext);
  return (
    <StyledButton btnColor={theme.color.foreground}>
      <IconContainer>{icon}</IconContainer>
      <LabelContainer>{label}</LabelContainer>
    </StyledButton>
  );
};

DownloadButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.node,
};

DownloadButton.defaultProps = {
  onClick: () => {},
  icon: <ChevronRight size="36" />,
};

export default DownloadButton;
