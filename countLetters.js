const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💚💚 Assertion Passed : ${actual} === ${expected}`)
  } else {
    console.log(`❌❌ Assertion failed : ${actual} !== ${expected}`)
  }
};

const countLetters = function(string) {
// Iterate over string (for...of)
// return object {letter : count}
let resultObj = {};
let newString = string.replace(/ /g, "")
  for (let letter of newString) {
    if (resultObj[letter]) {
      resultObj[letter]++;
    } else {
      resultObj[letter] = 1
    }
  } return resultObj; 
};

console.log(countLetters("lighthouse in the house"))