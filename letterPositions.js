const eqArrays = function (arr1, arr2) {
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

const letterPositions = function (sentence) {
  const results = {};
  for (let i in sentence) {
    const letter = sentence[i];
    // if sentence[i] is in results...
    if (results[letter]) {
      results[letter].push(i)
    } else if (letter !== ' ') {
      results[letter] = [i]
    }
  } return results
  //... then you can push to results[letter]
  //else results[letter] = [i]
}


console.log(letterPositions('Lighthouse in the house'))
console.log(assertArraysEqual(letterPositions('hello').e, [1]));

