import get from 'lodash/get';
import rangeHelper from './range';
import gridHelper from './grid';

export const getRandomDotColor = (themeContext) => {
  const colorMap = get(themeContext, 'color', {});
  const dotColors = get(themeContext, 'dotColors', []);
  const randIndex = Math.floor(Math.random() * dotColors.length);
  const randColor = dotColors[randIndex] || 'white';
  return colorMap[randColor];
};

export const grid = gridHelper;
export const range = rangeHelper;
