const testNumbers = require('./testNumbers');
const { assert } = require('chai');

describe('testNumbers', () => {
    describe('sumNumber', () => {
        it('checks if parameters are numbers', () => {
            assert.equal(testNumbers.sumNumbers('NaN', 14), undefined);
            assert.equal(testNumbers.sumNumbers(14, 8), 22);
        })

        it('numbers can be positive and negative', () => {
            assert.equal(testNumbers.sumNumbers(-14, 14), 0);
            assert.equal(testNumbers.sumNumbers(8, -8), 0);
        })

        it('returns undefined if parameters arent number', () => {
            assert.equal(testNumbers.sumNumbers('Henderson', 14), undefined);
            assert.equal(testNumbers.sumNumbers(8, 'Gerrard'), undefined);
        })

        it('returns the sum of the given numbers, rounded to second decimal point', () => {
            assert.equal(testNumbers.sumNumbers(2.221, 3.331), 5.55);
        })
    })

    describe('numberChecker', () => {
        it('parses the input to number, and validates it', () => {
            assert.equal(testNumbers.numberChecker('14'), 'The number is even!');
        })

        it('checks if number is even', () => {
            assert.equal(testNumbers.numberChecker(14), 'The number is even!');
        })

        it('checks if number is odd', () => {
            assert.equal(testNumbers.numberChecker(15), 'The number is odd!');
        })

        it('throws if not a number', () => {
            assert.throws(() => testNumbers.numberChecker('Fourteen'), 'The input is not a number!');
        })
    })

    describe('averageSumArray', () => {
        it('iterates through the array, calculates the sum, and returns the average', () => {
            assert.equal(testNumbers.averageSumArray([5, 5, 10, 10, 20]), 10);
        })
    })
})