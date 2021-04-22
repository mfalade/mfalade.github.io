import React from 'react';

import { StyledContainer } from './styles';

import Line from 'components/line';

const BackgroundLines = ({ color }) => {
  return (
    <StyledContainer>
      <Line />
      <Line />
      <Line />
    </StyledContainer>
  );
};

export default BackgroundLines;
