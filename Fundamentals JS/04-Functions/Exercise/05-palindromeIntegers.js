function palindromeIntegers(arr) {
    for (let num of arr) {
        let reverseNumber = num
            .toString()
            .split('')
            .reverse()
            .join('');

        num.toString() === reverseNumber ? console.log('true') : console.log('false');

        // if (num === Number(reverseNumber)) {
        //     console.log('true');
        // } else {
        //     console.log('false');
        // }
    }
}
palindromeIntegers([123, 323, 421, 121]);