"use strict"


class SuperPower {
  constructor(name) {
    this.name = name
  }

  use_laser_vision() {
    return this.name + " use laser vision !"
  }

  be_invisible() {
    return this.name + " is invisible !"
  }

}


class Animal {
  constructor(name) {
    this.name = name;
    this.num_legs = 2;
    this.is_warm_blooded = true;
    this.superpower = new SuperPower(this.name);
  }
  walk(){
    return "walk";
  }
}

class Frog extends Animal {
  constructor(name,leg) {
    super(name)
    this.num_legs = leg;
  }
  walk(){
    return "jump";
  }
}

class Bat extends Animal {
  constructor(name) {
    super(name);
  }
  walk(){
    return "fly";
  }
}

class Chimpanzee extends Animal {
  constructor(name) {
    super(name);
  }
}

class Fox extends Animal {
  constructor(name,leg) {
    super(name);
    this.num_legs = leg;
  }
}

class Chicken extends Animal {
  constructor(name) {
    super(name);
  }
}
var frog = new Frog('FROG',4);
var chicken = new Chicken('CHICKEN');
var fox = new Fox('FOX',4);
var bat = new Bat('BAT');
var chimpanzee = new Chimpanzee('CHIMPANZEE');
console.log(chicken);
console.log(fox);
console.log(fox.walk());
console.log(frog);
console.log(frog.walk());
console.log(bat);
console.log(bat.walk());
console.log(chimpanzee.superpower.use_laser_vision());
