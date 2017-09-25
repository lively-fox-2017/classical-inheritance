/*
belajar membuat class inheritance
inheritance adalah suatu class yang bersifat umum yang dapat diturunkan ke anaknya
*/
"use strict"
//class animals merupakan parent class
class Animals {
  constructor(num_legs,warm_blooded) {
    this._num_legs=num_legs;
    this._warm_blooded=warm_blooded;
  }
  get num_legs(){
    return this._num_legs;
  }
  get warm_blooded(){
    return this._warm_blooded;
  }
}

//class ular merupakan inheritance dari class animals dengan ditambahkan beberapa method secra spesifik
class Ular extends Animals {
  constructor(num_legs,warm_blooded) {
    super(num_legs,warm_blooded);
    this._num_legs = 0 ;
    this._warm_blooded=warm_blooded;
    this.superpower = new SuperPower();
  }

  CaraJalan(){
    return 'bergerak dengan melata';
  }
}
//class ular merupakan inheritance dari class animals dengan ditambahkan beberapa method secra spesifik
class Kodok extends Animals {
  constructor(num_legs,warm_blooded) {
    super(num_legs,warm_blooded);
    this._num_legs = 4 ;
    this._warm_blooded=warm_blooded;
    this.superpower = new SuperPower();
  }

  CaraJalan(){
    return 'bergerak dengan melompat';
  }
}
//class ular merupakan inheritance dari class animals dengan ditambahkan beberapa method secra spesifik
class SuperPower {
  constructor() {
    
  }
  user_laser_vision(){
    return 'dapat melihat dalam kegelapan';
  }
  be_invisible(){
    return 'dapat bersembunyi menyesuaikan tempat';
  }
}

let ular = new Ular('2',true);
let kodok = new Kodok('5',true);

console.log(ular._num_legs);
console.log(ular._warm_blooded);
console.log(ular.superpower.user_laser_vision());

console.log(kodok._num_legs);
console.log(kodok._warm_blooded);
console.log(kodok.superpower.be_invisible());
