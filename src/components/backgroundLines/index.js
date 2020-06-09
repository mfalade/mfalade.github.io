import React from 'react';
import PropTypes from 'prop-types';

import Line from 'components/line';

import { StyledContainer } from './styles';

function BackgroundLines({ color }) {
  return (
    <StyledContainer>
      <Line />
      <Line />
      <Line />
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
