function evenOrOdd(input) {
    let num = Number(input[0]);
    if (num % 2 === 0) {
        console.log(`${num} is even number!`);
    } else {
        console.log(`${num} is odd number!`);
    }
}
evenOrOdd(['6']);