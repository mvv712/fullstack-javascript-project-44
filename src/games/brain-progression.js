import { brainGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const title = 'What number is missing in the progression?';

const getBrainProgressionData = () => {
  const number = getNumber();
  const step = getNumber();

  const progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(number + i * step);
  }

  const number = getRandomNumber();
  const step = getRandomNumber(10);
  let question = '';
  const missed = getRandomNumber(progressionLength);
  for (let index = 0; index < progression.length; index += 1) {
    question += `${index === missed ? '..' : progression[index]} `;
  }

  const answer = progression[missed];

  return { question, answer };
};

export default () => {
  brainGame(title, getBrainProgressionData);
};
