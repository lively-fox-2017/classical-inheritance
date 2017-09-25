"use strict"

class Animal {
	constructor(a, b){
		this.leg = a
		this.blood = b
	}	
}

class Frog extends Animal {
	constructor(a, b){
		super(a, b)
	}
	get kaki(){
		return this.leg
	}

	get darah(){
		return this.blood
	}
}

class Fox extends Animal {
	constructor(a, b){
		super(a, b)
		this.name='Fox'

	}

	get kaki(){
		return this.leg
	}

	get darah(){
		return this.blood
	}
}

class SuperPower extends Fox{
	constructor(hewan){
		super(a)
		this.he_wan = this.name
	}

	use_lasey_vision(){
		console.log(this.he_wan+ ' pakek mata laser coy')
	}

	be_invisible(){
		console.log(this.he_wan+ ' ngilang')
	}
}

let a = new Animal(4, 'warm')
console.log(a)
let b = new Frog(2,'panas')
console.log(b)
let c = new Fox(4, 'dingin')
console.log(c)
let d = new SuperPower()
d.use_lasey_vision()
d.be_invisible()

// class Bat {
// 	constructor(){

// 	}
// }

