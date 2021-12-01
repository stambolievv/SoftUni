function divideWithoutRemainder(params) {
    let numbers = Number(params[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    for (let i = 1; i <= numbers; i++) {
        let currentNum = Number(params[i]);
        if (currentNum % 2 === 0) {
            p1++;
        }
        if (currentNum % 3 === 0) {
            p2++;
        }
        if (currentNum % 4 === 0) {
            p3++;
        }
    }
    console.log(`${((p1 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p2 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p3 / numbers) * 100).toFixed(2)}%`);
}
divideWithoutRemainder(['3', '3', '6', '9']);