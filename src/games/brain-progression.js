import { brainGame, getNumber } from '../index.js';

const title = 'What number is missing in the progression?';

const getBrainProgressionData = () => {
  let number = getNumber();
  let step = getNumber();

  let progression = [];
  for (let i = 0; i < 10; i += 1) {
    progression.push(number + i * step);
  }

  let question = '';
  let missed = Math.trunc(Math.random() * 10);
  progression.forEach((item, index) => question += `${index === missed ? '..' : item} `);

  const answer = progression[missed];

  return { question, answer };
};

export default () => {
  brainGame(title, getBrainProgressionData);
};
