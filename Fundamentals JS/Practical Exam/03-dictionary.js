function solve(arr) {
    let dictionary = {};
    let words = arr.shift().split(' | ');
    for (const current of words) {
        let [word, definition] = current.split(': ');
        if (dictionary.hasOwnProperty(word)) {
            dictionary[word].push(definition);
        } else {
            dictionary[word] = [definition];
        }
    }

    let teacherTest = arr.shift().split(' | ');

    let command = arr.pop();
    if (command === 'Test') {
        for (const word of teacherTest) {
            if (dictionary.hasOwnProperty(word)) {
                console.log(word + ':');
                let sorted = dictionary[word].sort((a, b) => b.length - a.length);
                sorted.forEach(definition => console.log('-' + definition));
            }
        }
    } else if (command === 'Hand Over') {
        let sorted = Object.keys(dictionary).sort((a, b) => a.localeCompare(b));
        console.log(sorted.join(' '));
    }
}
solve([
    'tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance',
    'bit | code | tackle',
    'Test'
]);

// solve([
//     "programmer: an animal, which turns coffee into code | developer: a magician",
//     "fish | domino",
//     "Hand Over"
// ]);

solve([
    'care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin',
    'care | kitchen | flower',
    'Test'
]);

