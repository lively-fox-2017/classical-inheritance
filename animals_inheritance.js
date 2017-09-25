"use strict"

class Animals{
	constructor(bernafas, berkembangBiak, superpower){
		this.bernafas = bernafas
		this.berkembangBiak = berkembangBiak
		this.num_legs = 2
		this.superpower = new SuperPower()
	}

	is_warm_blooded(str){
		return str === true ? 'golongan berdarah panas' : 'golongan berdarah dingin'
	}

}

class SuperPower{
	constructor(){}

	use_laser_vision(){
		return 'gunakan laser!! ..bip..bip..bip..bip'
	}

	be_invisible(){
		return 'menghilang!! ..cling..cling*'
	}

	kamehameha(){
		return 'ka...me...ha..me..haaaa !!'
	}
}

class Frog extends Animals{
	constructor(jenis,bernafas, berkembangBiak){
		super(bernafas, berkembangBiak)
		this.jenis = jenis
	}

	perkenalan(){
		return `perkenalkan nama saya ${this.jenis} saya bernafas ${this.bernafas} dan berkembang biak ${this.berkembangBiak}`
	}

}

class Bat extends Animals{
	constructor(){
		super()
	}

}

class Fox extends Animals{
	constructor(jenis,bernafas, berkembangBiak){
		super(bernafas, berkembangBiak)
		this.jenis = jenis
	}

	perkenalan(){
		return `perkenalkan nama saya ${this.jenis} saya bernafas ${this.bernafas} dan berkembang biak ${this.berkembangBiak}`
	}

}

class Chicken extends Animals{
	constructor(){
		super()
	}

}

class Chimpanze extends Animals{
	constructor(){
		super()
		this.num_legs = 4
	}

}

let frog = new Frog('katak', 'dengan kulit', 'dengan bertelur')
let fox = new Fox('fox', 'dengan paru-paru', 'dengan melahirkan')
let superpower = new SuperPower()
// let fox = new Fox('kulit', 'bertelur')
// console.log(fox)
console.log(frog.perkenalan())
console.log(frog.superpower.use_laser_vision())
console.log(fox.perkenalan())
console.log(fox.superpower.kamehameha())
