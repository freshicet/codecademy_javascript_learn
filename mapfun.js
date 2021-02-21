const animals = [
	'Hen',
	'elephant',
	'llama',
	'leopard',
	'ostrich',
	'Whale',
	'octopus',
	'rabbit',
	'lion',
	'dog',
];

const secretMessage = animals.map((animals) => {
	return animals[0];
});

// Create the secretMessage array below

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map((bigNumbers) => {
	return bigNumbers / 100;
});

console.log(smallNumbers);
