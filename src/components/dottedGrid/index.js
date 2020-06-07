import PropTypes from 'prop-types';

import Grid from 'lib/grid';
import { baseLayout } from 'lib/layouts';

function DottedGrid({ rows, cols, cellSize, layout, gridColor }) {
  const colorConfig = {
    backgroundColor: gridColor.background,
    foregroundColor: gridColor.foreground,
  };

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
