const mathEnforcer = require("./4.Math Enforcer");
const { assert } = require("chai");
describe("MathEnforcer function test", () => {
  describe("add five function test", () => {
    it("Should return undefined with string", () => {
      assert(mathEnforcer.addFive("test") === undefined);
    });
    it("Should return undefined with array", () => {
      assert(mathEnforcer.addFive([1, 2, 3, 4]) === undefined);
    });
    it("Should return undefined with object", () => {
      assert(mathEnforcer.addFive({}) === undefined);
    });
    it("Should return undefined with undefined", () => {
      assert(mathEnforcer.addFive(undefined) === undefined);
    });
    it("Should return undefined with null", () => {
      assert(mathEnforcer.addFive(null) === undefined);
    });
    it("Should return undefined with object", () => {
      assert(mathEnforcer.addFive({}) === undefined);
    });
    //   test with correct input
    it("Positive integer number +5", () => {
      assert(mathEnforcer.addFive(5) === 10);
    });
    it("Positive integer number +5", () => {
      assert(mathEnforcer.addFive(-5) === 0);
    });
    it("decimal number +5", () => {
      assert(mathEnforcer.addFive(5.5) === 10.5);
    });
  });
  describe("subtract function test", () => {
    it("Should return undefined with string", () => {
      assert(mathEnforcer.subtractTen("test") === undefined);
    });
    it("Should return undefined with array", () => {
      assert(mathEnforcer.subtractTen([1, 2, 3, 4]) === undefined);
    });
    it("Should return undefined with object", () => {
      assert(mathEnforcer.subtractTen({}) === undefined);
    });
    it("Should return undefined with undefined", () => {
      assert(mathEnforcer.subtractTen(undefined) === undefined);
    });
    it("Should return undefined with null", () => {
      assert(mathEnforcer.subtractTen(null) === undefined);
    });
    it("Should return undefined with object", () => {
      assert(mathEnforcer.subtractTen({}) === undefined);
    });
    //   test with correct input
    it("Positive integer number -10", () => {
      assert(mathEnforcer.subtractTen(5) === -5);
    });
    it("Positive integer number -10", () => {
      assert(mathEnforcer.subtractTen(-5) === -15);
    });
    it("decimal number -10", () => {
      assert(mathEnforcer.subtractTen(15.5) === 5.5);
    });
  });
  describe("sum of two numbers function test", () => {
    it("two positive numbers", () => {
      assert(mathEnforcer.sum(10, 20) === 30);
    });
    it("two negative numbers", () => {
      assert(mathEnforcer.sum(-5, -15) === -20);
    });
    it("two decimal numbers", () => {
      assert(mathEnforcer.sum(-5.5, -15.5) === -21);
    });
    it("first parametar string second number", () => {
      assert(mathEnforcer.sum("-5", -15) === undefined);
    });
    it("second parametar string first number", () => {
      assert(mathEnforcer.sum(-5, "-15") === undefined);
    });
  });
});
