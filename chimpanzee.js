"use strict"
const Animal = require('./animal.js');

class Chimpanzee extends Animal {
	constructor() {
		super(2, true);
	}
}

module.exports = Chimpanzee;