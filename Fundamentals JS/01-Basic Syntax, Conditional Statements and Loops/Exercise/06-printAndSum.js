function printAndSum(start, end) {
    let result = 0;
    let numbers = '';
    for (start; start <= end; start++) {
        result += start;
        numbers += `${start} `;
    }
    console.log(numbers);
    console.log('Sum: ' + result);
}
printAndSum(0, 26);