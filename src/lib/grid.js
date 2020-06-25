import React from 'react';
import get from 'lodash/get';

import { gridGenerator } from 'helpers';

import { baseLayout } from './layouts';

export default class Grid {
  gridHeight = 0;
  gridWidth = 0;
  cellSize = 50;
  gridCells = [];
  gridDotId = 'gridDot';
  foregroundColor = '';
  backgroundColor = '';

  constructor({
    cols,
    rows,
    cellSize,
    foregroundColor,
    backgroundColor,
    gridDotSize = 2,
  }) {
    this.cellSize = cellSize;
    this.gridDotSize = gridDotSize;
    this.gridCells = gridGenerator({ rows, cols });
    this.gridHeight = this.computeCellArea(rows);
    this.gridWidth = this.computeCellArea(cols);
    this.foregroundColor = foregroundColor || this.foregroundColor;
    this.backgroundColor = backgroundColor || this.backgroundColor;
    this.setBaseLayout();
  }

  getGridDefinitions() {
    return (
      <defs>
        <g id={this.gridDotId}>
          <circle
            id="pattern-circle"
            cx={this.gridDotSize}
            cy={this.gridDotSize}
            r={this.gridDotSize}
          />
        </g>
      </defs>
    );
  }

  setBaseLayout() {
    this.applyLayout(baseLayout);
  }

  resetLayout() {
    this.setBaseLayout();
  }

  applyLayout(layout) {
    this.gridCells = this.gridCells.map(({ x, y }) => {
      const isCellVisible = Boolean(get(layout, `${y}.${x}`));
      const fillColor = isCellVisible
        ? this.foregroundColor
        : this.backgroundColor;
      return { x, y, fillColor };
    });
  }

  getGridCells() {
    return this.gridCells.map((cell) => (
      <use
        key={`row-${cell.y}-col-${cell.x}`}
        xlinkHref={`#${this.gridDotId}`}
        x={cell.x * this.cellSize}
        y={cell.y * this.cellSize}
        fill={cell.fillColor}
      />
    ));
  }

  computeCellArea(numCells) {
    if (numCells < 1) {
      return 0;
    }
    const correction = this.gridDotSize * 2;
    const areaOccupiedByCells = (numCells - 1) * this.cellSize;
    return areaOccupiedByCells + correction;
  }

  render() {
    return (
      <svg height={this.gridHeight} width={this.gridWidth}>
        {this.getGridDefinitions()}
        {this.getGridCells()}
      </svg>
    );
  }
}
