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

  constructor({ cols, rows, cellSize, foregroundColor, backgroundColor }) {
    this.cellSize = cellSize;
    this.gridCells = gridGenerator({ rows, cols });
    this.gridHeight = (rows - 1) * cellSize + rows;
    this.gridWidth = (cols - 1) * cellSize + cols;
    this.foregroundColor = foregroundColor;
    this.backgroundColor = backgroundColor;
    this.setBaseLayout();
  }

  getGridDefinitions() {
    return (
      <defs>
        <g id={this.gridDotId}>
          <circle id="pattern-circle" cx="2" cy="2" r="2" />
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

  render() {
    return (
      <svg height={this.gridHeight} width={this.gridWidth}>
        {this.getGridDefinitions()}
        {this.getGridCells()}
      </svg>
    );
  }
}
