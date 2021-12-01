function betweenNumbers(params) {
    let num1 = Number(params[0]);
    let num2 = Number(params[1]);
    let symbol = params[2];
    switch (symbol) {
        case '+':
            if ((num1 + num2) % 2 === 0) {
                console.log(`${num1} + ${num2} = ${num1 + num2} - even`);
            } else {
                console.log(`${num1} + ${num2} = ${num1 + num2} - odd`);
            }
            break;
        case '-':
            if ((num1 - num2) % 2 === 0) {
                console.log(`${num1} - ${num2} = ${num1 - num2} - even`);
            } else {
                console.log(`${num1} - ${num2} = ${num1 - num2} - odd`);
            }
            break;
        case '*':
            if ((num1 * num2) % 2 === 0) {
                console.log(`${num1} * ${num2} = ${num1 * num2} - even`);
            } else {
                console.log(`${num1} * ${num2} = ${num1 * num2} - odd`);
            }
            break;
        case '/':
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
            }
            break;
        case '%':
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                console.log(`${num1} % ${num2} = ${num1 % num2}`);
            }
            break;
        default: break;
    }
}
betweenNumbers(['112', '0', '/']);