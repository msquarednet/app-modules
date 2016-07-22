var lib = require('./lib.js');

// import lib from './lib-es6';	//no worky. 'double' a keyword(?), timesTwo sure isnt.
// import lib from '../dist/lib-coffee';
// import lib from '../dist/lib-ts';

//with webpack loaders
// import lib from './es6-lib.js';
// import lib from './coffee-lib.coffee';
// import lib from './ts-lib.ts';

var a = lib.timesTwo(2);
var b = lib.addFive(2);
		document.querySelector('#a').textContent = a;
		document.querySelector('#b').textContent = b;
console.log(a);
console.log(b);