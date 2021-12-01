function minNumber(params) {
    let numCount = Number(params[0]);
    let numMin = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= numCount; i++) {
        let current = Number(params[i]);
        if (current < numMin) { numMin = current; }
    }
    console.log(numMin);
}
minNumber(['4', '100', '99', '6', '545413']);