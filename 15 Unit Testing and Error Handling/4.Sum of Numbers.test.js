const expect = require("chai").expect;
const sum = require("./4.Sum of Numbers");
describe("Sum of Numbers", () => {
  it("should return the sum of the numbers in the array", () => {
    let numbers = [1, 2, 3, 4, 5];
    let exepectedSum = 15;
    let actualSum = sum(numbers);
    expect(actualSum).to.equal(exepectedSum);
  });
});
