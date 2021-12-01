function arrayRotation(arr, rotation) {
    for (let i = 0; i < rotation; i++) {
        let temp = arr.shift();
        arr.push(temp);
    }
    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);