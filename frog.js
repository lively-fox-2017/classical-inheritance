'use strict'

let Animal = require('./animal.js');

class Frog extends Animal {

  constructor (numLegs, isWarmBlooded) {

    super(numLegs, isWarmBlooded);

  }

}

module.exports = Frog;
