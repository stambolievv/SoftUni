const { expect } = require('chai');
const { mathEnforcer } = require('./mathEnforcer.js');

describe('Math Enforcer', () => {
    describe('Add Five', () => {
        it('undefined on wrong input type', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
            expect(mathEnforcer.addFive([])).to.be.undefined;
            expect(mathEnforcer.addFive({})).to.be.undefined;
            expect(mathEnforcer.addFive(undefined)).to.be.undefined;
        });
        it('valid number outcome', () => {
            expect(mathEnforcer.addFive(0)).to.equal(5);
            expect(mathEnforcer.addFive(5)).to.equal(10);
            expect(mathEnforcer.addFive(-10)).to.equal(-5);
            expect(mathEnforcer.addFive(5.05)).to.closeTo(10.05, 0.01);
            expect(mathEnforcer.addFive(-6.10)).to.closeTo(-1.1, 0.01);

        });
    });
    describe('Subtract Ten', () => {
        it('undefined on wrong input type', () => {
            expect(mathEnforcer.subtractTen('10')).to.be.undefined;
            expect(mathEnforcer.subtractTen([])).to.be.undefined;
            expect(mathEnforcer.subtractTen({})).to.be.undefined;
            expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
        });
        it('valid number outcome', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
            expect(mathEnforcer.subtractTen(-10)).to.equal(-20);
            expect(mathEnforcer.subtractTen(10)).to.equal(0);
            expect(mathEnforcer.subtractTen(20)).to.equal(10);
            expect(mathEnforcer.subtractTen(5.05)).to.closeTo(-4.95, 0.01);
        });
    });
    describe('Sum', () => {
        it('undefined on wrong input type', () => {
            expect(mathEnforcer.sum(5)).to.be.undefined;
            expect(mathEnforcer.sum('10')).to.be.undefined;
            expect(mathEnforcer.sum('10', 5)).to.be.undefined;
            expect(mathEnforcer.sum(10, '5')).to.be.undefined;
            expect(mathEnforcer.sum([], '')).to.be.undefined;
            expect(mathEnforcer.sum({}, {})).to.be.undefined;
            expect(mathEnforcer.sum(undefined, NaN)).to.be.undefined;
        });
        it('valid number outcome', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
            expect(mathEnforcer.sum(-10, -20)).to.equal(-30);
            expect(mathEnforcer.sum(10, -10)).to.equal(0);
            expect(mathEnforcer.sum(0, 20)).to.equal(20);
            expect(mathEnforcer.sum(5.05, 5.05)).to.equal(10.10, 0.01);
            expect(mathEnforcer.sum(5.15, -2.05)).to.closeTo(3.1, 0.01);
        });
    });
});