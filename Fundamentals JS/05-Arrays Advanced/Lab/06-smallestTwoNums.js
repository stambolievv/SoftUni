function smallestTwoNums(arr) {
    arr.sort((a, b) => a - b);
    let newArr = arr.slice(0, 2);
    console.log(newArr.join(' '));
    // console.log(arr[0], arr[1]);
}
smallestTwoNums([30, 15, 50, 5]);