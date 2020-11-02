const eqArrays = require('./eqArrays');


const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log('💚💚 Passed');
  } else {
    console.log('❌❌ Failed');
  } 
};



module.exports = assertArraysEqual;

