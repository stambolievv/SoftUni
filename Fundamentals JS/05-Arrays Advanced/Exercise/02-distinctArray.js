function distinctArray(arr) {
    let result = [];
    for (const iterator of arr) {
        !result.includes(iterator) ? result.push(iterator) : null;
    }
    console.log(result.join(' '));
}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);