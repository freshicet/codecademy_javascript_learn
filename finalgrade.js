const finalGrade = (N1, N2, N3) => {
	let average = N1 + N2 + N3;
	average = average / 3;
	if (N1 < 0 || N1 > 100 || N2 < 0 || N2 > 100 || N3 < 0 || N3 > 100) {
		return 'You have entered an invalid grade.';
	}
	// return average;
	if (average < 0 || average > 100) {
		return 'This is not a valid average';
	} else if (average < 60) {
		return 'F';
	} else if (average < 70) {
		return 'D';
	} else if (average < 80) {
		return 'C';
	} else if (average < 90) {
		return 'B';
	} else {
		return 'A';
	}
};

console.log(finalGrade(-1, 60, 60));
