"use strict"

class Animal {
  constructor() {
    this._num_legs = 2
    this._is_warm_blooded = true
  }

  get num_legs() {
    return this._num_legs
  }

  get is_warm_blooded() {
    return this.is_warm_blooded
  }
}

class Frog extends Animal {
  constructor() {
    super()
    this._num_legs = 4
    this._is_warm_blooded = false
  }
}

class Bat extends Animal {
  constructor() {
    super()
    this._num_legs = 2
    this._is_warm_blooded = true
  }
}

class Chimpanzee extends Animal {
  constructor() {
    super()
    this._num_legs = 2
    this._is_warm_blooded = true
  }
}

class Fox extends Animal {
  constructor() {
    super()
    this._num_legs = 4
    this._is_warm_blooded = true
    this._superpower = new SuperPower()
  }

  get superpower() {
    return this._superpower
  }

}

class Chicken extends Animal {
  constructor() {
    super()
    this._num_legs = 2
    this._is_warm_blooded = true
  }
}

class SuperPower {
  constructor() {
    this._use_laser_vision = true
    this._be_invisible = true
  }

  use_laser_vision() {
    return this._use_laser_vision
  }

  be_invisible() {
    return this._be_invisible
  }

}


let animal = new Animal()
let frog = new Frog()
let bat = new Bat()
let chimpanzee = new Chimpanzee()
let fox = new Fox()
let chicken = new Chicken()


//driver code

console.log(animal.num_legs);
console.log(frog.num_legs);
console.log(fox.superpower.use_laser_vision());
