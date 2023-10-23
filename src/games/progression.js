import playGame from '../index.js';
import generateRandomNumber from '../helpers.js';

const description = 'What number is missing in the progression?';

const generateProgression = (lengthProgression, stepProgr, firstNumb) => {
  const result = [firstNumb];

  for (let j = 0; j < lengthProgression - 1; j += 1) {
    const nextElem = result[j] + stepProgr;
    result.push(nextElem);
  }
  return result;
};

const generateRound = () => {
  const randomIndex = generateRandomNumber(0, 9);
  const lengthProgression = 10;
  const stepProgr = generateRandomNumber(0, 10);
  const firstNumb = generateRandomNumber(0, 50);
  const progression = generateProgression(lengthProgression, stepProgr, firstNumb);

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
