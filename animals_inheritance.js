"use strict"

class Animal {
  constructor(kaki = 2,darahPanas) {
    this.kaki = kaki
    this.darahPanas = darahPanas
    this.superpower = new SuperPower()
  }
}

class Frog extends Animal{
  constructor(kaki,darahPanas,warna) {
    super(kaki,darahPanas)
    this.warna = warna
  }
}

class SuperPower{
  constructor(){

  }
  use_laser_vision() {
    return ' Jurus Mata Belek'
  }

  be_invisible() {

  }

}

let bangkong = new Frog(4,'darah panas','hijau kuning')
console.log(bangkong);
console.log(bangkong.superpower.use_laser_vision());
