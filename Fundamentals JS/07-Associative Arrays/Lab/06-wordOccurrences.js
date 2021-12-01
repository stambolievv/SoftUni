function wordOccurrences(arr) {
    let words = {};
    for (const iterator of arr) {
        if (words.hasOwnProperty(iterator)) {
            words[iterator]++;
        } else {
            words[iterator] = 1;
        }
    }
    let sorted = Object.entries(words).sort((a, b) => { return b[1] - a[1]; });
    for (const [k, v] of sorted) {
        console.log(`${k} -> ${v} times`);
    }
}
wordOccurrences([
    'Here', 'is', 'the', 'first', 'sentence', 'Here', 'is', 'another', 'sentence', 'And', 'finally', 'the', 'third', 'sentence'
]);