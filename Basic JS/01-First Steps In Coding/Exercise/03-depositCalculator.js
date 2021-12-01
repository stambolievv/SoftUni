function depositCalculator(input) {
    let depSum = Number(input[0]);
    let time = Number(input[1]);
    let pct = Number(input[2]);
    let result = depSum + time * ((depSum * (pct / 100)) / 12);
    console.log(result);
}
depositCalculator(['2350', '6', '7']);