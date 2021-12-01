function oddNEvenSum(num) {
    let evenSum = 0;
    let oddSum = 0;
    let digits = num.toString();
    for (let d of digits) {
        if (Number(d) % 2 === 0) {
            evenSum += Number(d);
        } else {
            oddSum += Number(d);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddNEvenSum(1000435);