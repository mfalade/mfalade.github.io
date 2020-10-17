import get from 'lodash/get';

export const getRandColor = (themeContext) => {
  const colorMap = get(themeContext, 'color', {});
  const dotColors = get(themeContext, 'dotColors', []);
  const randIndex = Math.floor(Math.random() * dotColors.length);
  const randColor = dotColors[randIndex];
  return colorMap[randColor];
};

export const generateGridCells = ({ rows, cols }) => {
  return range(rows)
    .map((row) => range(cols).map((col) => ({ x: col, y: row })))
    .flat();
};

export const range = (arrayLength) => {
  return Array.from({ length: arrayLength }, (_, i) => i);
};
