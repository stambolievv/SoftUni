function specialNumbers(n) {
    for (let i = 1; i <= n; i++) {
        let lastDigit = (i / 1) % 10;
        let firstDigit = (i - (i % 10)) / 10;
        let sum = lastDigit + firstDigit;
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}
specialNumbers(150);