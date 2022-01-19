function sortingNumbers(arr) {
    const result = [];
    const len = arr.length / 2;
    arr = arr.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        result.push(arr.shift(), arr.pop());
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));