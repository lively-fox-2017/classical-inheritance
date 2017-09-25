"use strict"
class Animal {
  constructor(name, birthday, foods) {
    this.name = name;
    this.birthday = new Date(birthday);
    this.foods = foods;
    this.eatable = true;
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

let bat = new Bat('aselole', '2012-09-09', ['blood', 'fruits']);
let monkey = new Monkey('joss', '2012-05-05', ['banana', 'fruits'], true);

console.log(bat);
console.log(monkey);
