import readlineSync from 'readline-sync';
import playGame from '../index.js';

const question = 'What number is missing in the progression?';

const playProgression = () => {
  const firstNumb = Math.floor(Math.random() * 50);
  const progression = [firstNumb];
  const stepProgr = Math.floor(Math.random() * 10);
  const randomIndex = Math.floor(Math.random() * 9);

  for (let j = 0; j < 9; j += 1) {
    const nextElem = progression[j] + stepProgr;
    progression.push(nextElem);
  }
  const correctAnswer = progression[randomIndex];
  progression[randomIndex] = ' .. ';
  console.log(`Question: ${progression}`);
  const answer = readlineSync.question('Your answer: ');

  return ({
    answer: Number(answer),
    correctAnswer,

  });
};

export default () => {
  playGame(question, playProgression);
};
