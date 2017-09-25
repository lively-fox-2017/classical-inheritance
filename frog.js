"use strict"
const Animal = require('./animal.js');

class Frog extends Animal {
	constructor() {
		super(2, false);
	}
}

module.exports = Frog;