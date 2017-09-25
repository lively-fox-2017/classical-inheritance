"use strict"
class Animal {
  constructor(leg, isWarmBlood, pemakan, name) {
    this.name = name;
    this.numOfLeg = leg;
    this.isWarmBlood = isWarmBlood;
    this.pemakan = pemakan;
    this.superPower = new SuperPower();
  }

  toString(){
    return this.name;
  }
}

class Monkey extends Animal{
  constructor() {
    super(4, true, 'herbivora', 'Monkey');

  }
}

class Platipus extends Animal{
  constructor() {
    super(4, false, 'omnivora', 'Platipus');
    this.habitat = 'rawa';
    this.jenisKaki = 'berselaput';
  }
}

class Bird extends Animal{
  constructor() {
    super(2, true, 'omnivora', 'Bird');
    this.warnaTelur;
  }
}

class Bug extends Animal {
  constructor(leg, isWarmBlood, pemakan) {
    super(leg, true, 'omnivora', 'Bug');
    this.jenis;
  }
}

class Komodo extends Animal {
  constructor(){
    super(4, false, 'karnivora', 'Komodo');
  }
}

class SuperPower{
  constructor(){
  }

  useSolarBeam(){
    let message = 'charged the solar\n';
    message += 'use solar beam';
    return message;
  }

  useOnePunch(){
    let message = 'ONE PUUUUUUNCH!!!';
    return message;
  }

  useKamehameha() {
    let message = 'KA--ME--HA--ME--HAAAA'
    return message;
  }

  turnSuperSaiyan() {
    let message = 'This animal\'s hair turns yellow, and it\'s eyes turns blue';
    return message;
  }

  useDeathNote() {
    let message = 'Write the opponent name and die in 60 sec';
    return message;
  }
}

class AnimalBattleCage{
  constructor(){
    this.animal1 = this.randAnimal();
    this.animal2 = this.randAnimal();
    this.animal1Health = 100;
    this.animal2Health = 100;
  }

  randAnimal(){
    let animals = [new Monkey(), new Platipus(), new Bird(), new Bug(), new Komodo()];
    let rng = Math.round(Math.random()*(animals.length-1));
    let animal = animals[rng];
    return animal;
  }

  randAttack(animal){
    let power = new SuperPower();
    let rng = Math.round(Math.random()*4);
    switch (rng) {
      case 0:
        console.log(animal.superPower.turnSuperSaiyan());
        break;
      case 1:
        console.log(animal.superPower.useDeathNote());
        break;
      case 2:
        console.log(animal.superPower.useKamehameha());
        break;
      case 3:
        console.log(animal.superPower.useOnePunch());
        break;
      case 4:
        console.log(animal.superPower.useSolarBeam());
        break;
      default:

    }
  }

  battle(){
    let damage = 0;
    while(this.animal1Health>0 && this.animal2Health>0){
      damage = Math.round(Math.random() * 10);
      console.log(this.animal1.toString());
      this.randAttack(this.animal1);
      this.animal1Health -= damage;
      console.log('Animal 1 Health',this.animal1Health);

      damage = Math.round(Math.random() * 10);
      console.log(this.animal2.toString());
      this.randAttack(this.animal2);
      this.animal2Health -= damage;
      console.log('Animal 2 Health',this.animal2Health);

      console.log('========================================\n\n');
    }
  }

}

let battle = new AnimalBattleCage();
battle.battle();
