const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual');

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 4])) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", 2, "3"])) // => false*/
console.log(eqArrays([2, 2, 5], [2, 2, '5'])); // => false


console.log(assertEqual(eqArrays([1,2,3], [1,2,3]), true)); //Assertion Passed : true === true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 4]), true)); // Assertion failed false !== true*/

