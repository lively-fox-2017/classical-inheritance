"use strict"
class Animal {
    constructor (name) {
        this.legs = 4;
        this.kelas = 'Mammalia';
        this.name = name
        this.superpower = new superpower(name)
    }
}


class Frog extends Animal{
    constructor () {
        super('Frog')
        // this.name = "Frog"
    }
}

class Bat extends Animal{
    constructor () {
        super('Bat')
        // this.name = "Bat"
    }
}

class Fox extends Animal {
    constructor () {
        super('Fox')
        // this.name = "Fox"
    }
}

class superpower {
    constructor(name) {
        this.name = name
    }

    laser() {
        console.log(`${this.name}` + ' Laser vision engaged')
    }

    invisible() {
        console.log('Invisibility engaged')
    }
}
let binatang = new Animal()
console.log(binatang)

let Kodok = new Frog()
console.log(Kodok.legs)

let Kelelawar = new Bat()
console.log(Kelelawar.kelas)

let Rubah = new Fox()
console.log(Rubah.name + ' memiliki kaki sebanyak '+ Rubah.legs)

Rubah.superpower.laser()