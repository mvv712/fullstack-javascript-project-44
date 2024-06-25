import { brainGame, getNumber } from '../index.js';

const title = 'What is the result of the expression?';

const getBrainCalcData = () => {
  const operator = Array.from('+-*')[Math.trunc(Math.random() * 3)];
  const number1 = getNumber();
  const number2 = getNumber();

  const question = `${number1} ${operator} ${number2}`;
  let answer = 0;

  if (operator === '+') {
    answer = number1 + number2;
  } else if (operator === '-') {
    answer = number1 - number2;
  } else if (operator === '*') {
    answer = number1 * number2;
  }

  return { question, answer };
};

export default () => {
  brainGame(title, getBrainCalcData);
};
