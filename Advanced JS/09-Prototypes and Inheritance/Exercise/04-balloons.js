function balloons() {
    class Balloon {
        constructor(color, hasWeight) {
            this.color = color;
            this.hasWeight = hasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength) {
            super(color, hasWeight);
            this._ribbon = { color: ribbonColor, length: ribbonLength, };
        }
        get ribbon() {
            return this._ribbon;
        }
    }
    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeight, ribbonColor, ribbonLength, text) {
            super(color, hasWeight, ribbonColor, ribbonLength);
            this._text = text;
        }
        get text() {
            return this._text;
        }
    }
    return { Balloon, PartyBalloon, BirthdayBalloon };
}
const classes = balloons();
const testBalloon = new classes.Balloon('yellow', 20.5);
const testPartyBalloon = new classes.PartyBalloon('yellow', 20.5, 'red', 10.25);
const ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);