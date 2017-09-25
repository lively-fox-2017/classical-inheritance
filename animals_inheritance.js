"use strict"

class Animal {
    constructor (name, num_legs, is_warm_blooded) {
        this.name = name;
        this.num_legs = num_legs;
        this.is_warm_blooded = is_warm_blooded;
        this.superPower = new SuperPower();
        
    
    }
   
    get kaki (){
        return this.num_legs;
    }
    set kaki (value){
        console.log(this.name + ' has ' + value + ' legs')
    }
    
    get darah (){
        return this.is_warm_blooded;
    }
    set darah (value){
        if(value === true){
            console.log(this.name + ' is ' + ' warm blooded')
        }else {
            console.log(this.name + ' is not warm blooded ')
        }
        
    }
}



class Fox extends Animal {
    constructor (name,is_warm_blooded){
      super (name,  is_warm_blooded);
      
    }
      
    
}


class SuperPower {
    
    use_laser_vision(value){
        if(value == true){
            console.log('I am super Animal')
        }else {
            console.log('I dont have any power ')
        }
    }
    be_invisible (value){
        if(value == true){
            console.log('Bisa menghilang')
        }else {
            console.log('Tidak Bisa menghilang')
        }
    }
}

let Rubah = new Fox ('Rubah');
let Chimpanze = new Fox ('Monyet');
let Frog = new Fox ('Kodok')


Rubah.kaki = 2
Chimpanze.kaki = 4
console.log('=====')
Rubah.darah = true
Rubah.superPower.be_invisible(true)
console.log('=====')
Frog.kaki = 2
Frog.darah = false
Frog.superPower.use_laser_vision(false)




