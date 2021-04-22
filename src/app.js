import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import Home from 'views/home';
import { AppThemeContainer } from 'context/theme';

import GlobalStyles from './globalStyles';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppThemeContainer>
        <GlobalStyles />
        <Home />
      </AppThemeContainer>
    </ThemeProvider>
  );
};

export default App;
