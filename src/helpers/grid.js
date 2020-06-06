import range from './range';

export default ({ rows, cols }) => {
  return range(rows)
    .map((row) => range(cols).map((col) => ({ x: col, y: row })))
    .flat();
};
