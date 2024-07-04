import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

const title = 'Find the greatest common divisor of given numbers.';

const getGcd = (number1, number2) => (number2 === 0 ? number1 : getGcd(number2, number1 % number2));

const getBrainGcdData = () => {
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);

  return [question, answer];
};

export default () => {
  brainGame(title, getBrainGcdData);
};
