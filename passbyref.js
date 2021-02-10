let spaceship = {
	'Fuel Type': 'Turbo Fuel',
	homePlanet: 'Earth',
};

// Write your code below

// Write your code below
const greenEnergy = (obj) => {
	obj['Fuel Type'] = 'avocado oil';
};

const remotelyDisable = (obj) => {
	obj.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
