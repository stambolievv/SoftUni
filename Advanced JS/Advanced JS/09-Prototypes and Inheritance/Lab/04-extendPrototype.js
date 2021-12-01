function extendPrototype(classToExtend) {
    classToExtend.prototype.species = 'Human';
    classToExtend.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. ${this.toString()}`;
    };
}

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString() {
        const className = this.constructor.name;
        return `${className} (name: ${this.name}, email: ${this.email})`;
    }
}
class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
    toString() {
        return this.subject + ' ' + super.toString();
    }
}
class Student extends Person {
    constructor(name, email, level) {
        super(name, email);
        this.level = level;
    }
    toString() {
        return `${this.level} Grade ${super.toString()}`;
    }
}

extendPrototype(Person);
const p = new Person('Pesho', 'pesho@gmail.com');
console.log(p.species);
console.log(p.toSpeciesString());

const t = new Teacher('Georgi', 'gosho@gmail.com', 'Math');
console.log(t.species);
console.log(t.toSpeciesString());

const s = new Student('Ivan', 'vancho@gmail.com', '7th');
s.species = 'Hero';
console.log(s.species);
console.log(s.toSpeciesString());
