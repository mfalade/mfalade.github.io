import React, { useContext } from 'react';

import Navbar from 'components/navbar';
import BackgroundLines from 'components/backgroundLines';
import DottedGrid from 'components/dottedGrid';
import ProfileSummary from 'components/profileSummary';
import SocialLinks from 'components/socialLinks';
import ScrollToBottom from 'components/scrollToBottom';
import ThemeContext from 'context/theme';

import { StyledSection, Content, GridContainer } from './styles';

const Landing = () => {
  const theme = useContext(ThemeContext);
  const dottedGridRenderer = () => (
    <GridContainer>
      <DottedGrid
        gridColor={{
          foreground: theme.color.foreground,
          background: theme.color.background,
        }}
      />
    </GridContainer>
  );
  return (
    <StyledSection>
      <Navbar />
      <BackgroundLines color={theme.color.foreground} />
      <Content>
        <ProfileSummary bgContentRenderer={dottedGridRenderer} />
        <SocialLinks />
      </Content>
      <ScrollToBottom />
    </StyledSection>
  );
};

export default Landing;
