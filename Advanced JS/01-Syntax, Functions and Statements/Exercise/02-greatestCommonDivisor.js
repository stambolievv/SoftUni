function greatestCommonDivisor(num1, num2) {
    while (num2 != 0) {
        let temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return console.log(num1);
}
greatestCommonDivisor(2154, 458);