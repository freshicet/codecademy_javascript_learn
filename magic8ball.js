let userName = 'test';
const userQuestion = 'Question';
let eightBall = '';
let randomNumber = Math.floor(Math.random() * 8);

eightBall = 1;

if (userName == true) {
	console.log(`Hello,${userName}`);
} else {
	console.log('Hello');
}
console.log(userQuestion);

switch (eightBall) {
	case 2:
		console.log('It is certain');
	case 1:
		console.log('It is certain1');
	default:
		console.log('');
}
