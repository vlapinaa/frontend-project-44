import readlineSync from "readline-sync";

console.log("Welcome to the Brain Games!");
const userName = readlineSync.question("May I have your name? ");
console.log("Hello, " + userName + "!");
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 1; i < 4; i += 1) {
  const randNum = Math.floor(Math.random() * 50);
  console.log(`Question: ${randNum}`);
  const answer = readlineSync.question("Your answer: ");

  if (
    (randNum % 2 === 0 && answer === "yes") ||
    (randNum % 2 !== 0 && answer === "no")
  ) {
    console.log("Correct!");
  } else {
    console.log(`Let's try again, ${userName}!`);
    break;
  }

  if (i === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
}
