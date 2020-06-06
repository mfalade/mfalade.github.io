import React from 'react';

import Navbar from 'components/navbar';
import BackgroundLines from 'components/backgroundLines';
import ProfileSummary from 'components/profileSummary';
import SocialLinks from 'components/socialLinks';
import ScrollToBottom from 'components/scrollToBottom';

import { StyledSection, Content } from './styles';

function Home() {
  return (
    <StyledSection>
      <BackgroundLines />
      <Navbar />
      <Content>
        <ProfileSummary />
        <SocialLinks />
      </Content>
      <ScrollToBottom />
    </StyledSection>
  );
}

export default Home;
