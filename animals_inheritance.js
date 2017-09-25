"use strict"

class Animal {
  constructor(){
    this.num_legs = 2;
    this.is_warm_blood = true;
  }

  walk(){
    return 'I can walk';
  }
}

class Frog extends Animal {
  constructor(){
    super();
    this.num_legs = 4;
  }

}

class Bat extends Animal{
  constructor(){
    super();
    this.num_legs = 4;
    this.superpower = new SuperPower();

  }
}

class Chimpanzee extends Animal{
  constructor(){
    super()
  }
}

class Fox extends Animal {
  constructor() {
    super();
    this.num_legs = 4;
  }


}

class Chicken extends Animal {
  constructor() {
    super();
    this.is_warm_blood = false;
  }
}

class SuperPower{

  use_laser_vision(){
    return 'I can see at night'
  }

  be_invisible(){
    return 'I am invisible'
  }
}


var kodok = new Frog();
console.log(kodok.num_legs);

var bat = new Bat();
console.log(bat.superpower.use_laser_vision());

var chimpanzee = new Chimpanzee();
console.log(chimpanzee);

var chicken = new Chicken();
console.log(chicken);
