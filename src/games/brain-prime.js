import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  const divider = [];

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    };
  }

  return true;
};

const getBrainPrimeData = () => {
  const number = getRandomNumber();

  const question = number;
  const answer = isPrime(number) ? 'yes' : 'no';

  return [question, answer];
};

export default () => {
  brainGame(title, getBrainPrimeData);
};
