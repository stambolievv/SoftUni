function classHierarchy() {
    class Figure {
        constructor(unit = 'cm') {
            this.units = unit;
            if (new.target === Figure) {
                throw new TypeError('Figure class is abstract');
            }
        }
        changeUnits(value) {
            this.units = value;
        }
        toString() {
            return `Figures units: ${this.units}`;
        }
        calculateUnits(unit) {
            switch (this.units) {
                case 'm': unit /= 10; break;
                case 'cm': unit *= 1; break;
                case 'mm': unit *= 10; break;
                default: break;
            }
            return unit;
        }
    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this._radius = radius;
        }
        get radius() {
            return super.calculateUnits(this._radius);
        }
        get area() {
            return this.radius ** 2 * Math.PI;
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - radius: ${this.radius}`;
        }
    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this._width = width;
            this._height = height;
        }
        get width() {
            return super.calculateUnits(this._width);
        }
        get height() {
            return super.calculateUnits(this._height);
        }
        get area() {
            return this.width * this.height;
        }
        toString() {
            return `${super.toString()} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }
    return { Figure, Circle, Rectangle };
}
const { Figure, Circle, Rectangle } = classHierarchy();
let c = new Circle(5);
console.log(c.area); // 78.53981633974483
console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');
console.log(r.area); // 1200 
console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');
console.log(r.area); // 12