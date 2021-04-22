import Grid from '../grid';

describe('Grid', () => {
  it('properly computes svg dimension based on provided configuration', () => {
    const grid = new Grid({ cols: 1, rows: 1, cellSize: 8, gridDotSize: 2 });
    expect(grid.computeCellArea(0)).toBe(0);
    expect(grid.computeCellArea(-5)).toBe(0);
    expect(grid.computeCellArea(1)).toBe(4);
    expect(grid.computeCellArea(2)).toBe(12);
    expect(grid.computeCellArea(3)).toBe(20);
    expect(grid.computeCellArea(4)).toBe(28);
  });
});
