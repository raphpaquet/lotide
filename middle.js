const assertArraysEqual = require('./assertArraysEqual');


const middle = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.length === 1 || arr.length === 2) {
      return [];
    } else if (arr.length % 2 !== 0) {
      let index = Math.floor(arr.length / 2);
      return [arr[index]];
    } else {
      let index1 = arr.length / 2;
      let index2 = index1 + 1;
      return [index1, index2];
    }
  }
};

module.exports = middle;

