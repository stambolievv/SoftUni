function sumFirstAndLast(arr) {
    let first = Number(arr.shift());
    let last = Number(arr.pop());
    return first + last;
}
console.log(sumFirstAndLast(['5', '10']));