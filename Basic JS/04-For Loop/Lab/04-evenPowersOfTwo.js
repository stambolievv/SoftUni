function evenPowersOfTwo(params) {
    let pow = Number(params[0]);
    for (let i = 0; i <= pow; i += 2) {
        console.log(Math.pow(2, i));
    }
}
evenPowersOfTwo(['7']);