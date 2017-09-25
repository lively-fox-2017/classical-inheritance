'use strict'

class Animal {
  constructor(num_leg, is_warm_blooded, numTail, howToMove) {
    this.num_leg = 4;
    this.is_warm_blooded = true;
    this.numTail = 0;
    this.howToMove = 'walk';
    this.superpower = new SuperPower();
  }

}

class Frog extends Animal {
  constructor() {
    super();
    this.num_leg = 4;
    this.is_warm_blooded = false;
    this.numTail = 0;
    this.howToMove = 'jump';
  }
}

class Bat extends Animal {
  constructor() {
    super();
    this.num_leg = 2;
    this.numTail = 0;
    this.howToMove = 'fly';
  }

  warmBlood(){
    this.is_warm_blooded = false;
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super();
    this.num_leg = 2;
    this.is_warm_blooded = true;
    this.numTail = 0;
    this.howToMove = 'walk';
  }
}

class Fox extends Animal {
  constructor() {
    super();
    this.num_leg = 4;
    this.numTail = 1;
    this.howToMove = 'walk';
  }

  warmBlood(){
    this.is_warm_blooded = true;
  }
}

class Chicken extends Animal {
  constructor() {
    super();
    this.num_leg = 2;
    this.is_warm_blooded = false;
    this.numTail = 1;
    this.howToMove = 'walk';
  }
}

class SuperPower {
  constructor() {
    this.laser = 'off';
    this.invisible = 'off';

  }

  use_laser_vision() {
    return this.laser = 'is on';
  }

  be_invisible() {
    return this.invisible = 'is on';
  }

}

let animal = new Animal();
let frog = new Frog();
let bat = new Bat();
let chimpanzee = new Chimpanzee();
let fox = new Fox();
let chicken = new Chicken();

fox.warmBlood();
bat.warmBlood();
fox.superpower.use_laser_vision();
fox.superpower.be_invisible();
console.log(fox);

// console.log(animal);
// console.log(chicken);
// console.log(frog.num_leg);
// console.log(bat);
