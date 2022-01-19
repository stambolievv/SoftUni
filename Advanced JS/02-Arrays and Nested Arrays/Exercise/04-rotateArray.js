function rotateArray(arr, nRotate) {
    for (let i = 0; i < nRotate; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(' '));
}
rotateArray(['1', '2', '3', '4'], 2);