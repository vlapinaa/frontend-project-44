import playGame from '../index.js';
import generateRandomNumber from '../helpers.js';

const description = 'What is the result of the expression?';

const calculate = (operation, number1, number2) => {
  switch (operation) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unknown operation: ${operation}`);
  }
};

const generateRound = () => {
  const operators = ['+', '-', '*'];
  const number1 = generateRandomNumber(0, 50);
  const number2 = generateRandomNumber(0, 50);
  const randomOperationIndex = generateRandomNumber(0, 2);
  const randomOperation = operators[randomOperationIndex];

  const question = `${number1} ${randomOperation} ${number2}`;
  const correctAnswer = String(calculate(randomOperation, number1, number2));

  return ({
    question,
    correctAnswer,
  });
};

export default () => {
  playGame(description, generateRound);
};
