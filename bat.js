"use strict"
const Animal = require('./animal.js');

class Bat extends Animal {
	constructor() {
		super(2, true);
	}
}

module.exports = Bat;