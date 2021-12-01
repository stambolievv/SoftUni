function addNSubtract(arr) {
    let modifySum = 0;
    let originalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        originalSum += arr[i];
        if (arr[i] % 2 === 0) {
            modifySum += arr[i] + i;
            arr[i] += i;
        } else {
            modifySum += arr[i] - i;
            arr[i] -= i;
        }
    }
    console.log(arr);
    console.log(originalSum);
    console.log(modifySum);
}
addNSubtract([5, 15, 23, 56, 35]);