export const createRandomOrigin = index => {
  const maxScale = 8;
  const maxXOffset = 800;
  const maxYOffset = 900;

  const enterFromTop = index % 2 === 0;
  const enterFromLeft = index % 2 === 0;

  const res = {
    scale: Math.random() * maxScale,
    x: Math.random() * maxXOffset * (enterFromLeft ? 1 : -1),
    y: Math.random() * maxYOffset * (enterFromTop ? -1 : 1),
    opacity: Math.random(),
    rotation: Math.random() * 360,
    transformOrigin: `${Math.random * 100}% ${Math.random * 100}%`
  };
  return res;
};

export const getRandomDuration = () => {
  return Math.random() * 2.5;
};
