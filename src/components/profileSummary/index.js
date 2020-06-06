import React from 'react';

import DottedGrid from 'components/dottedGrid';

import { Container, TextWrapper, Title, Description } from './styles';

function ProfileSummary() {
  return (
    <Container>
      <DottedGrid />
      <TextWrapper>
        <Title>Mayowa Falade.</Title>
        <Description>Fullstack Python and Javascript developer</Description>
      </TextWrapper>
    </Container>
  );
}

export default ProfileSummary;
