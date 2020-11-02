const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');



console.log(middle([1,2,3,4,5]))
console.log(assertArraysEqual(middle([1,2,3,4,5]), [3]))