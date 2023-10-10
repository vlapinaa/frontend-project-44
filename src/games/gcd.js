import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Find the greatest common divisor of given numbers.');

  const gameQuantity = 3;

  const NOD = (x, y) => {
    let resX = x;
    let resY = y;
    while (resX && resY) {
    // eslint-disable-next-line no-unused-expressions
      resX > resY ? (resX %= resY) : (resY %= resX);
    }
    resX += resY;
    return resX;
  };

  for (let i = 1; i <= gameQuantity; i += 1) {
    const firstElem = Math.floor(Math.random() * 100);
    const secondElem = Math.floor(Math.random() * 100);

    console.log(`Question: ${firstElem} ${secondElem}`);
    const answer = readlineSync.question('Your answer: ');
    const nodCor = NOD(firstElem, secondElem);
    if (Number(answer) === nodCor) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${nodCor}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === gameQuantity) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
