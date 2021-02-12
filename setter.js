const robot = {
	_model: '1E78V2',
	_energyLevel: 100,
	_numOfSensors: 15,
	set numOfSensors(num) {
		if (typeof num === 'number' || num > 0) {
			return (this._numOfSensors = num);
		} else {
			console.log('Pass in a number that is greater than  or equal to 0');
		}
	},
};
console.log(robot._numOfSensors);
robot.numOfSensors = 100;
console.log(robot._numOfSensors);
