const lookupChar = require("./3.Char Lookup");
const { assert } = require("chai");

describe("lookupChar function test", () => {
  it("should return char at specific index ", () => {
    assert(lookupChar("love", 1) === "o");
  });
  it("should return char at specific index ", () => {
    assert(lookupChar("l", 0) === "l");
  });
  it("Return index over the string lenght ", () => {
    assert(lookupChar("love", 10) === "Incorrect index");
  });
  it("Negative string index ", () => {
    assert(lookupChar("love", -10) === "Incorrect index");
  });
  it("Undefined if the first parameter is not string ", () => {
    assert(lookupChar(100, 10) === undefined);
  });
  it("Return undefined with string first parametar and decimal second", () => {
    assert(lookupChar("string", 10.5) === undefined);
  });
  it("Return undefined with wrong parametars type", () => {
    assert(lookupChar(20, "10.5") === undefined);
  });
});
