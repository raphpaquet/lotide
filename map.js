// NEED TO TEST IT WITH ASSERT ARRAY EQUAL
const assertArraysEqual = require('./assertArraysEqual')
 

const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {
const results = [];
  for (let item of array) {
  results.push(callback(item));
  }
  return results;
}


module.exports = map;

// const results1 = map(words, word => word[0]);

// const expected = ['g', 'c', 't', 'm', 't']
// console.log(assertArraysEqual(results1, expected))


