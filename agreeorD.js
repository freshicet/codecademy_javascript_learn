const agreeOrDisagree = (string1, string2) => {
	if (string1 === string2) {
		return 'You agree!';
	} else {
		return 'You disagree!';
	}
};

console.log(agreeOrDisagree('yep1', 'yep'));
