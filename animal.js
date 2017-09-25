"use strict"
const SuperPower = require('./superPower.js');

class Animal {
	constructor(legs, isWarmBlooded) {
		this._legs = legs;
		this._isWarmBlooded = isWarmBlooded;
		this._superpower = new SuperPower();
	}

	get superpower() {
		return this._superpower;
	}
}

module.exports = Animal;