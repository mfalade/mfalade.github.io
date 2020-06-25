import PropTypes from 'prop-types';

import Grid from 'lib/grid';
import { baseLayout } from 'lib/layouts';

function DottedGrid({ rows, cols, cellSize, layout, gridColor }) {
  const grid = new Grid({
    rows: Number(rows),
    cols: Number(cols),
    cellSize: Number(cellSize),
    backgroundColor: gridColor.background,
    foregroundColor: gridColor.foreground,
  });
  grid.applyLayout(layout);
  return grid.render();
}

DottedGrid.propTypes = {
  cols: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cellSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  layout: PropTypes.array,
  gridColor: PropTypes.shape({
    background: PropTypes.string,
    foreground: PropTypes.string,
  }),
};

DottedGrid.defaultProps = {
  cols: 5,
  rows: 7,
  cellSize: 50,
  layout: baseLayout,
  gridColor: {
    background: 'inherit',
    foreground: '#fff',
  },
};

export default DottedGrid;
