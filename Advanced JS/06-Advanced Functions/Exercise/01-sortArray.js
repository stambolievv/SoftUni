function sortArray(arr, command) {
    const order = command == 'asc' ? (a, b) => a - b : (a, b) => b - a;
    return arr.sort(order);

    // if (command == 'asc') {
    //     return arr.sort((a, b) => a - b);
    // } else if (command == 'desc') {
    //     return arr.sort((a, b) => b - a);
    // }
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'));
