import playGame from '../index.js';
import generateRandomNumber from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (x, y) => {
  let resX = x;
  let resY = y;
  while (resX && resY) {
    if (resX > resY) {
      resX %= resY;
    } else if (resY > resX) {
      resY %= resX;
    }
  }
  resX += resY;
  return resX;
};

const generateRound = () => {
  const firstElem = generateRandomNumber(0, 100);
  const secondElem = generateRandomNumber(0, 100);

  const question = `${firstElem} ${secondElem}`;
  const correctAnswer = findGcd(firstElem, secondElem);

  return ({
    question,
    correctAnswer: String(correctAnswer),
  });
};

export default () => {
  playGame(description, generateRound);
};
