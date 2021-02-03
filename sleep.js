const getSleepHours = (day) => {
	switch (day) {
		case 'Monday':
			return 6;
		case 'Tuesday':
			return 8;
		case 'Wednesday':
			return 8;
		case 'Thursday':
			return 5;
		case 'Friday':
			return 8;
		case 'Saturday':
			return 8;
		case 'Sunday':
			return 8;
	}
};

const getActualSleepHours = () => {
	let sleep = 0;
	let myStringArray = ['Monday', 'Tuesday', 'Thursday'];
	let arrayLength = myStringArray.length;
	for (var i = 0; i < arrayLength; i++) {
		sleep += getSleepHours(myStringArray[i]);
	}
	return sleep;
};
const getIdealSleepHours = () => {
	let myStringArray = ['Monday', 'Tuesday', 'Tuesday'];
	let idealHours = myStringArray.length;
	return idealHours * 7;
};

const calculateSleepDebt = () => {
	let actualSleepHours = getActualSleepHours();
	let idealSleepHours = getIdealSleepHours();
	if (actualSleepHours === idealSleepHours) {
		console.log('Good!');
	} else if (actualSleepHours > idealSleepHours) {
		console.log('Great!');
	} else {
		console.log('Get More!!!!!!');
	}
};

// console.log(getSleepHours('Monday'));
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());

calculateSleepDebt();
