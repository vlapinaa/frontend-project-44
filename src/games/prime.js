import readlineSync from 'readline-sync';
import playGame from '../index.js';

const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const playPrime = () => {
  const randNum = Math.floor(Math.random() * 5000);
  const sqrtNum = Math.floor(Math.sqrt(randNum));
  let prime = randNum !== 1;
  for (let j = 2; j < sqrtNum; j += 1) {
    if (randNum % j === 0) {
      prime = false;
      break;
    }
  }

  const correctAnswer = prime === false ? 'no' : 'yes';
  console.log(`Question: ${randNum}`);
  const answer = readlineSync.question('Your answer: ');

  return ({
    answer,
    correctAnswer,

  });
};

export default () => {
  playGame(question, playPrime);
};
