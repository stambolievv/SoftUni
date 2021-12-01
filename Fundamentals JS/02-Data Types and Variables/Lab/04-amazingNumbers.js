function amazingNumbers(number) {
    let numAsStr = number.toString();
    let sum = 0;

    for (let i = 0; i <= numAsStr.length - 1; i++) {
        sum += Number(numAsStr[i]);
    }

    let sumAsStr = sum.toString();
    let isNine = false;

    for (let i = 0; i <= sumAsStr.length - 1; i++) {
        if (sumAsStr[i] == '9') {
            isNine = true;
            break;
        }
    }

    console.log(`${number} Amazing? ${isNine ? 'True' : 'False'}`);
}
amazingNumbers(1233);