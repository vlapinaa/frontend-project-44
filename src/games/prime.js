import playGame from '../index.js';
import generateRandomNumber from '../helpers.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const sqrtNum = Math.floor(Math.sqrt(number));
  let prime = number !== 1;
  for (let j = 2; j < sqrtNum; j += 1) {
    if (number % j === 0) {
      prime = false;
      break;
    }
  }
  return prime;
};

const generateRound = () => {
  const number = generateRandomNumber(0, 5000);

  const correctAnswer = isPrime(number) === false ? 'no' : 'yes';
  const question = number;

  return ({
    question,
    correctAnswer,
  });
};

export default () => {
  playGame(description, generateRound);
};
