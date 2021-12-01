function bombNumbers(arr, specialBomb) {
    let bomb = specialBomb.shift();
    let power = specialBomb.shift();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === bomb) {
            let bombIndex = arr.indexOf(bomb);
            let startIndex = Math.max(bombIndex - power, 0);
            arr.splice(bombIndex, power + 1);
            arr.splice(startIndex, power);
            i = 0;
        }
    }
    console.log(arr.reduce((a, b) => a + b, 0));
}
bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);