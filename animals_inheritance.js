"use strict"

class Animal {

    constructor(){
        this.num_legs = 2
        this.is_warm_blooded = false
        this.super_power = new SuperPower()
    }

}

class Frog extends Animal {

    constructor(){
        super()
    }

    get numLegs(){
        return this.num_legs
    }

    get superPower(){
        let supow = this.super_power
        return supow
    }

}

class Chimpanzee extends Animal {

    constructor(){
        super()
    }

    get numLegs(){
        return this.num_legs
    }

    get superPower(){
        let supow = this.super_power
        return supow
    }

}

class Duck extends Animal {

    constructor(){
        super()
    }

    get numLegs(){
        return this.num_legs
    }

    get superPower(){
        let supow = this.super_power
        return supow
    }

    print(){
        console.log(`Frog, Simpanse dan Duck sama-sama mempunyai ${this.num_legs} kaki`)
    }

}

class Bat extends Animal {

    constructor(){
        super()
    }

    get numLegs(){
        return this.num_legs
    }

    get superPower(){
        let supow = this.super_power
        return supow
    }

    set numLegs(legs){
        this.num_legs = legs
        return this
    }

    print(){
        console.log(`Bat mempunyai ${this.num_legs} kaki`)
    }

}

class Fox extends Animal {

    constructor(){
        super()
    }

    get numLegs(){
        return this.num_legs
    }

    get superPower(){
        let supow = this.super_power
        return supow
    }

    set numLegs(legs){
        this.num_legs = legs
        return this
    }

}

class Chicken extends Animal {

    constructor(){
        super()
    }

    get numLegs(){
        return this.num_legs
    }

    get superPower(){
        let supow = this.super_power
        return supow
    }

    set numLegs(legs){
        this.num_legs = legs
        return this
    }

    print(){
        console.log(`Bat, Fox dan Chicken sama-sama mempunyai ${this.num_legs} kaki`)
    }

}

class SuperPower {

    constructor(){
        this.use_laser_vision = 'Mata Laser'
        this.be_invisible = 'Bisa Ngilang'
    }

    useLaserVision(){
        return this.use_laser_vision
    }

    beInvisible(){
        return this.be_invisible
    }

}

let frog = new Frog()
// console.log(frog.superPower.beInvisible())
let chim = new Chimpanzee()
console.log(chim.superPower.beInvisible())
let duck = new Duck()
let bat = new Bat()
let chic = new Chicken()
// chic.numLegs = 4
// chic.print()
// duck.print()
// console.log(frog.numLegs)
// console.log(chim.numLegs)