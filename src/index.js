import readlineSync from 'readline-sync';

export default (description, playGame) => {
  const gameCount = 3;

  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (let i = 1; i <= gameCount; i += 1) {
    const result = playGame();

    console.log(result.question);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== result.correctAnswer) {
      console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${result.correctAnswer}'.`,
      );
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};
