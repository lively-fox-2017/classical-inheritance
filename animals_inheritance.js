"use strict"

class SuperPower {
  constructor(laser_beam,cute_paw,ultrasonic_quack,jungle_roar){
    this.laser_beam = "Not using superpower";
    this.cute_paw = "Not using superpower";
    this.ultrasonic_quack = "Not using superpower";
    this.jungle_roar = "Not using superpower";
  }
  useLaserBeam(){
    return this.laser_beam = "using laserbeam";
  }
  useCutePaw(){
    return this.cute_paw = "using cutepaw";
  }
  useUltraSonicQuack(){
    return this.ultrasonic_quack = "using ultrasonic quack";
  }
  useJungleRoar(){
    return this.jungle_roar = "using jungle roar"
  }
}

class Animal {
  constructor(num_legs,is_warm_bloded,is_mamals,how_to_walk,superpower){
    this.num_legs = 4;
    this.is_warm_bloded = true;
    this.is_mamals = true;
    this.how_to_walk = how_to_walk;
    this.superpower = new SuperPower();
  }
  howToWalk(){
    this.how_to_walk = "forward";
  }
}

class Fox extends Animal {
  constructor(){
    super();
  }
  warmBlood(){
    this.is_warm_bloded = false;
  }
}

class Chicken extends Animal {
  constructor(){
    super()
    this.num_legs = 2;
  }
  warmBlood(){
    this.is_warm_bloded = true;
  }
}

class Crab extends Animal {
  constructor(){
    super()
    this.num_legs = 6;
  }
  howToWalk(){
    this.how_to_walk = "sideways"
  }
  warmBlood(){
    this.is_warm_bloded = false;
  }
}

class Chimpanzee extends Animal {
  constructor(){
    super()
    this.num_legs = 2;
  }
  howToWalk(){
    this.how_to_walk = "crawl"
  }
  warmBlood(){
    this.is_warm_bloded = true;
  }
}

let animal = new Animal();
let fox = new Fox()
let chicken = new Chicken();
let crab = new Crab();
let chimpanzee = new Chimpanzee();
animal.howToWalk();
fox.howToWalk()
chicken.howToWalk();
crab.howToWalk();
chimpanzee.howToWalk();
fox.warmBlood()
chicken.warmBlood();
crab.warmBlood();
chimpanzee.warmBlood();
console.log(animal);
console.log(fox);
console.log(chicken);
console.log(crab);
console.log(chimpanzee);
crab.superpower.useCutePaw();
crab.superpower.useJungleRoar();
console.log(crab)

