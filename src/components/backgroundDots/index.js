import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { getRandomDotColor } from 'helpers';

function BackgroundDots() {
  const themeContext = useContext(ThemeContext);
  const fillColor = getRandomDotColor(themeContext);
  return (
    <svg width="154" height="154">
      <defs>
        <pattern
          id="dot"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
        >
          <circle id="pattern-circle" cx="2" cy="2" r="2" fill={fillColor} />
        </pattern>
      </defs>
      <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#dot)" />
    </svg>
  );
}

export default BackgroundDots;
