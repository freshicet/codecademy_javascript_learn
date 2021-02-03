const getUserChoice = (userInput) => {
	if (
		userInput === 'rock' ||
		userInput === 'paper' ||
		userInput === 'scissors'
	) {
		return userInput;
	} else {
		return false;
	}
};

const getComputerChoice = () => {
	randomNumber = Math.floor(Math.random() * 3);
	switch (randomNumber) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';
		case 2:
			return 'scissors';
	}
};

const determineWinner = (userChoice, computerChoice) => {
	if (userChoice === 'scissors') {
		if (computerChoice === 'rock') {
			return 'The computer won!';
		} else {
			return 'You won!';
		}
	}
};

console.log(getUserChoice('scissors'));
//console.log(getComputerChoice());
console.log(determineWinner('scissors', getComputerChoice()));
