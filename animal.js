'use strict'

let SuperPower = require('./super_power.js');

class Animal {

  constructor (numLegs = 4, isWarmBlooded = true) {

    this._numLegs       = numLegs;
    this._isWarmBlooded = isWarmBlooded;
    this._superPower    = new SuperPower;

  }

  get superPower () {

    return this._superPower;

  }

}

module.exports = Animal;
