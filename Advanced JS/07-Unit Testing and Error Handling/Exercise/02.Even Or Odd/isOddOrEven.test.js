const { expect } = require('chai');
const { isOddOrEven } = require('./isOddOrEven.js');

describe('Even Or Odd', () => {
    it('returns undefined', () => {
        expect(isOddOrEven(1)).to.be.undefined;
        expect(isOddOrEven([])).to.be.undefined;
        expect(isOddOrEven({})).to.be.undefined;
        expect(isOddOrEven(undefined)).to.be.undefined;
    });
    it('returns even', () => {
        expect(isOddOrEven('')).to.equal('even');
        expect(isOddOrEven('qw')).to.equal('even');
        expect(isOddOrEven('qwer')).to.equal('even');
        expect(isOddOrEven('qwerty')).to.equal('even');
    });
    it('returns odd', () => {
        expect(isOddOrEven('q')).to.equal('odd');
        expect(isOddOrEven('qwe')).to.equal('odd');
        expect(isOddOrEven('qwert')).to.equal('odd');
        expect(isOddOrEven('qwertyu')).to.equal('odd');
    });
});