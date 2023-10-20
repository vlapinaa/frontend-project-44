import playGame from '../index.js';
import { generateRandomNumber, isEven } from '../helpers.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const randNum = generateRandomNumber(50);
  const question = `Question: ${randNum}`;
  const correctAnswer = isEven(randNum) ? 'yes' : 'no';

  return ({
    question,
    correctAnswer,
  });
};

export default () => {
  playGame(description, generateRound);
};
