const assertArraysEqual = require('../assertArraysEqual')
const eqArrays = require('../eqArrays')

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // true
console.log(assertArraysEqual(["2", 2, 5], [2, 2, 5])); //false
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])) //false 
