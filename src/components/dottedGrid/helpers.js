import React from 'react';

import { grid } from 'helpers';

export const getGridCells = ({
  cols,
  rows,
  fillColor,
  referenceElement,
  gridSize,
}) => {
  return grid({ rows, cols }).map((cell) => (
    <use
      key={`row-${cell.y}-col-${cell.x}`}
      xlinkHref={referenceElement}
      x={cell.x * gridSize}
      y={cell.y * gridSize}
      fill={fillColor}
    />
  ));
};
