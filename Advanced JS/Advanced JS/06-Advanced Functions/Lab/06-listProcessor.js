function listProcessor(arr) {
    let result = [];

    const actions = {
        'add': addString,
        'remove': removeString,
        'print': printResult
    };

    for (const line of arr) {
        const [command, string] = line.split(' ');
        const action = actions[command];
        if (action !== undefined) { action(string); };
    }

    function addString(str) {
        result.push(str);
    }
    function removeString(str) {
        result = result.filter(string => string != str);
    }
    function printResult() {
        console.log(result.join());
    }
}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);