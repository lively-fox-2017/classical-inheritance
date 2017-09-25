"use strict"
class Animal {
  constructor(name, birthday, foods) {
    this.name = name;
    this.birthday = new Date(birthday);
    this.foods = foods;
    this.eatable = true;
    this._superpower = null;
  }

  setSuper() {
    this._superpower = new SuperPower(this);
  }

  get superpower() {
    return this._superpower;
  }
}

class Bat extends Animal {
  constructor(name, birthday, foods) {
    super(name, birthday, foods);
    this.nocturnal = true;
  }
}

class Monkey extends Animal {
  constructor(name, birthday, foods, isTrained) {
    super(name, birthday, foods);
    this.eatable = false;
    this.isTrained = isTrained;
  }
}

class SuperPower {
  constructor(caller) {
    this.caller = caller
  }
  use_laser_vision() {
    return this.caller.name + " is using laser ================================> x (Bamm!)";
  }

  be_invisible() {
    return this.caller.name + ' is Invisible (Sssss..)';
  }
}

let bat = new Bat('aselole', '2012-09-09', ['blood', 'fruits']);
let monkey = new Monkey('joss', '2012-05-05', ['banana', 'fruits'], true);

console.log((bat instanceof(Animal)) ? "Bat Inherit Animal" : "False");
console.log((monkey instanceof(Animal)) ? "Monkey Inherit Animal" : "False");
console.log(bat);
console.log(monkey);
console.log('-'.repeat(30));

// Become super power at night
let time = Math.floor(Math.random() * 24);
if ((time >= 18 && time <= 24) || (time >= 0 && time <= 6)) {
  console.log('Time: ' + time);
  bat.setSuper();
  monkey.setSuper();
  console.log(bat.superpower.be_invisible());
  console.log(monkey.superpower.use_laser_vision());
}
