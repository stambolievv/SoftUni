function processOddPositions(arr) {
    const result = arr
        .filter((v, i) => i % 2 == 1)
        .map(n => n * 2)
        .reverse()
        .join(' ');
    console.log(result);
}
processOddPositions([10, 15, 20, 25]);