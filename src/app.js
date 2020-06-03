import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from 'theme';
import Home from 'views/home';

import GlobalStyles from './globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Home />
    </ThemeProvider>
  );
}

export default App;
