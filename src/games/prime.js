import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  const gameQuantity = 3;

  for (let i = 1; i <= gameQuantity; i += 1) {
    const randNum = Math.floor(Math.random() * 5000);
    const sqrtNum = Math.floor(Math.sqrt(randNum));
    let prime = randNum !== 1;
    for (let j = 2; j < sqrtNum; j += 1) {
      if (randNum % j === 0) {
        prime = false;
        break;
      }
    }

    const check = prime === false ? 'no' : 'yes';
    console.log(`Question: ${randNum}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === check) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${check}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === gameQuantity) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
