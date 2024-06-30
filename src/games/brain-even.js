import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const getBrainEvenData = () => {
  const number = getRandomNumber();

  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  brainGame(title, getBrainEvenData);
};
