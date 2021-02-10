let input = 'hello';

let vowelCut = (string) => {
	if (hasVowels(string)) {
		if (string.length == 1) {
			return '';
		} else {
			let characterArray = string.split('');
			return characterArray
				.map((character) => {
					if (/[aeiouyAEIOUY]/.test(character)) {
						character = '';
					} else {
						return character;
					}
				})
				.join('');
		}
	} else {
		return string;
	}
};

console.log(vowelCut(input));
