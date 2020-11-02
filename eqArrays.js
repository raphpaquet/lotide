const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return console.log(false);
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return console.log(false);
    }
  }
  return console.log(true);
};


module.exports = eqArrays;