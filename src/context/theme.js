import React from 'react';
import { ThemeContext } from 'styled-components';

import { getRandColor } from 'helpers';

const AppThemeContext = React.createContext({});

class AppThemeContainer extends React.Component {
  state = {
    color: {
      foreground: getRandColor(this.context),
      background: 'red',
    },
  };

  actions = {};

  render() {
    console.log(this.context, 'context of theme provider');
    return (
      <AppThemeContext.Provider value={this.state}>
        {this.props.children}
      </AppThemeContext.Provider>
    );
  }
}

AppThemeContainer.contextType = ThemeContext;

export default AppThemeContext;
export { AppThemeContainer };
