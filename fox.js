'use strict'

let Animal = require('./animal.js');

class Fox extends Animal {

  constructor (numLegs, isWarmBlooded) {

    super(numLegs, isWarmBlooded);

  }

}

module.exports = Fox;
