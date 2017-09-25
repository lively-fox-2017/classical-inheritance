"use strict"

class Animal {
	constructor(a, b){
		this.leg = a
		this.blood = b
		this.super = new SuperPower()
	}	
}

class Frog extends Animal {
	constructor(a, b){
		super(a, b)
		this.name = 'Frog'
	}
	get kaki(){
		return this.leg
	}

	get darah(){
		return this.blood
	}

	CompositionA(){
		this.super.use_lasey_vision(this.name)
	}

	CompositionB(){
		this.super.be_invisible(this.name)
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

	CompositionA(){

		this.super.be_invisible(this.name)
	}

	CompositionB(){
		this.super.use_lasey_vision(this.name)
	}

}

class SuperPower {
	constructor(){
	}

	use_lasey_vision(name){
		console.log(name+ ' pakek mata laser coy')
	}

	be_invisible(name){
		console.log(name+ ' ngilang')
	}
}

let a = new Animal(4, 'warm')
console.log(a)
let b = new Frog(2,'panas')
console.log(b)
let c = new Fox(4, 'dingin')
console.log(c)
b.CompositionA()
b.CompositionB()
c.CompositionA()
c.CompositionB()

// class Bat {
// 	constructor(){

// 	}
// }

