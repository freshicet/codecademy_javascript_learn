let spaceship = {
	'Fuel Type': 'Turbo Fuel',
	homePlanet: 'Earth',
	color: 'silver',
	'Secret Mission': 'Discover life outside of Earth.',
};

// console.log(spaceship.color);

spaceship.color = 'glorious gold';

console.log(spaceship.color);

spaceship.numEngines = 7;

delete spaceship['Secret Mission'];
