import { brainGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const title = 'What is the result of the expression?';

const getCalcResult = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return undefined;
  }
}

const getBrainCalcData = () => {
  const operator = Array.from('+-*')[getRandomNumber(3)];
  const number1 = getRandomNumber();
  const number2 = getRandomNumber();

  const question = `${number1} ${operator} ${number2}`;
  let answer = getCalcResult(operator, number1, number2);

  return [ question, answer ];
};

export default () => {
  brainGame(title, getBrainCalcData);
};
