const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = '';
console.log(currentCard);
while (currentCard != 'spade') {
	console.log(currentCard);
	currentCard = cards[Math.floor(Math.random() * 4)];
	console.log(currentCard);
}
