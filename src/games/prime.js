import playGame from '../index.js';
import { generateRandomNumber, isPrime } from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const randNum = generateRandomNumber(5000);

  const correctAnswer = isPrime(randNum) === false ? 'no' : 'yes';
  const question = `Question: ${randNum}`;

  return ({
    question,
    correctAnswer,
  });
};

export default () => {
  playGame(description, generateRound);
};
