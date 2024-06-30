import { brainGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const title = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => {
  let gcd = 1;

  for (let i = gcd; i <= Math.min(number1, number2); i += 1) {
    if (!(number1 % i) && !(number2 % i) && i > gcd) {
      gcd = i;
    }
  }

  return gcd;
}

const getBrainGcdData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);

  return { question, answer };
};

export default () => {
  brainGame(title, getBrainGcdData);
};
