import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What number is missing in the progression?');

  const gameQuantity = 3;

  for (let i = 1; i <= gameQuantity; i += 1) {
    const firstNumb = Math.floor(Math.random() * 50);
    const progression = [firstNumb];
    const stepProgr = Math.floor(Math.random() * 10);
    const randomIndex = Math.floor(Math.random() * 9);

    for (let j = 0; j < 9; j += 1) {
      const nextElem = progression[j] + stepProgr;
      progression.push(nextElem);
      console.log('progr', j, stepProgr);
    }
    const randomElem = progression[randomIndex];
    progression[randomIndex] = ' .. ';
    console.log(`Question: ${progression}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === randomElem) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${randomElem}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === gameQuantity) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
