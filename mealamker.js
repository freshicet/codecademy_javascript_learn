const menu = {
	_courses: {
		appetizers: [],
		mains: [],
		desserts: [],
	},
	get appetizers() {
		return this._courses.appetizers;
	},
	set appetizers(appetizer) {
		this._courses.appetizers.push(appetizer);
	},
	get mains() {
		return this._courses.mains;
	},
	set mains(main) {
		this._courses.mains.push(main);
	},
	get desserts() {
		return this._courses.desserts;
	},
	set desserts(dessert) {
		this._courses.desserts.push(dessert);
	},
	get courses() {
		// _courses(){
		return {
			appetizers: this.appetizers,
			mains: this.mains,
			desserts: this.desserts,
		};
	},
	addDishToCourse(courseName, dishName, dishPrice) {
		const dish = {
			name: dishName,
			price: dishPrice,
		};
		//return
		this._courses[courseName] = dish; //.push(dish);
	},
};
menu.addDishToCourse('appetizers', 'dumplings', 10.5);
console.log(menu.courses.appetizers);
