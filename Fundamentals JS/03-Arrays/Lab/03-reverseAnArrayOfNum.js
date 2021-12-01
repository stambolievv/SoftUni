function reverseAnArrayOfNum(num, arr) {
    let result = [];
    for (let i = num - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
}
reverseAnArrayOfNum(3, [10, 20, 30, 40, 50]);