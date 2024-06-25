import {brainGame, getNumber} from '../index.js';

const title = 'Find the greatest common divisor of given numbers.';

const getBrainGcdData = () => {
	const number1 = getNumber();
	const number2 = getNumber();

	let gcd = 1;
	for (let i = gcd; i < Math.min(number1, number2); i += 1) {
		if (!(number1 % i) && !(number2 % i) && i > gcd) {
			gcd = i;
		}
	}

	const question = `${number1} ${number2}`;
	const answer = gcd;

	return {question, answer};
};

export default () => {
	brainGame(title, getBrainGcdData);
};