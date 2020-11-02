const assertArraysEqual = require('./assertArraysEqual')


const letterPositions = function (sentence) {
  const results = {};
  for (let i in sentence) {
    const letter = sentence[i];
    // if sentence[i] is in results...
    if (results[letter]) {
      results[letter].push(i);
    } else if (letter !== ' ') {
      results[letter] = [i];
    }
  } return results;
}


module.exports = letterPositions;
// console.log(letterPositions('Lighthouse in the house'))
// console.log(letterPositions('hello'))
// console.log(assertArraysEqual(letterPositions('hello').e, ['1']));

