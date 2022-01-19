function person(firstName, lastName) {
    const result = {
        firstName,
        lastName,
        fullName: ''
    };

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            const [first, last] = value.split(' ');
            if (first != undefined && last != undefined) {
                this.firstName = first;
                this.lastName = last;
            }
        },
        configurable: true,
        enumerable: true
    });

    return result;
}
const person1 = person('Peter', 'Ivanov');
console.log(person1.fullName); //Peter Ivanov
person1.firstName = 'George';
console.log(person1.fullName); //George Ivanov
person1.lastName = 'Peterson';
console.log(person1.fullName); //George Peterson
person1.fullName = 'Nikola Tesla';
console.log(person1.firstName); //Nikola
console.log(person1.lastName); //Tesla

const person2 = person('Albert', 'Simpson');
console.log(person2.fullName); //Albert Simpson
person2.firstName = 'Simon';
console.log(person2.fullName); //Simon Simpson
person2.fullName = 'Peter';
console.log(person2.firstName);  // Simon
console.log(person2.lastName);  // Simpson