function extractArray(arr) {
    const result = [];
    let biggest = arr[0];
    for (const num of arr) {
        if (num >= biggest) {
            result.push(num);
            biggest = num;
        }
    }
    return result;
}
console.log(extractArray([1, 3, 8, 4, 10, 12, 3, 2, 24]));