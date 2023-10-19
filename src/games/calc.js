import readlineSync from 'readline-sync';
import playGame from '../index.js';

const question = 'What is the result of the expression?';
const playCalc = () => {
  const arrOperation = ['+', '-', '*'];
  const firstElem = Math.floor(Math.random() * 50);
  const secondElem = Math.floor(Math.random() * 50);
  const randomOperationIndex = Math.floor(Math.random() * arrOperation.length);
  const randomOperation = arrOperation[randomOperationIndex];
  let correctAnswer = 0;
  console.log(`Question: ${firstElem} ${randomOperation} ${secondElem}`);
  const answer = readlineSync.question('Your answer: ');

  switch (randomOperation) {
    case '+':
      correctAnswer = firstElem + secondElem;
      break;
    case '-':
      correctAnswer = firstElem - secondElem;
      break;
    case '*':
      correctAnswer = firstElem * secondElem;
      break;
    default:
      console.error('wrong operation');
  }

  return ({
    answer: Number(answer),
    correctAnswer,

  });
};

export default () => {
  playGame(question, playCalc);
};
