
/**
 * @author Michael Kunzmann
 * @copyright (C) 2014 SAP Labs LLC
 * @license Apache 2.0
 * @class Person
 */
function Person(surname, firstname) {
	/**
	 * @member {String} surname The surname of the person
	 */
	this.surname = surname;

	/**
	 * @member {String} firstname The firstname of the person
	 */
	this.firstname = firstname;


	/**
	 * @member {String} intro Introduces itself
	 */
	Person.prototype.intro = function () {
		return "Hi, I'm " + this.firstname + " " + this.surname;
	};
};



var person = new Person("Kunzmann", "Michael");


console.log(person.intro());
