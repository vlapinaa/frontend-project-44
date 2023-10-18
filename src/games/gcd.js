import readlineSync from 'readline-sync';
import playGame from '../index.js';

const question = 'Find the greatest common divisor of given numbers.';
const NOD = (x, y) => {
  let resX = x;
  let resY = y;
  while (resX && resY) {
    resX > resY ? (resX %= resY) : (resY %= resX);
  }
  resX += resY;
  return resX;
};

const playGCD = () => {
  const firstElem = Math.floor(Math.random() * 100);
  const secondElem = Math.floor(Math.random() * 100);

  console.log(`Question: ${firstElem} ${secondElem}`);
  const answer = readlineSync.question('Your answer: ');
  const correctAnswer = NOD(firstElem, secondElem);

  return ({
    answer: Number(answer),
    correctAnswer,

  });
};

export default () => {
  playGame(question, playGCD);
};
