const team = {
	_players: [
		{ firstName: 'Harry', lastName: 'Kane', age: 25 },
		{ firstName: 'Lucas', lastName: 'Moura', age: 27 },
		{ firstName: 'Pablo', lastName: 'Sanchez', age: 11 },
	],
	_games: [
		{ opponent: 'Arsenal', teamPoints: 5, opponentPoints: 0 },
		{ opponent: 'Manchester United', teamPoints: 3, opponentPoints: 1 },
		{ opponent: 'Chelsea', teamPoints: 4, opponentPoints: 2 },
	],

	get players() {
		if (
			this._players.firstName &&
			this._players.lastName &&
			this._players.age &&
			typeof this._players.age === 'number' &&
			typeof this._players.firstName === 'string' &&
			typeof this._players.lastName === 'string'
		) {
			return this._players;
		} else {
			return `Error: Name and age invalid`;
		}
	},

	get games() {
		if (
			this._games.opponent &&
			this._games.teamPoints &&
			this._games.opponentPoints &&
			typeof this._games.opponent === 'string' &&
			typeof this._games.teamPoints === 'number' &&
			typeof this._games.opponentPoints === 'number'
		) {
			return this._games;
		} else {
			return `Error: Games and points are invalid`;
		}
	},

	addPlayer(firstName, lastName, age) {
		if (
			typeof firstName === 'string' &&
			typeof lastName === 'string' &&
			typeof age === 'number' &&
			firstName &&
			lastName &&
			age
		) {
			let player = {
				firstName,
				lastName,
				age,
			};
			this.players.push(player);
		} else {
			return `Something went wrong.`;
		}
	},
};

// team.addPlayer('Steph', 'Curry', 28);
// team.addPlayer('Lisa', 'Leslie', 44);
// team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);
