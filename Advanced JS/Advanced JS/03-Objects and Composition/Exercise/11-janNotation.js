function janNotation(arr) {
    const operations = {
        '+': (firstNum, secondNum) => secondNum + firstNum,
        '-': (firstNum, secondNum) => secondNum - firstNum,
        '*': (firstNum, secondNum) => secondNum * firstNum,
        '/': (firstNum, secondNum) => secondNum / firstNum,
    };

    const operands = [];
    for (const instruction of arr) {
        if (typeof instruction == 'number') {
            operands.push(instruction);
        } else {
            if (operands.length < 2) { return 'Error: not enough operands!'; }
            let first = operands.pop();
            let second = operands.pop();
            operands.push(operations[instruction](first, second));
        }
    }
    return operands.length > 1 ? 'Error: too many operands!' : operands[0];
}
console.log(janNotation([5, 3, 4, '*', '-']));
console.log(janNotation([3, 4, '+']));
console.log(janNotation([7, 33, 8, '-']));
console.log(janNotation([15, '/']));
console.log(janNotation([31, 2, '+', 11, '/']));
console.log(janNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/']));