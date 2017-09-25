"use strict"

class Animal {
  constructor() {
    this.num_legs = 2;
    this.superpower = new SuperPower();
    this.monyet = 'Monyet'
  }
}
class Frog extends Animal {
  constructor() {
    super();
    this.num_legs = 4;
  }
}
class Bat extends Animal {
  senjata(apa) {
    this.senjata = apa;
  }
}
class Chimpanzee extends Animal {

  senjata(apa) {
    this.senjata = apa;
  }
}
class Fox extends Animal {
  constructor() {
    super();
    this.num_legs = 4;
  }
}
class Chicken extends Animal {
  senjata(apa) {
    this.senjata = apa;
  }
}
class SuperPower {
  use_laser_vision() {
    return 'Serangan laseeer !!!';
  }
  be_invisible() {
    return 'OTW jauh';
  }
}
let kodok = new Frog();
let kampret = new Bat();
let monyet = new Chimpanzee();
let rubah = new Fox();
let ayam = new Chicken();
monyet.senjata('Pisang')
console.log(rubah.num_legs + ' dan ' + kampret.num_legs);
console.log(rubah.superpower.use_laser_vision());
console.log(ayam.superpower.be_invisible());
console.log(monyet.monyet + ' ' + monyet.superpower.be_invisible() + ' membawa ' + monyet.senjata);