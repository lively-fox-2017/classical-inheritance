"use strict"
const Bat = require('./bat.js');
const Chicken = require('./chicken.js');
const Chimpanzee = require('./chimpanzee.js');
const Fox = require('./fox.js');
const Frog = require('./frog.js');

// driver code
let bat = new Bat();
let chicken = new Chicken();
let chimpanzee = new Chimpanzee();
let fox = new Fox();
let frog = new Frog();

console.log(
	'is chicken an object?',
	typeof chicken === 'object'
	);

console.log(
	'is chimpanzee an object?',
	typeof chimpanzee === 'object'
	);

console.log(
	'is bat have superpower?',
	typeof bat.superpower === 'object'
	);

console.log(
	'is fox can useLaserVision?',
	typeof fox.superpower.useLaserVision === 'function'
	);

console.log(
	'is frog can beInvisible?',
	typeof frog.superpower.beInvisible === 'function'
	);

// how to use superpower on animal!
bat.superpower.useLaserVision(); // I could see trough you!
frog.superpower.beInvisible(); // You can't see me!
