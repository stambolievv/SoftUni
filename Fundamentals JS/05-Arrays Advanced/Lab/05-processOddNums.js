function processOddNums(arr) {
    let predicate = (x, i) => i % 2 == 1;
    let filtered = arr.filter(predicate);

    let operator = x => x * 2;
    let mapped = filtered.map(operator);
    mapped.reverse();
    console.log(mapped.join(' '));

    // console.log(arr
    //     .filter((x, i) => i % 2 == 1)
    //     .map(x => x * 2)
    //     .reverse()
    //     .join(' ')
    // );
}
processOddNums([10, 15, 20, 25]);