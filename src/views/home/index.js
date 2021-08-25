import React from 'react';

import Landing from 'views/landing';
import Projects from 'views/projects';

import { MainContainer } from './styles';

const Home = () => {
  return (
    <MainContainer>
      <Landing />
      <Projects />
    </MainContainer>
  );
};

export default Home;
