import {brainGame, getNumber} from '../index.js';

const title = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getBrainPrimeData = () => {
	const number = getNumber();

	let divider = [];
	for (let i = 1; i <= number; i += 1) {
		if (!(number % i)) divider.push(i);
	}

	const question = number;
	const answer = divider.length === 2 ? 'yes' : 'no';

	return {question, answer};
};

export default () => {
	brainGame(title, getBrainPrimeData);
};