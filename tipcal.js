const tipCalculator = (quality, total) => {
	switch (quality) {
		case 'good':
			return total * 0.2;
		case 'bad':
			return total * 0.05;
		case 'ok':
			return total * 0.15;
		case 'excellent':
			return total * 0.3;
		default:
			return total * 0.18;
	}
};
console.log(tipCalculator('good', 100));
