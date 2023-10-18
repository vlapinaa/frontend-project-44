import readlineSync from 'readline-sync';

export default (question, playGame) => {
  const gameQuantity = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(question);

  for (let i = 1; i <= gameQuantity; i += 1) {
    const result = playGame();

    if (result.answer === result.correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${result.answer}' is wrong answer ;(. Correct answer was '${result.correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === gameQuantity) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};
