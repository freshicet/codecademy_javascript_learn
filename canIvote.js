const canIVote = (age) => {
	if (age >= 18) {
		return true;
	} else {
		return false;
	}
};
console.log(canIVote(19));
