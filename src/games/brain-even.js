import { brainGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

const getBrainEvenData = () => {
  const number = getRandomNumber();

  const question = number;
  const answer = number % 2 ? 'no' : 'yes';

  return { question, answer };
};

export default () => {
  brainGame(title, getBrainEvenData);
};
