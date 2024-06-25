import readlineSync from 'readline-sync';

export const brainGame = (title, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);

  if (title) {
    console.log(title);

    const gameCount = 3;
    for (let i = 0; i < gameCount; i += 1) {
      const game = getGameData();
      const answer = readlineSync.question(`Question: ${game.question}\nYour answer: `);

      if (answer === String(game.answer)) {
        console.log('Correct!');
        if (i === 2) console.log(`Congratulations, ${user}!`);
      } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${game.answer}".`);
      console.log(`Let's try again, ${user}!`);
      break;
      }
    }
  }
};

export const getNumber = () => {
  return Math.trunc(Math.random() * 100);
}
