import readlineSync from 'readline-sync';
import playGame from '../index.js';

const question = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => {
  const randNum = Math.floor(Math.random() * 50);
  console.log(`Question: ${randNum}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = randNum % 2 === 0 ? 'yes' : 'no';

  return ({
    answer,
    correctAnswer,
  });
};

export default () => {
  playGame(question, playEven);
};
