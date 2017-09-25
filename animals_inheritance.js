"use strict"
class Animals{
	constructor(nama, kaki, makanan) {
		this.nama = nama;
		this.kaki = kaki;
		this.makanan = makanan;
		this.super = new SuperPower();
	}
	suara(suara) {
		console.log(`Binatang ${this.nama}, bersuara ${suara}`)
	}
}
class Ayam extends Animals{
	constructor(nama,kaki,makanan){
		super(nama,kaki,makanan)
	}
	detail (){
		return `${this.nama}, mempunyai kaki ${this.kaki}, memakan ${this.makanan}, dan memiliki kekuatan super ${this.super.terbang()}`
	}
}

class SuperPower{
	constructor(){

	}
	terbang (){
		return `Terbang dengan sayap kecilnya`;
	}
	mencakar (){
		return `Mencakar dengan kukunya`;
	}
}

let ayam = new Ayam('Ayam',2,'beras')
console.log(ayam.detail())
ayam.suara('kok..kok..kok..')
