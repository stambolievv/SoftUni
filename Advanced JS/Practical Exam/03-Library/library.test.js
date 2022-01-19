const { expect } = require('chai');
const { library } = require('./library');

describe('Library', () => {
    describe('calcPriceOfBook', () => {
        it('error on wrong input', () => {
            expect(() => library.calcPriceOfBook(123, 'year')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook('name', 'year')).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(123, 1980)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(undefined, undefined)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook([], null)).to.throw('Invalid input');
            expect(() => library.calcPriceOfBook(NaN, {})).to.throw('Invalid input');
        });
        it('valid number outcome', () => {
            expect(library.calcPriceOfBook('name', 2000)).to.be.equal('Price of name is 20.00');
            expect(library.calcPriceOfBook('name', 1981)).to.be.equal('Price of name is 20.00');
            expect(library.calcPriceOfBook('name', 1980)).to.be.equal('Price of name is 10.00');
            expect(library.calcPriceOfBook('name', 1979)).to.be.equal('Price of name is 10.00');
        });
    });
    describe('findBook', () => {
        it('error on wrong input', () => {
            expect(() => library.findBook([])).to.throw('No books currently available');

        });
        it('valid string outcome', () => {
            expect(library.findBook(['name1', 'name2', 'name3', 'name4'], 'name1')).to.equal('We found the book you want.');
            expect(library.findBook(['name1', 'name2', 'name3', 'name4'], 'name2')).to.equal('We found the book you want.');
            expect(library.findBook(['name1', 'name2', 'name3', 'name4'], 'name50')).to.equal('The book you are looking for is not here!');
            expect(library.findBook(['name1', 'name2', 'name3', 'name4'], 'name80')).to.equal('The book you are looking for is not here!');
        });
    });
    describe('arrangeTheBooks', () => {
        it('error on wrong input', () => {
            expect(() => library.arrangeTheBooks(-1)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(-5)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks('10')).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks(undefined)).to.throw('Invalid input');
            expect(() => library.arrangeTheBooks([])).to.throw('Invalid input');
            //     expect(library.arrangeTheBooks({}, {})).to.be.undefined;
            //     expect(library.arrangeTheBooks(undefined, NaN)).to.be.undefined;
        });
        it('valid number outcome', () => {
            expect(library.arrangeTheBooks(10)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(20)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
            expect(library.arrangeTheBooks(60)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});