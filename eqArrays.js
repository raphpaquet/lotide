const assertEqual = function(actual, expected) {
  let final = ''
  if (actual === expected) {
    final = `💚💚 Assertion Passed : ${actual} === ${expected}`;
  } else {
    final =`🔴🔴 Assertion failed : ${actual} !== ${expected}`;
  } return final;
};

const eqArrays = function(arr1, arr2) {
  let result; 
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      if (arr1[i] !== arr2[i]) {
        result = false;
      } else {
        result = true;
      }
    }
  } return result
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
console.log(eqArrays([1, 2, 3], [3, 2, 4])) // => false


console.log(assertEqual(eqArrays([1,2,3], [1,2,3]), true));
console.log(assertEqual(eqArrays([1, 2, 3], [3, 2, 4]), true));

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
