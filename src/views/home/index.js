import React from 'react';

import Navbar from 'components/navbar';
import ProfileSummary from 'components/profileSummary';
import SocialLinks from 'components/socialLinks';

import { StyledSection, Content } from './styles';

function Home() {
  return (
    <StyledSection>
      <Navbar />
      <Content>
        <ProfileSummary />
        <SocialLinks />
      </Content>
    </StyledSection>
  );
}

export default Home;
