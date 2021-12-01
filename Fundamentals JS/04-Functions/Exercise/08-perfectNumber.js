function perfectNumber(num) {
    let result = 0;
    for (let i = 0; i < num; i++) {
        if (num % i === 0) {
            result += i;
        }
    }
    result === num ? console.log('We have a perfect number!') : console.log('It\'s not so perfect.');
}
perfectNumber(6);