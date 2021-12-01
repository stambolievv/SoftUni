function divisibleByNine(params) {
    let start = Number(params[0]);
    let end = Number(params[1]);

    let sum = 0;
    for (let i = start; i <= end; i++) {
        if (i % 9 === 0) {
            sum += i;
        }
    }
    console.log(`The sum: ${sum}`);
    for (let j = start; j <= end; j++) {
        if (j % 9 === 0) {
            console.log(j);
        }
    }
}
divisibleByNine(['100', '200']);