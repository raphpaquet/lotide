const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {
  it('returns 💚💚 Assertion Passed if "Boot" === "Boot"', () => {
    assert.strictEqual(assertEqual('Boot', 'Boot'))
  })
})


