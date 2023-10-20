import playGame from '../index.js';
import { generateRandomNumber, findGcd } from '../helpers.js';

const description = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  const firstElem = generateRandomNumber(100);
  const secondElem = generateRandomNumber(100);

  const question = `Question: ${firstElem} ${secondElem}`;
  const correctAnswer = findGcd(firstElem, secondElem);

  return ({
    question,
    correctAnswer: String(correctAnswer),
  });
};

export default () => {
  playGame(description, generateRound);
};
