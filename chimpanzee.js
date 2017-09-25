'use strict'

let Animal = require('./animal.js');

class Chimpanzee extends Animal {

  constructor (numLegs, isWarmBlooded) {

    super(numLegs, isWarmBlooded);

  }

}

module.exports = Chimpanzee;
