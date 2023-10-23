import playGame from '../index.js';
import generateRandomNumber from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const generateRound = () => {
  const number = generateRandomNumber(0, 50);
  const question = number;
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return ({
    question,
    correctAnswer,
  });
};

export default () => {
  playGame(description, generateRound);
};
