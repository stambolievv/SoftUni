const { testNumbers } = require('./testNumbers');
const { expect } = require('chai');

describe('Test Numbers', () => {
    describe('sumNumbers', () => {
        it('valid numbers', () => {
            expect(testNumbers.sumNumbers(3, 5)).to.equal('8.00');
        });
        it('negative numbers', () => {
            expect(testNumbers.sumNumbers(3, -5)).to.equal('-2.00');
        });
        it('floating numbers', () => {
            expect(testNumbers.sumNumbers(1.5555, 0.3333)).to.equal('1.89');
        });
        it('returns undefined', () => {
            expect(testNumbers.sumNumbers('1', '2')).to.be.undefined;
            expect(testNumbers.sumNumbers(1, '2')).to.be.undefined;
            expect(testNumbers.sumNumbers('1', 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, null)).to.be.undefined;
            expect(testNumbers.sumNumbers(null, 2)).to.be.undefined;
            expect(testNumbers.sumNumbers(1, null)).to.be.undefined;
        });
    });
    describe('numberChecker', () => {
        it('even values', () => {
            expect(testNumbers.numberChecker(0)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(2)).to.equal('The number is even!');
            expect(testNumbers.numberChecker(4)).to.equal('The number is even!');
            expect(testNumbers.numberChecker('0')).to.equal('The number is even!');
            expect(testNumbers.numberChecker('2')).to.equal('The number is even!');
            expect(testNumbers.numberChecker('4')).to.equal('The number is even!');
        });
        it('odd values', () => {
            expect(testNumbers.numberChecker(1)).to.contain('The number is odd!');
            expect(testNumbers.numberChecker(3)).to.contain('The number is odd!');
            expect(testNumbers.numberChecker(5)).to.contain('The number is odd!');
            expect(testNumbers.numberChecker('1')).to.contain('The number is odd!');
            expect(testNumbers.numberChecker('3')).to.contain('The number is odd!');
            expect(testNumbers.numberChecker('5')).to.contain('The number is odd!');
        });
        it('throw error', () => {
            expect(() => testNumbers.numberChecker('a')).to.throw();
            expect(() => testNumbers.numberChecker({})).to.throw();
            expect(() => testNumbers.numberChecker(undefined)).to.throw();
        });
    });
    describe('averageSumArray', () => {
        it('integer numbers', () => {
            expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
        });
        it('floating numbers', () => {
            expect(testNumbers.averageSumArray([1.5, 2.5, 3.5])).to.equal(2.5);
        });
    });
});