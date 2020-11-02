const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const { assert } = require('chai');

describe('#middle', () => {
  it('shoud returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5], [3]));
  });
});

// console.log(middle([1,2,3,4,5]))
// console.log(assertArraysEqual(middle([1,2,3,4,5]), [3]))