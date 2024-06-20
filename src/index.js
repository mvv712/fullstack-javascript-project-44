import readlineSync from 'readline-sync';

export const brainGames = (mode = '') => {
	console.log('Welcome to the Brain Games!');

	const user = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${user}!`);

	if (mode) {
		let is_true = true;
		let gameCount = 0;

		let title = getGameTitle(mode);
		console.log(title);

		while (gameCount < 3 && is_true) {
			let game = getGameData(mode);

			const answer = readlineSync.question(`Question: ${game.question}\nYour answer: `);

			if (answer === String(game.answer)) {
				gameCount += 1;
				console.log('Correct!');
				if (gameCount === 3) console.log(`Congratulations, ${user}!`);
			} else {
				is_true = false;
				console.log(`'${answer}' is wrong answer ;( Correct answer was '${game.answer}'.`);
				console.log(`Let's try again, ${user}!`);
			}
		}
	}
}

const getGameData = (mode = '') => {
	let question = '';
	let answer = '';

	const number1 = getNumber();
	const number2 = getNumber();

	if (mode === 'even') {
		question = number1;
		answer = number1 % 2 ? 'no' : 'yes';
	} else if (mode === 'calc') {
		const operator = Array.from('+-*')[Math.trunc(Math.random() * 3)];

		question = `${number1} ${operator} ${number2}`;
		if (operator === '+') {
			answer = number1 + number2;
		} else if (operator === '-') {
			answer = number1 - number2;
		} else if (operator === '*') {
			answer = number1 * number2;
		}
	} else if (mode === 'gcd') {
		let gcd = 1;
		for (let i = gcd; i < Math.min(number1, number2); i += 1) {
			if (!(number1 % i) && !(number2 % i) && i > gcd) {
				gcd = i;
			}
		}

		question = `${number1} ${number2}`;
		answer = gcd;
	} else if (mode === 'progression') {
		let step = Math.trunc(Math.random() * 10);
		let progression = [];
		for (let i = 0; i < 10; i += 1) {
			progression.push(number1 + i * step);
		}

		let missed = Math.trunc(Math.random() * 10);
		progression.forEach((item, index) => question += `${index === missed ? '..' : item} `);

		answer = progression[missed];
	}

	return {question, answer};
}

const getGameTitle = (mode = '') => {
	if (mode === 'even') {
		return 'Answer "yes" if the number is even, otherwise answer "no".';
	} else if (mode === 'calc') {
		return 'What is the result of the expression?';
	} else if (mode === 'gcd') {
		return 'Find the greatest common divisor of given numbers.';
	} else if (mode === 'progression') {
		return 'What number is missing in the progression?';
	}
}

const getNumber = () => {
	return Math.trunc(Math.random() * 100);
}