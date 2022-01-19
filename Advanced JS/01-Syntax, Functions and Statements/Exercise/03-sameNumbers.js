function sameNumbers(num) {
    let numAsArray = num.toString().split('');
    let unique = numAsArray.every(x => x === numAsArray[0]);
    console.log(unique);
    console.log(numAsArray.map(Number).reduce((a, b) => a + b, 0));
}
sameNumbers(2222222);