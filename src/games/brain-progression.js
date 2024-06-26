import brainGame from '../index.js';
import getRandomNumber from '../utils.js';

const title = 'What number is missing in the progression?';

const progressionLength = 10;

const createProgression = () => {
  const number = getRandomNumber();
  const step = getRandomNumber(10);
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(number + i * step);
  }

  return progression;
};

const getBrainProgressionData = () => {
  const progression = createProgression();
  const missed = getRandomNumber(progressionLength);

  let question = '';
  for (let index = 0; index < progression.length; index += 1) {
    question += `${index === missed ? '..' : progression[index]} `;
  }

  const answer = progression[missed];

  return [question, answer];
};

export default () => {
  brainGame(title, getBrainProgressionData);
};
