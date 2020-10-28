const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } 
  } 
  return true;
} 

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('💚💚 Passed')
  } else {
    console.log('❌❌ Failed')
  } 
}

assertArraysEqual([1, 2, 3], [1, 2, 3]); // true
assertArraysEqual(["2", 2, 5], [2, 2, 5]); //false
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]) //false 




