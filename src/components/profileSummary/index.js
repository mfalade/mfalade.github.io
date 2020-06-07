import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  BgContainer,
  TextWrapper,
  Title,
  Description,
} from './styles';

function ProfileSummary({ bgContentRenderer }) {
  return (
    <Container>
      <BgContainer>{bgContentRenderer()}</BgContainer>
      <TextWrapper>
        <Title>Mayowa Falade</Title>
        <Description>Fullstack Python and Javascript developer</Description>
      </TextWrapper>
    </Container>
  );
}

ProfileSummary.propTypes = {
  bgContentRenderer: PropTypes.func,
};

ProfileSummary.defaultProps = {
  bgContentRenderer: () => null,
};

export default ProfileSummary;
