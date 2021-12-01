function biggestElement(matrix) {
    // const result = matrix.reduce((acc, val) => acc.concat(val), []);
    const result = matrix.flat();
    return Math.max(...result);
}
console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]
]));