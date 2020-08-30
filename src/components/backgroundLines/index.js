import React from 'react';
import PropTypes from 'prop-types';

import { StyledContainer } from './styles';

function BackgroundLines({ color }) {
  return (
    <StyledContainer>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </StyledContainer>
  );
}

BackgroundLines.propTypes = {
  color: PropTypes.string,
};

BackgroundLines.defaultProps = {
  color: '#FFF',
};

export default BackgroundLines;
