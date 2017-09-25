"use strict"

class Animal {
  constructor(num_legs, is_warm_blood, is_wild_animal ) {
    this.num_legs = num_legs
    this.is_warm_blood = is_warm_blood
    this.is_wild_animal = is_wild_animal
  }
  bergerak(gerak){
    return this.gerak = gerak
  }
}

class Chicken extends Animal{
  constructor(num_legs, is_warm_blood, is_wild_animal) {
    super(num_legs, is_warm_blood, is_wild_animal)
    this.superpower = new superPower()
  }

}

class Frog extends Animal{
  constructor(num_legs, is_warm_blood, is_wild_animal) {
    super(num_legs, is_warm_blood, is_wild_animal)
    this.superpower = new superPower()
  }

}

class Fox extends Animal{
  constructor(num_legs, is_warm_blood, is_wild_animal){
    super(num_legs, is_warm_blood, is_wild_animal)
    this.superpower = new superPower()
  }

}

class superPower {
  constructor() {

  }
  use_laser_vision(){
    return 'Hancurkan semua dengan laser'
  }
  be_invisible(){
      return 'Saya dapat menghilang dari kejaran musuh'
  }

}

let chicken = new Chicken(2, false, false)
console.log(chicken)
console.log(chicken.bergerak('jalan'))
console.log(chicken.superpower.use_laser_vision())

let frog = new Frog(2, true, false)
console.log(frog)
console.log(frog.bergerak('loncat'))
console.log(frog.superpower.be_invisible())

let fox = new Fox(4, false, true)
console.log(fox)
console.log(fox.bergerak('lari'))
console.log(fox.superpower.use_laser_vision())
