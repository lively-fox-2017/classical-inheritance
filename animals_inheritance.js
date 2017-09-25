"use strict"
class Animal {
    constructor(name, num_legs, eatfood, isblood) {
        this._name = name
        this._num_legs = num_legs
        this._eatfood = eatfood
        this._iswarmblood = isblood
    }

    sound(sound) {
        return 'It is sound ' + sound
    }
}

// class anak
class Felidae extends Animal {
    constructor(name, num_legs, eatfood, isblood) {
        super(name, num_legs, eatfood, isblood)
        this._jump = 'I can jump'
        this._super = new SuperPower(name)
    }

    lari() {
        return 'Semua bisa lari lho'
    }
}

class Aves extends Animal {
    constructor(name, num_legs, eatfood, isblood) {
        super(name, num_legs, eatfood, isblood)
        this._super = new SuperPower(name)
    }

    flying() {
        return 'I believe I can fly'
    }
}

class SuperPower {
    constructor(name) {
        this.name = name
    }

    use_roar() {
        return this.name +': AUUUUUUUUUUUUUUUUUUUUUU'
    }

    use_superjump() {
        return this.name + ' JUMPING JUMP!'
    }
}

let buaya = new Animal('Buaya', 4, 'carnivor', 'coldblood');
let kucing = new Felidae('Kucing', 4, 'carnivor', 'warmblood');
let elang = new Aves('Elang', 2, 'carnivor', 'warmblood')
console.log(kucing.sound('Miau'));
console.log(elang._super.use_roar())
console.log(elang.flying());
console.log(kucing._super.use_superjump());
