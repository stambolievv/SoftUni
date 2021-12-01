function reverseAnArrayOfStr(arr) {
    for (let i = 0; i < (arr.length - 1) / 2; i++) {
        let k = (arr.length - 1) - i;
        let swap = arr[i];
        arr[i] = arr[k];
        arr[k] = swap;
    }
    console.log(arr.join(' '));
    /*
    let result = []
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    console.log(result.join(' '));
    */
}
reverseAnArrayOfStr(['a', 'b', 'c', 'd', 'e']);