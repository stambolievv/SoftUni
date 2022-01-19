function listOfNames(arr) {
    const result = arr.sort((a, b) => a.localeCompare(b));
    result.forEach((v, i) => console.log(`${i + 1}.${result[i]}`));
    // for (let i = 0; i < result.length; i++) {
    //     console.log(`${i + 1}.${result[i]}`);
    // }
}
listOfNames(['John', 'Bob', 'Christina', 'Ema']);