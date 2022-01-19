const { expect } = require('chai');
const { sum } = require('./sum.js');

describe('Sum of Numbers', () => {
    it('returns sum of positive numbers', () => {
        expect(sum([1, 2, 3, 4])).to.equal(10);
    });
    it('returns sum of negative numbers', () => {
        expect(sum([-1, -2, -3, -4])).to.equal(-10);
    });
    it('returns sum of positive and negative numbers', () => {
        expect(sum([1, 2, -3, 4])).to.equal(4);
    });
    it('returns 0 for empty array', () => {
        expect(sum([])).to.equal(0);
    });
    it('returns sum of string and numbers', () => {
        expect(sum([1, 2, '3'])).to.equal(6);
    });
});