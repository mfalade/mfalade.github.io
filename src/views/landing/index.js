import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import Navbar from 'components/navbar';
import BackgroundLines from 'components/backgroundLines';
import DottedGrid from 'components/dottedGrid';
import ProfileSummary from 'components/profileSummary';
import SocialLinks from 'components/socialLinks';
import ScrollToBottom from 'components/scrollToBottom';
import { getRandomGridColor } from 'helpers';

import { StyledSection, Content, GridContainer } from './styles';

function Landing() {
  const themeContext = useContext(ThemeContext);
  const foregroundColor = getRandomGridColor(themeContext);
  const dottedGridRenderer = () => (
    <GridContainer>
      <DottedGrid
        gridColor={{
          foreground: foregroundColor,
          background: themeContext.color.gray1,
        }}
      />
    </GridContainer>
  );
  return (
    <StyledSection>
      <Navbar />
      <BackgroundLines color={foregroundColor} />
      <Content>
        <ProfileSummary bgContentRenderer={dottedGridRenderer} />
        <SocialLinks />
      </Content>
      <ScrollToBottom />
    </StyledSection>
  );
}

export default Landing;
