const { expect } = require('chai');
const { rgbToHexColor } = require('./rgbToHexColor.js');

describe('RGB to Hex', () => {
    describe('Happy Path', () => {
        it('Convert white', () => {
            expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        });
        it('Convert black', () => {
            expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        });
        it('Convert red', () => {
            expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
        });
        it('Convert green', () => {
            expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
        });
        it('Convert blue', () => {
            expect(rgbToHexColor(0, 0, 255)).to.equal('#0000FF');
        });
    });
    describe('Invalid parameter', () => {
        it('returns undefined for missing parameters', () => {
            expect(rgbToHexColor(255)).to.be.undefined;
            expect(rgbToHexColor(255, 255)).to.be.undefined;
        });
        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(-1, -1, -1)).to.be.undefined;
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        });
        it('returns undefined for values out of range', () => {
            expect(rgbToHexColor(256, 256, 256)).to.be.undefined;
            expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
            expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        });
        it('returns undefined for invalid parameter type', () => {
            expect(rgbToHexColor('0', '0', '0')).to.be.undefined;
            expect(rgbToHexColor(0, 0, '0')).to.be.undefined;
            expect(rgbToHexColor(0, '0', 0)).to.be.undefined;
            expect(rgbToHexColor('0', 0, 0)).to.be.undefined;
        });
    });
});