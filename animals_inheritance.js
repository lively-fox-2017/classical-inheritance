"use strict"

class Animal{
  constructor(){
    this._num_legs = 2;
    this._is_warm_blooded = true;
    this.superpower = new SuperPower();
  }
}

class Frog extends Animal{
  constructor(leg){
    super();
    this._num_legs = leg;
    this._is_warm_blooded = false;
    this._name = 'Frog';
  }
}

class Fox extends Animal{
  constructor(leg){
    super();
    this._num_legs = leg;
    this._name = 'Fox';
  }
}

class Chicken extends Animal{
  constructor(leg){
    super();
    this._name = 'Chicken';
  }

}

class SuperPower{
  constructor(){

  }

  use_laser_vision(){
    console.log('Laser Vision Active!!!');
  }

  be_invisible(){
    console.log('I`m is Invisible!!!');
  }

  anti_gravity(){
    console.log('Flying to the Sky!!!');
  }
}


let frog = new Frog(4);
let fox = new Fox(4);
let chicken = new Chicken();
let superpower = new SuperPower();

console.log(frog._num_legs);
console.log(fox._num_legs);
console.log(chicken._num_legs);

console.log(frog._is_warm_blooded);
console.log(fox._is_warm_blooded);
console.log(chicken._is_warm_blooded);

fox.superpower.be_invisible();
frog.superpower.anti_gravity();
chicken.superpower.use_laser_vision();
