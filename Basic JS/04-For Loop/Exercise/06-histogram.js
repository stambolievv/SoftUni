function histogram(params) {
    let numbers = Number(params[0]);
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (let i = 1; i <= numbers; i++) {
        let currentNum = Number(params[i]);
        if (currentNum < 200) {
            p1++;
        } else if (currentNum < 400) {
            p2++;
        } else if (currentNum < 600) {
            p3++;
        } else if (currentNum < 800) {
            p4++;
        } else if (currentNum >= 800) {
            p5++;
        }
    }
    console.log(`${((p1 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p2 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p3 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p4 / numbers) * 100).toFixed(2)}%`);
    console.log(`${((p5 / numbers) * 100).toFixed(2)}%`);
}
histogram(['3', '1', '2', '999']);