const sumOfTwoNumbers = require("./index.js");
const { assert } = require("chai");

describe("sumOfTwoNumbers function test", () => {
  it("tet with two numbers", () => {
    assert.equal(sumOfTwoNumbers(3, 4), 7);
  });
});
