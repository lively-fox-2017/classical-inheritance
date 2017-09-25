"use strict"
const Animal = require('./animal.js');

class Chicken extends Animal {
	constructor() {
		super(2, true);
	}
}

module.exports = Chicken;