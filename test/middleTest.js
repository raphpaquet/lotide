const middle = require('../middle');
const { assert } = require('chai');

describe('#middle', () => {
  it('shoud returns [3] for [1, 2, 3, 4, 5]', () => {
    assert.strictEqual(middle([1, 2, 3, 4, 5], [3]));
  });
});

