function minNumber(params) {
    let index = 0;
    let command = params[index];
    index++;

    let maxNum = Number.MAX_SAFE_INTEGER;
    while (command !== 'Stop') {
        let num = Number(command);
        if (num < maxNum) { maxNum = num; }
        command = params[index];
        index++;
    }
    console.log(maxNum);
}
minNumber(['100', '99', '80', '70', 'Stop']);