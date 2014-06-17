
/**
 * @class Person
 * @constructor
 */
function Person(surname, firstname) {
	/**
	 * @member {String} surname The surname of the person
	 */
	this.surname = surname;

	/**
	 * @property
	 * @type {String}
	 */
	this.firstname = firstname;


	/**
	 * @method intro
	 * @param {String} intro Introduces itself
	 */
	Person.prototype.intro = function () {
		return "Hi, I'm " + this.firstname + " " + this.surname;
	};
};



var person = new Person("Kunzmann", "Michael");


console.log(person.intro());
