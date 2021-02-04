// The scope of `random` is too loose

const name = 'Nala';

const getRandEvent = () => {
	const random = Math.floor(Math.random() * 3);
	if (random === 0) {
		return 'Marathon';
	} else if (random === 1) {
		return 'Triathlon';
	} else if (random === 2) {
		return 'Pentathlon';
	}
};

// The scope of `days` is too tight
const getTrainingDays = (event) => {
	let day = 0;
	if (event === 'Marathon') {
		days = 50;
		return days;
	} else if (event === 'Triathlon') {
		days = 100;
		return days;
	} else if (event === 'Pentathlon') {
		days = 200;
		return days;
	}
};

// const event2 = getRandEvent();
// const days = getTrainingDays(event2);

// The scope of `name` is too tight
const logEvent = (name) => {
	console.log(`${name}'s event is: ${event}`);
};

const logTime = (name) => {
	console.log(`${name}'s time to train is: ${days} days`);
};

// Define a `name` variable. Use it as an argument after updating logEvent and logTime

// logEvent(event);
// logTime(days);

event = getRandEvent();
const days2 = getTrainingDays(event);
const name2 = 'Warren';

logEvent(name2, getRandEvent());
logTime(name2, days2);
