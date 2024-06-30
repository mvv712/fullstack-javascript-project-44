import { brainGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const divider = [];

  for (let i = 1; i <= number; i += 1) {
    if (!(number % i)) divider.push(i);
  }

  return divider.length === 2 ? 'yes' : 'no';
}

const getBrainPrimeData = () => {
  const number = getRandomNumber();

  const question = number;
  const answer = isPrime(number);

  return [ question, answer ];
};

export default () => {
  brainGame(title, getBrainPrimeData);
};
