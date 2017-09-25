// "use strict"

class Animal {
  constructor(name,legs=2,blood=true) {
    this.name=name
    this.num_legs=legs
    this._is_warm_blood=blood
    this.kekuatans=new superPower()
  }

}
class sapi extends Animal {
  constructor(name,legs,blood) {
    super(name,legs,blood)
    this.kekuatans=new superPower()
  }
  get kuat(){
    return this.kekuatans
  }
}

class snake extends Animal{
  constructor(name,legs,blood){
    super(name,legs,blood)
    this.kekuatans=new superPower()
  }
  get kuat(){
    return this.kekuatans
  }
}
class superPower {
  constructor() {
    // this.superpower=new superPower
  }
  use_laser_vision(){
    return 'X-ray'
  }
  be_invisible(){
    return 'menghilang'
  }
}

let frog= new sapi('Kodok',4,false)
let moow= new sapi('Sapi')
let ular= new snake('Ular Berbisa',0,true)
console.log(frog);
console.log(moow);
console.log(ular);
console.log(frog.kuat.use_laser_vision())
