var assert = require('chai').assert;

// x ^ y
function pow(x, y) {
  let result = 1;
  for (let i = 0 ; i < y ; i += 1) {
    result *= x;
  }
  return result
}

describe("pow", function() {
  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} in the power 3 is ${expected}`, function() {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }
});
