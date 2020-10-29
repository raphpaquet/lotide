// NEED TO TEST IT WITH ASSERT ARRAY EQUAL

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

const words = ["ground", "control", "to", "major", "tom"];
//const word2 = ['gris', 'cie', 'toi', 'maman', 'tata']


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
  results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


