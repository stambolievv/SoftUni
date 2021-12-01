function simpleCalculator(numOne, numTwo, operator) {
    let result = () => {
        switch (operator) {
            case 'multiply':
                return numOne * numTwo;
            case 'divide':
                return numOne / numTwo;
            case 'add':
                return numOne + numTwo;
            case 'subtract':
                return numOne - numTwo;
            default:
                break;
        }
    };
    console.log(result());
}
simpleCalculator(5, 5, 'multiply');