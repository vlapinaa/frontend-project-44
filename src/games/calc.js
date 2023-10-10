import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');

  const gameQuantity = 3;

  for (let i = 1; i <= gameQuantity; i += 1) {
    const arrOperation = ['+', '-', '*'];
    const firstElem = Math.floor(Math.random() * 50);
    const secondElem = Math.floor(Math.random() * 50);
    const randomOperationIndex = Math.floor(Math.random() * arrOperation.length);
    const randomOperation = arrOperation[randomOperationIndex];
    let calc = 0;
    console.log(`Question: ${firstElem}${randomOperation}${secondElem}`);
    const answer = readlineSync.question('Your answer: ');

    switch (randomOperation) {
      case '+':
        calc = firstElem + secondElem;
        break;
      case '-':
        calc = firstElem - secondElem;
        break;
      case '*':
        calc = firstElem * secondElem;
        break;
      default:
        console.error('wrong operation');
    }

    if (Number(answer) === calc) {
      console.log('Correct!');
    } else {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${calc}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === gameQuantity) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
