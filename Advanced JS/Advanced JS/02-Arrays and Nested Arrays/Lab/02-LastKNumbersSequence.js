function LastKNumbersSequence(n, k) {
    const result = [1];
    for (let i = 1; i < n; i++) {
        const lastElements = result.slice(-k).reduce((a, b) => a + b, 0);
        result.push(lastElements);
    }
    return result;
}
console.log(LastKNumbersSequence(8, 2));