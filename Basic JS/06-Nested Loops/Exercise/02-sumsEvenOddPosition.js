function sumsEvenOddPosition(params) {
    let start = Number(params[0]);
    let end = Number(params[1]);
    let output = '';
    for (let i = start; i <= end; i++) {
        let current = '' + i;
        let odd = Number(current[1]) + Number(current[3]) + Number(current[5]);
        let even = Number(current[0]) + Number(current[2]) + Number(current[4]);
        if (odd === even) { output += i + ' '; }
    }
    console.log(output);
}
sumsEvenOddPosition(['299900', '300000']);