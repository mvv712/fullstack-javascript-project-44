import {brainGame, getNumber} from '../index.js';

const title = 'Answer "yes" if the number is even, otherwise answer "no".';

const getBrainEvenData = () => {
	const number = getNumber();

	const question = number;
	const answer = number % 2 ? 'no' : 'yes';

	return {question, answer};
};

export default () => {
	brainGame(title, getBrainEvenData);
};