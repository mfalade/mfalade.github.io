import get from 'lodash/get';

export const getRandomGridColor = (themeContext) => {
  const colorMap = get(themeContext, 'color', {});
  const dotColors = get(themeContext, 'dotColors', []);
  const randIndex = Math.floor(Math.random() * dotColors.length);
  const randColor = dotColors[randIndex] || 'white';
  return colorMap[randColor];
};

export const gridGenerator = ({ rows, cols }) => {
  return range(rows)
    .map((row) => range(cols).map((col) => ({ x: col, y: row })))
    .flat();
};

export const range = (arrayLength) => {
  return Array.from({ length: arrayLength }, (_, i) => i);
};
