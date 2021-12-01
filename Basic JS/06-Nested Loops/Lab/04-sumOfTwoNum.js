function sumOfTwoNum(params) {
    let start = Number(params[0]);
    let end = Number(params[1]);
    let magic = Number(params[2]);

    let isFound = false;
    let counter = 0;
    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            counter++;
            if (i + j === magic) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magic})`);
                isFound = true;
                break;
            }
        }
        if (isFound) { break; }
    }
    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magic}`);
    }
}
sumOfTwoNum(['88', '888', '1000']);