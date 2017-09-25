"use strict"


class SuperPower {
  constructor(name) {
  }

  use_laser_vision() {
    return " use laser vision !"
  }

  be_invisible() {
    return " is invisible !"
  }

}


class Animal {
  constructor() {
    this.num_legs = 2;
    this.is_warm_blooded = true;
    this.superpower = new SuperPower();
  }
  walk(){
    return "walk";
  }
}

class Frog extends Animal {
  constructor(leg) {
    super()
    this.num_legs = leg;
  }
  walk(){
    return "jump";
  }
}

class Bat extends Animal {
  constructor() {
    super();
  }
  walk(){
    return "fly";
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super();
  }
}

class Fox extends Animal {
  constructor(leg) {
    super();
    this.num_legs = leg;
  }
}

class Chicken extends Animal {
  constructor() {
    super();
  }
}
var frog = new Frog(4);
var chicken = new Chicken();
var fox = new Fox(4);
var bat = new Bat();
var chimpanzee = new Chimpanzee();
console.log(chicken);
console.log(fox);
console.log(fox.walk());
console.log(frog);
console.log(frog.walk());
console.log(bat);
console.log(bat.walk());
console.log(chimpanzee.superpower.use_laser_vision());
