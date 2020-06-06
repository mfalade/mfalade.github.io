import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { getRandomDotColor } from 'helpers';

function BackgroundDots({ rows, cols }) {
  const cellSize = 50;
  const svgHeight = (rows - 1) * cellSize + rows;
  const svgWidth = (cols - 1) * cellSize + cols;
  const themeContext = useContext(ThemeContext);
  const fillColor = getRandomDotColor(themeContext);
  return (
    <svg width={svgWidth} height={svgHeight}>
      <defs>
        <pattern
          id="dot"
          x="0"
          y="0"
          width={cellSize}
          height={cellSize}
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

BackgroundDots.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
};

BackgroundDots.defaultProps = {
  cols: 5,
  rows: 7,
};

export default BackgroundDots;
