function smallestTwoNumbers(arr) {
    const sorted = arr
        .sort((a, b) => a - b)
        .slice(0, 2)
        .join(' ');
    console.log(sorted);
}
smallestTwoNumbers([30, 15, 50, 5]);