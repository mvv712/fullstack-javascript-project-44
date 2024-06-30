import readlineSync from 'readline-sync';

const gameCount = 3;

const brainGame = (title, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);

  console.log(title);

  for (let i = 0; i < gameCount; i += 1) {
    const [gameQuestion, gameAnswer] = getGameData();

    console.log(`Question: ${gameQuestion}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === String(gameAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${gameAnswer}".`);
      console.log(`Let's try again, ${user}!`);
      break;
    }

    console.log(`Congratulations, ${user}!`);
  }
};

export default brainGame;
