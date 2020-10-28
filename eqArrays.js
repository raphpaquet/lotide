const assertEqual = function(actual, expected) {
  let final = ''
  if (actual === expected) {
    final = `💚💚 Assertion Passed : ${actual} === ${expected}`;
  } else {
    final =`🔴🔴 Assertion failed : ${actual} !== ${expected}`;
  } return final;
};


const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } 
  return true
} 

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 4])) // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
console.log(eqArrays(["1", "2", "3"], ["1", 2, "3"])) // => false*/
console.log(eqArrays([2, 2, 5], [2, 2, '5'])); // => false


console.log(assertEqual(eqArrays([1,2,3], [1,2,3]), true)); //Assertion Passed : true === true
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 4]), true)); // Assertion failed false !== true*/

