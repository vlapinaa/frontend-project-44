import playGame from '../index.js';
import generateRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const generateProgression = (lengthProgression, stepProgression, firstNumber) => {
  const result = [firstNumber];

  for (let j = 0; j < lengthProgression - 1; j += 1) {
    const nextElem = result[j] + stepProgression;
    result.push(nextElem);
  }
  return result;
};

const generateRound = () => {
  const lengthProgression = 10;
  const randomIndex = generateRandomNumber(0, lengthProgression - 1);
  const stepProgression = generateRandomNumber(0, 10);
  const firstNumber = generateRandomNumber(0, 50);
  const progression = generateProgression(lengthProgression, stepProgression, firstNumber);

  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return ({
    question,
    correctAnswer: String(correctAnswer),
  });
};

export default () => {
  playGame(description, generateRound);
};
