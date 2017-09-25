"use strict"

class Animal{
	constructor(name, is_warm_blood) {
		this.name = name;
		this.num_legs = 2;
		this.is_warm_blood = is_warm_blood;
		this.superPower = new SuperPower();
	}

	get change_num_legs() {
		return this.num_legs;
	}

	set change_num_legs(value) {
		this.num_legs = value;
	}

	doSomething() {
		console.log('I\'m a ' + this.name);
		if (this.is_warm_blood == true) {
			console.log('I\'m a warm blood');
		} else {
			console.log('I\'m a cold blood')
		}
	}

}

/*------------------------------------------------------------*/

class Frog extends Animal{
	constructor(name, is_warm_blood) {
		super(name, is_warm_blood);
	}

	doSomething() {
		super.doSomething();
		console.log('And I have ' + this.num_legs + ' legs!');
	}
}

/*------------------------------------------------------------*/

class Bat extends Animal{
	constructor(name, is_warm_blood) {
		super(name, is_warm_blood);
	}

	doSomething() {
		super.doSomething();
		console.log('And I have ' + this.num_legs + ' legs!');
	}
}

/*------------------------------------------------------------*/

class Fox extends Animal{
	constructor(name, is_warm_blood) {
		super(name, is_warm_blood);
	}

	doSomething() {
		super.doSomething();
		console.log('And I have ' + this.num_legs + ' legs!');
	}
}

/*------------------------------------------------------------*/

class SuperPower{
	constructor() {

	}

	use_laser_vision() {
		console.log('I can use laser vision');
	}

	be_invisible() {
		console.log('I can be invisible');
	}
}

/*------------------------------------------------------------*/

// let animal = new Animal

let keroro = new Frog('keroro');
keroro.is_warm_blood = false; // Kenapa tanpa membuat method setter/getter valuenya bisa dirubah?
keroro.doSomething();
keroro.superPower.be_invisible();
console.log('--------------------');

let batman = new Frog('batman', false);
batman.doSomething();
batman.superPower.use_laser_vision();
console.log('--------------------');

let kyubi = new Fox('kyubi', true);
kyubi.change_num_legs = 4; // Apakah perbedaan method setter/getter dengan method biasa?
kyubi.doSomething();
kyubi.superPower.be_invisible();
console.log('--------------------');

