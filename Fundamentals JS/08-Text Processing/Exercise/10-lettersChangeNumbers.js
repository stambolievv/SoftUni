function lettersChangeNumbers(str) {
    let words = str.split(' ').filter(x => x.length > 1);;
    let result = 0;
    for (let item of words) {
        let firstChar = item[0];
        let lastChar = item[item.length - 1];
        let firstPosition = 0;
        let lastPosition = 0;
        let num = item.slice(1, - 1);

        if (firstChar.charCodeAt(0) >= 97 && firstChar.charCodeAt(0) <= 122) {
            firstPosition = firstChar.charCodeAt(0) - 96;
            num *= firstPosition;
        } else {
            firstPosition = firstChar.charCodeAt(0) - 64;
            num /= firstPosition;
        }

        if (lastChar.charCodeAt(0) >= 97 && lastChar.charCodeAt(0) <= 122) {
            lastPosition = lastChar.charCodeAt(0) - 96;
            num += lastPosition;
        } else {
            lastPosition = lastChar.charCodeAt(0) - 64;
            num -= lastPosition;
        }
        result += num;
    }
    console.log(result.toFixed(2));
}
lettersChangeNumbers('A12b s17G');