import playGame from '../index.js';
import { generateRandomNumber, calculate } from '../helpers.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = generateRandomNumber(50);
  const number2 = generateRandomNumber(50);
  const randomOperationIndex = Math.floor(Math.random() * operators.length);
  const randomOperation = operators[randomOperationIndex];

  const question = `Question: ${number1} ${randomOperation} ${number2}`;
  const correctAnswer = calculate(randomOperation, number1, number2);

  return ({
    question,
    correctAnswer: String(correctAnswer),
  });
};

export default () => {
  playGame(description, generateRound);
};
