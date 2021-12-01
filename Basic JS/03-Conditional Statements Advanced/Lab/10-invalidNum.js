function invalidNum(params) {
    let num = Number(params[0]);
    if (!(num >= 100 && num <= 200 || num === 0)) {
        console.log('invalid');
    }
}
invalidNum(['175']);