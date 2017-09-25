"use strict"
class Animal {
    constructor() {
        this.num_legs = 2;
        this._jenis = 'cold blooded';
        this.superpower = new SuperPower();
    }

    get blood() {
        return this._jenis;
    }
    set blood(tipe) {
        if (tipe != 'cold blooded') {
            console.log('Hewan-hewan ini adalah kumpulan hewan berdarah dingin!');
        }
        this._jenis = tipe;
    }
}

class Frog extends Animal {
    constructor(name) {
        super(name);
        this.jenisHewan = 'amphibi';
    }
    get jenis() {
        return this.jenisHewan;
    }
    set jenis(tipe) {
        if (tipe != 'amphibi') {
            console.log('Frog is an amphibi!');
        }
        this.jenisHewan = tipe ;
    }


}

class Bat extends Animal {
    constructor() {
        super();
        this.num_legs = 4;
    }
}

class Fox extends Animal {

}

class Chicken extends Animal {
    constructor(number) {
        super(number);
        this.num_legs = number;
    }
}


class SuperPower{
    constructor(){
        this.vision = 'Eyes Laser';
        this.invisible = 'Menghilang';
    }

    use_laser_vision(){
        return this.vision;
    }
    be_invisible(){
        return this.invisible;
    }
}

let hewan = new Animal(2);
hewan.blood = 'Warm blooded';
console.log(hewan);

let katak = new Frog();
katak.jenis = 'Mamalia'
console.log(katak);

let kelelawar = new Bat();
console.log(kelelawar);

let rubah = new Fox();
console.log(rubah);

let ayam = new Chicken(4);
console.log(ayam);

//SuperPower
console.log('Kelelawar :', kelelawar.superpower.use_laser_vision());
console.log('Rubah :', rubah.superpower.use_laser_vision());