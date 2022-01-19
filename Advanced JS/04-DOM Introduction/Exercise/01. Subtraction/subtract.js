function subtract() {
    const firstNum = Number(document.getElementById('firstNumber').value);
    const secondNum = Number(document.getElementById('secondNumber').value);
    document.getElementById('result').innerHTML = (firstNum - secondNum).toString();
}
