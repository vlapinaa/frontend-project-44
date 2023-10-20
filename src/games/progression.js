import playGame from '../index.js';
import { generateRandomNumber, generateProgression } from '../helpers.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const randomIndex = generateRandomNumber(9);
  const progression = generateProgression(10, 10);

  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = '..';

  const question = `Question: ${progression.join(' ')}`;

  return ({
    question,
    correctAnswer: String(correctAnswer),
  });
};

export default () => {
  playGame(description, generateRound);
};
