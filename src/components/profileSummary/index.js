import React from 'react';

import BackgroundDots from 'components/backgroundDots';

import { Container, TextWrapper, Title, Description } from './styles';

function ProfileSummary() {
  return (
    <Container>
      <BackgroundDots />
      <TextWrapper>
        <Title>Mayowa Falade.</Title>
        <Description>Fullstack Python and Javascript developer</Description>
      </TextWrapper>
    </Container>
  );
}

export default ProfileSummary;
