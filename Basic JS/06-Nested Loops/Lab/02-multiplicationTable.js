function multiplicationTable() {
    for (let a = 1; a <= 10; a++) {
        for (let b = 1; b <= 10; b++) {
            console.log(`${a} * ${b} = ${a * b}`);
        }
    }
}
multiplicationTable();