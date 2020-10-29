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


const takeUntil = function(array, callback) {
  // iterate over value in the array
  // stoping condition of the loop = callback
  // push values in new array
  // create new array 
  // push each value that we iterate in a new array 
 let result = [];
 for (let i = 0; i < array.length && callback(array[i]) === false; i++) {
     result.push(array[i]); 
   } 
  return result;
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
