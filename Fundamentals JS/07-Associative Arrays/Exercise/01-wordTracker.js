function wordTracker(arr) {
    let lookingFor = arr.shift().split(' ');

    let words = {};

    for (const iterator of lookingFor) {
        words[iterator] = 0;
    }

    for (const iterator of arr) {
        if (Object.keys(words).includes(iterator)) {
            words[iterator]++;
        }
    }

    let sorted = Object.entries(words).sort((a, b) => { return b[1] - a[1]; });

    for (const [k, v] of sorted) {
        console.log(`${k} - ${v}`);
    }
}
wordTracker([
    'this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurances', 'of', 'the',
    'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);