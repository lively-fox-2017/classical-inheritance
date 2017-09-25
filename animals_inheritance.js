"use strict"

class Animal {
    constructor(legs) {
        this._num_legs = 2
        this.superpower = new Superpower()
    }
}

class Frog extends Animal {
    constructor(legs) {
        super()
        this._num_legs = 4

    }
}

class Bat extends Animal {
    // constructor(legs) {
    //     this._num_legs = legs
    // }
}

class Chimpanzee extends Animal {
    constructor(legs) {
        super()
        this._num_legs = 4
    }
}

class Fox extends Animal {
    constructor(legs) {
        super()
        this._num_legs = 4
    }
}

class Chicken extends Animal {
    // constructor() {
    //     this._num_legs = legs
    // }

}

class Superpower {
    use_laser_vision() {
        return ' mengeluarkan laser dari matanya'
    }
    be_invisible() {
        return ' akan menghilang'
    }
}

let Animals = new Animal(4)
let Kodok = new Frog()
let Kelelawar = new Bat()
let Monyet = new Chimpanzee()
let Rubah = new Fox()
let Ayam = new Chicken()

/* release 0 */ // parent assign legs =2 dan mengassign legs =4 untuk beberapa jenis hewan
console.log(`Kodok berkaki ${Kodok._num_legs} Monyet berkaki ${Monyet._num_legs} Rubah juga berkaki${Rubah._num_legs}`)
    /* release 1 */ // + class superpower, + method laser & invisible
console.log(Rubah.superpower.use_laser_vision())
console.log(Kodok.superpower.be_invisible())