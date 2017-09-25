"use strict"
const Animal = require('./animal.js');

class Fox extends Animal {
	constructor() {
		super(4, true);
	}
}

module.exports = Fox;