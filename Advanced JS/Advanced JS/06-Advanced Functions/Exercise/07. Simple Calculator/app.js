function calculator() {
    let firstInput, secondInput, resultBox;
    function init(selector1, selector2, selector3) {
        firstInput = document.getElementById(selector1.slice(1));
        secondInput = document.getElementById(selector2.slice(1));
        resultBox = document.getElementById(selector3.slice(1));
    }
    function add() {
        resultBox.value = Number(firstInput.value) + Number(secondInput.value);
    }
    function subtract() {
        resultBox.value = Number(firstInput.value) - Number(secondInput.value);
    }
    return { init, add, subtract };
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result');



