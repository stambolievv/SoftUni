function worldTour(arr) {
    let string = arr.shift();

    const actions = {
        'Add Stop': add,
        'Remove Stop': remove,
        'Switch': swap,
    };

    let line = arr.shift();
    while (line !== 'Travel') {
        const [command, tokenOne, tokenTwo] = line.split(':');
        const action = actions[command];
        action(tokenOne, tokenTwo);
        console.log(string);
        line = arr.shift();
    }

    return console.log('Ready for world tour! Planned stops: ' + string);

    function add(position, word) {
        if (isIndexValid(Number(position))) {
            const left = string.substring(0, Number(position));
            const right = string.substring(Number(position));
            return string = (left + word + right);
        }
    }
    function remove(start, end) {
        if (isIndexValid(start) && isIndexValid(end)) {
            const left = string.substring(0, Number(start));
            const right = string.substring(Number(end) + 1);
            return string = (left + right);
        }
    }
    function swap(oldStr, newStr) {
        const pattern = new RegExp(oldStr, 'g');
        return string = string.replace(pattern, newStr);
    }
    function isIndexValid(index) {
        return (index >= 0) && (index < string.length);
    }
}
worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
]);