"use strict"

class Animal {
  constructor(num_legs,is_warm_bloods) {
    //definisikan jumlah kaki berdasarkan inputan
    this.num_legs = num_legs
    //definisikan apakah buas atau tidak
    this.is_warm_bloods = is_warm_bloods
    //digunakan agar bisa mengakses class SuperPower-nya
    this.superpower = new SuperPower()
  }
}

class Frog extends Animal {
  constructor(num_legs,is_warm_bloods) {
    super(num_legs,is_warm_bloods)
  }
}

class Bat extends Animal {
  constructor(num_legs,is_warm_bloods) {
    super(num_legs,is_warm_bloods)
  }

  terbang(){
    return 'Bisa terbang dikeadaan gelap'
  }
}

class Chimpanzee extends Animal {
  constructor(num_legs,is_warm_bloods) {
    super(num_legs,is_warm_bloods)
  }

  panjat(){
    return 'Bisa melompat ke pohon yang tinggi '
  }
}

class Fox extends Animal {
  constructor(num_legs,is_warm_bloods) {
    super(num_legs,is_warm_bloods)

  }

  gigit(){
    return 'Gigitannya bisa menghancurkan kayu'
  }
}

class Chicken extends Animal {
  constructor(num_legs,is_warm_bloods) {
    super(num_legs,is_warm_bloods)

  }

  suara(){
    return 'Bisa bangunin orang tidur'
  }
}

class SuperPower {
  constructor(){

  }
  use_laser_vision(){
    return 'Matanya bisa melihat dikeadaan gelap'
  }
  be_invisible(){
    return 'Bisa menghilang dikeadaan gelap'
  }

}


let rubah = new Fox(4,true)
console.log(rubah);
console.log(rubah.superpower.use_laser_vision());

let ayam = new Chicken(2,false)
console.log(ayam);
console.log(ayam.superpower.be_invisible());

let monyet = new Chimpanzee(4,false)
console.log(monyet);
console.log(monyet.panjat());
console.log(monyet.superpower.use_laser_vision());
