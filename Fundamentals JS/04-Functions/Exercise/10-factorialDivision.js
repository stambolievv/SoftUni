function factorialDivision(num1, num2) {

    function factorial(num) {
        let sumOsNum = 1;
        for (let i = num; i > 0; i--) {
            sumOsNum *= i;
        }
        return sumOsNum;
    }
    return (factorial(num1) / factorial(num2)).toFixed(2);
}
console.log(factorialDivision(5, 2));