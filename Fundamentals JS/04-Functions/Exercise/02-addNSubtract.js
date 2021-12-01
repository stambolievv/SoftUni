function addNSubtract(firstNum, secondNum, thirdNum) {
    function sum(num1, num2) {
        return num1 + num2;
    }
    function subtract(num1, num2) {
        return num1 - num2;
    }
    let sumNumbers = sum(firstNum, secondNum);
    let subtractNumbers = subtract(sumNumbers, thirdNum);
    console.log(subtractNumbers);
}
addNSubtract(23, 6, 10);