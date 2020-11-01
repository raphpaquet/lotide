const assertArraysEqual = require('./assertArraysEqual');


const middle = function(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr.length === 1 || arr.length === 2) {
      return [];
    } else if (arr.length % 2 !== 0) {
      let index = Math.floor(arr.length / 2);
      return [arr[index]]; 
    } else {
      let index1 = arr.length / 2
      let index2 = index1 + 1
      return [index1, index2];
    }
  }
}
// console.log(middle([1,2,3,4,5]))
// console.log(assertArraysEqual(middle([1,2,3,4,5]), [3]))
