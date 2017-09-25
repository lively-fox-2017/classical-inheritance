"use strict"

class Animal {
	constructor(name, numLegs, blood){
		this._name = name;
		this._numLegs = numLegs;
		this._blood = blood;
		this._superpower = new SuperPower(name);
	}
}

class Frog extends Animal {
	constructor(numLegs, blood){
		super("Katak", numLegs, blood);	
	}
}

class Bat extends Animal {
	constructor(numLegs, blood){
		super("Kelelawar", numLegs, blood);	
	}
}

class Lion extends Animal {
	constructor(numLegs, blood){
		super("Singa", numLegs, blood);	
	}
}

class Fox extends Animal {
	constructor(name, numLegs, blood){
		super("Rubah", numLegs, blood);
	}
}

class Chicken extends Animal {
	constructor(numLegs, blood){
		super("Ayam", numLegs, blood);	
	}
}

class SuperPower{
	constructor(name){
		this.name = name;
	}
	
	use_laser_vision(){
		console.log(this.name+" menggunakan laser!!");
	}
	
	be_invisible(){
		console.log(this.name+" menghilang!!");
	}
}

let frog = new Frog(2, "Warm");
let bat = new Bat(2, "Warm");
let lion = new Lion(4, "Cold");
let fox = new Fox(4, "Cold");
let chicken = new Chicken(4, "Warm");

frog._superpower.use_laser_vision();
bat._superpower.use_laser_vision();
lion._superpower.be_invisible();
fox._superpower.use_laser_vision();
chicken._superpower.be_invisible();