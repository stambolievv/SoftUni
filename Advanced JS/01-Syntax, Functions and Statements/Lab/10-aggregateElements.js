function aggregateElements(arr) {
    let sum = 0;
    let divide = 0;
    let concat = '';
    for (const num of arr) {
        sum += num;
        divide += 1 / num;
        concat += num;
    }
    console.log(sum + '\n' + divide + '\n' + concat);
}
aggregateElements([1, 2, 3]);