const { expect } = require('chai');
const { PaymentPackage } = require('./PaymentPackage.js');

describe('Payment Package', () => {
    it('throw error for invalid input', () => {
        let flagClass = new PaymentPackage('asd', 5);
        expect(() => flagClass.name = 'asd').not.to.throw();
        expect(() => flagClass.value = 5).not.to.throw();
        expect(() => flagClass.VAT = 20).not.to.throw();
        expect(() => flagClass.active = true).not.to.throw();
    });
    it('throw error for invalid name', () => {
        expect(() => new PaymentPackage()).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(null, 5)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(undefined, 5)).to.throw('Name must be a non-empty string');;
        expect(() => new PaymentPackage(false, 5)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(NaN, 5)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage([], 5)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({}, 5)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(5, 5)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage('', 5)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage(['asd'], 5)).to.throw('Name must be a non-empty string');
        expect(() => new PaymentPackage({ 'asd': 'asd' }, 5)).to.throw('Name must be a non-empty string');

        expect(() => new PaymentPackage('asd', 5)).not.to.throw();
    });
    it('throw error for invalid value', () => {
        expect(() => new PaymentPackage('asd', null)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('asd', undefined)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('asd', false)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('asd', [])).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('asd', {})).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('asd', [10])).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('asd', { 10: 10 })).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('asd', -10)).to.throw('Value must be a non-negative number');
        expect(() => new PaymentPackage('asd', '10')).to.throw('Value must be a non-negative number');

        expect(() => new PaymentPackage('asd', 5)).not.to.throw();
        expect(() => new PaymentPackage('asd', 0)).not.to.throw();

        let flagClass = new PaymentPackage('asd', 5);
        expect(() => flagClass.value = 0).not.to.throw();
    });
    it('throw error for invalid VAT', () => {
        let flagClass = new PaymentPackage('asd', 5);
        expect(() => flagClass.VAT = '').to.throw('VAT must be a non-negative number');
        expect(() => flagClass.VAT = null).to.throw('VAT must be a non-negative number');
        expect(() => flagClass.VAT = undefined).to.throw('VAT must be a non-negative number');
        expect(() => flagClass.VAT = false).to.throw('VAT must be a non-negative number');
        expect(() => flagClass.VAT = []).to.throw('VAT must be a non-negative number');
        expect(() => flagClass.VAT = {}).to.throw('VAT must be a non-negative number');
        expect(() => flagClass.VAT = [10]).to.throw('VAT must be a non-negative number');
        expect(() => flagClass.VAT = { '10': -10 }).to.throw('VAT must be a non-negative number');
        expect(() => flagClass.VAT = -10).to.throw('VAT must be a non-negative number');
        expect(() => flagClass.VAT = -'10').to.throw('VAT must be a non-negative number');

        expect(() => flagClass.VAT = 5).not.to.throw();
        expect(() => flagClass.VAT = 0).not.to.throw();

    });
    it('throw error for invalid Active', () => {
        let flagClass = new PaymentPackage('asd', 5);
        expect(() => flagClass.active = '').to.throw('Active status must be a boolean');
        expect(() => flagClass.active = null).to.throw('Active status must be a boolean');
        expect(() => flagClass.active = undefined).to.throw('Active status must be a boolean');
        expect(() => flagClass.active = []).to.throw('Active status must be a boolean');
        expect(() => flagClass.active = {}).to.throw('Active status must be a boolean');
        expect(() => flagClass.active = [10]).to.throw('Active status must be a boolean');
        expect(() => flagClass.active = 'asd').to.throw('Active status must be a boolean');
        expect(() => flagClass.active = 10).to.throw('Active status must be a boolean');
        expect(() => flagClass.active = -10).to.throw('Active status must be a boolean');
        expect(() => flagClass.active = { '10': -10 }).to.throw('Active status must be a boolean');

        expect(() => flagClass.active = true).not.to.throw();
        expect(() => flagClass.active = false).not.to.throw();
    });
    describe('throw error for invalid toString Method', () => {
        it('return string for valid input', () => {
            let flagClass = new PaymentPackage('asd', 5);
            let output = [
                'Package: asd',
                '- Value (excl. VAT): 5',
                '- Value (VAT 20%): 6'
            ];
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
        it('return string for valid input', () => {
            let flagClass = new PaymentPackage('asd', 5);
            flagClass.VAT = 30;
            let output = [
                'Package: asd',
                '- Value (excl. VAT): 5',
                '- Value (VAT 30%): 6.5'
            ];
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
        it('return string for valid input', () => {
            let flagClass = new PaymentPackage('asd', 5);
            flagClass.active = false;
            let output = [
                'Package: asd (inactive)',
                '- Value (excl. VAT): 5',
                '- Value (VAT 20%): 6'
            ];
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
        it('return string for valid input', () => {
            let flagClass = new PaymentPackage('asd', 5);
            flagClass.VAT = 30;
            flagClass.active = false;
            let output = [
                'Package: asd (inactive)',
                '- Value (excl. VAT): 5',
                '- Value (VAT 30%): 6.5'
            ];
            expect(flagClass.toString()).to.equal(output.join('\n'));
        });
    });
});