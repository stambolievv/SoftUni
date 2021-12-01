function solve(arr) {

    let str = arr.shift();

    const actions = {
        'Translate': replace,
        'Includes': isIncluded,
        'Start': start,
        'Lowercase': toLower,
        'FindIndex': find,
        'Remove': remove,
    };

    for (const line of arr) {
        if (line === 'End') { return; };
        const [command, tokenOne, tokenTwo] = line.split(' ');
        const action = actions[command];
        action(tokenOne, tokenTwo);
    }

    function replace(char, replacement) {
        return console.log(str = str.split(char).join(replacement));
    }
    function isIncluded(string) {
        if (str.includes(string)) {
            console.log('True');
        } else {
            console.log('False');
        }
        return;
    }
    function start(string) {
        if (str.split(' ')[0] === string) {
            console.log('True');
        } else {
            console.log('False');
        }
        return;
    }
    function toLower() {
        return console.log(str = str.toLowerCase());
    }
    function find(char) {
        return console.log(str.lastIndexOf(char));
    }
    function remove(index, count) {
        index = Number(index);
        count = Number(count);
        let cut = str.slice(index, index + count);
        console.log(str.split(cut).join(''));
    }
}
solve([
    '*S0ftUni is the B3St Plac3**',
    'Translate 2 o',
    'Includes best',
    'Start the',
    'Lowercase',
    'FindIndex P',
    'Remove 2 7',
    'End'
]);