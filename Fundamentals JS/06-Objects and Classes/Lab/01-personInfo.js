function personInfo(fName, lName, a) {
    let person = {
        firstName: fName,
        lastName: lName,
        age: a
    };
    return person;
}
console.log(personInfo('Peter', 'Pan', 20));