import get from 'lodash/get';

export const getRandomDotColor = (themeContext) => {
  const colorMap = get(themeContext, 'color', {});
  const dotColors = get(themeContext, 'dotColors', []);
  const randIndex = Math.floor(Math.random() * dotColors.length);
  const randColor = dotColors[randIndex] || 'white';
  return colorMap[randColor];
};
