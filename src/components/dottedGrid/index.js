import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import Grid from 'lib/grid';
import { baseLayout } from 'lib/layouts';
import { getRandomDotColor } from 'helpers';

function DottedGrid({ rows, cols, cellSize, layout }) {
  const themeContext = useContext(ThemeContext);
  const backgroundColor = themeContext.color.gray1;
  const foregroundColor = getRandomDotColor(themeContext);
  const colorConfig = { backgroundColor, foregroundColor };

  const grid = new Grid({ ...colorConfig, rows, cols, cellSize });
  grid.applyLayout(layout);
  return grid.render();
}

DottedGrid.propTypes = {
  cols: PropTypes.number,
  rows: PropTypes.number,
  cellSize: PropTypes.number,
  layout: PropTypes.array,
};

DottedGrid.defaultProps = {
  cols: 5,
  rows: 7,
  cellSize: 50,
  layout: baseLayout,
};

export default DottedGrid;
