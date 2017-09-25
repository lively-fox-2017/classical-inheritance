'use strict'

let Animal = require('./animal.js');

class Chicken extends Animal {

  constructor(numLegs, isWarmBlooded) {

    super(numLegs, isWarmBlooded);

  }

}

module.exports = Chicken;
