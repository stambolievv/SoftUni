function sum(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += Number(num);
    }
    return sum;
}
sum();

module.exports = { sum };


/**
* * **********
* ! JS Unit Testing (perform tests) :
* ? with Mocha
* ! Assertion frameworks (perform checks) :
* ? with Chai
* * **********
*/