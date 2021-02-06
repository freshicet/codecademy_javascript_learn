let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
	return Math.floor(Math.random() * 9 + 1);
};

// console.log(generateTarget());

const compareGuesses = (hguess, cguess, sguess) => {
	let cvalue = Math.abs(cguess, sguess);
	let hvalue = Math.abs(hguess, sguess);
	if (hvalue >= cvalue) {
		return true;
	} else {
		return false;
	}
};

const updateScore = (winner) => {
	switch (winner) {
		case 'human':
			humanScore += 1;
		case 'computer':
			computerScore += 1;

		// if (compareGuesses == true) {
		// 	humanScore += 1;
		// } else {
		// 	computerScore += 1;
	}
};

const advanceRound = () => {
	currentRoundNumber += 1;
};
