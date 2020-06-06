import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { getRandomDotColor } from 'helpers';
import { getGridCells } from './helpers';

function DottedGrid({ rows, cols }) {
  const cellSize = 50;
  const svgHeight = (rows - 1) * cellSize + rows;
  const svgWidth = (cols - 1) * cellSize + cols;
  const themeContext = useContext(ThemeContext);
  const fillColor = getRandomDotColor(themeContext);
  return (
    <svg width={svgWidth} height={svgHeight}>
      <defs>
        <g id="dot">
          <circle id="pattern-circle" cx="2" cy="2" r="2" />
        </g>
      </defs>
      {getGridCells({
        cols,
        rows,
        fillColor,
        gridSize: 50,
        referenceElement: '#dot',
      })}
    </svg>
  );
}

DottedGrid.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
};

DottedGrid.defaultProps = {
  cols: 5,
  rows: 7,
};

export default DottedGrid;
