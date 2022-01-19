const { expect } = require('chai');
const { lookupChar } = require('./lookupChar.js');

describe('Char Lookup', () => {
    it('returns undefined', () => {
        expect(lookupChar()).to.be.undefined;

        expect(lookupChar('5', null)).to.be.undefined;
        expect(lookupChar('5', undefined)).to.be.undefined;
        expect(lookupChar('5', false)).to.be.undefined;
        expect(lookupChar('5', NaN)).to.be.undefined;
        expect(lookupChar('5', [])).to.be.undefined;
        expect(lookupChar('5', {})).to.be.undefined;
        expect(lookupChar('5', '10')).to.be.undefined;

        expect(lookupChar(null, 5)).to.be.undefined;
        expect(lookupChar(undefined, 5)).to.be.undefined;
        expect(lookupChar(false, 5)).to.be.undefined;
        expect(lookupChar(NaN, 5)).to.be.undefined;
        expect(lookupChar([], 5)).to.be.undefined;
        expect(lookupChar({}, 5)).to.be.undefined;

        expect(lookupChar(null, null)).to.be.undefined;
        expect(lookupChar(undefined, undefined)).to.be.undefined;
        expect(lookupChar(false, false)).to.be.undefined;
        expect(lookupChar(NaN, NaN)).to.be.undefined;
        expect(lookupChar([], [])).to.be.undefined;
        expect(lookupChar({}, {})).to.be.undefined;

    });
    it('returns for incorrect index', () => {
        expect(lookupChar('asd', 3)).to.equal('Incorrect index');
        expect(lookupChar('asd', -1)).to.equal('Incorrect index');
        expect(lookupChar('asd', 6)).to.equal('Incorrect index');
    });
    it('returns valid output', () => {
        expect(lookupChar('a', 0)).to.equal('a');
        expect(lookupChar('asdfgh', 2)).to.equal('d');
        expect(lookupChar('12345', 1)).to.equal('2');
        expect(lookupChar('UwUwUwU', 5)).to.equal('w');
    });
});