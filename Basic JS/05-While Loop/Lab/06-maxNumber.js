function maxNumber(params) {
    let index = 0;
    let command = params[index];
    index++;

    let maxNum = Number.MIN_SAFE_INTEGER;
    while (command !== 'Stop') {
        let num = Number(command);
        if (num > maxNum) { maxNum = num; }
        command = params[index];
        index++;
    }
    console.log(maxNum);
}
maxNumber(['100', '99', '80', '70', 'Stop']);