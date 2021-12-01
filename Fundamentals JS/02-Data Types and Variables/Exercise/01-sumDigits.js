function sumDigits(num) {
    let numToStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numToStr.length; i++) {
        sum += Number(numToStr[i]);
    }
    console.log(sum);
}
sumDigits(245678);