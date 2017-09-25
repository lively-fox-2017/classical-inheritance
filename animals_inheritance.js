"use strict"

class Superpower {
  constructor() {

  }

  use_laser_vision() {
    return 'pancaran sinar keheningan'
  }

  be_invisible() {
    return 'menghilang dari kenyataan'
  }
}

class Animals {
  constructor(makan) {
    this.num_legs = 4
    this.is_warm_blooded = false
    this.makan = makan
    this.superpower = new Superpower()
  }

  berjalan() {
    return 'dengan empat kaki'
  }

}

class Fox extends Animals {
  constructor(makan) {
    super(makan)
    this.warna = 'kuning'
  }

  memanjat() {
    return 'memanjat pohon'
  }
}

class Chimpanze extends Animals {
  constructor(makan) {
    super(makan)
    this.warna = 'hitam'
  }

  berjalan() {
    return 'dapat berjalan dengan 4 kaki dan 2 kaki'
  }
}

var simpanse = new Chimpanze('jagung')
var rubah_gurun = new Fox('pete')

console.log(simpanse.warna);
console.log(rubah_gurun.warna);

console.log(simpanse.makan);
console.log(rubah_gurun.makan);

console.log(simpanse.berjalan());
console.log(rubah_gurun.berjalan());
console.log(rubah_gurun.memanjat());

console.log(simpanse.superpower.use_laser_vision());
console.log(rubah_gurun.superpower.be_invisible());
