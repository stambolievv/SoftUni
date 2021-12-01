function calculator(num1, operator, num2) {
    let result = 0;

    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }

    console.log(result.toFixed(2));
    // console.log(eval(num1 + operator + num2).toFixed(2));
}
calculator(10, '+', 5);