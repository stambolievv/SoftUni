function sorting(arr) {
    let result = [];
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let num;
        if (i % 2 === 0) {
            num = Math.max(...arr);
        } else {
            num = Math.min(...arr);
        }
        result.push(num);
        arr.splice(arr.indexOf(num), 1);
    }
    console.log(result.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);