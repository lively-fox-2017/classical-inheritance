'use strict'

let Animal = require('./animal.js');

class Bat extends Animal {

  constructor (numLegs, isWarmBlooded) {

    super(numLegs, isWarmBlooded);

  }

}

module.exports = Bat;
