function LastKNumbersSequence(n, k) {
    let result = [1];
    for (let i = 1; i < n; i++) {
        let current = 0;
        let elements = result.slice(-k);
        for (const iterator of elements) {
            current += iterator;
        }
        result.push(current);
    }
    console.log(result.join(' '));
}
LastKNumbersSequence(6, 3);