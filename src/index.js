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
				console.log(`'${answer}' is wrong answer ;( Correct answer was '${game.answer}'`);
				console.log(`Let's try again, ${user}!`);
			}
		}
	}
}

const getGameData = (mode = '') => {
	let question = '';
	let answer = '';

	if (mode === 'even') {
		const number = getNumber();

		question = number;
		answer = number % 2 ? 'no' : 'yes';
	}

	return {question, answer};
}

const getGameTitle = (mode = '') => {
	if (mode === 'even') {
		return 'Answer "yes" if the number is even, otherwise answer "no".';
	}
}

const getNumber = () => {
	return Math.trunc(Math.random() * 100);
}